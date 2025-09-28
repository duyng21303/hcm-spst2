import { useEffect, useRef } from "react";
import {
  select,
  drag as d3drag,
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
  forceRadial,        // 👈 thêm
  scaleLinear,
} from "d3";

import { FORCE_NODES } from "../data/forces";
import { useAppStore } from "../store/useAppStore";

type NodeDatum = {
  id: string;
  group: string;
  weight?: number;
  x?: number; y?: number; vx?: number; vy?: number;
  fx?: number | null; fy?: number | null;
};

type LinkDatum = {
  source: string | NodeDatum;
  target: string | NodeDatum;
  strength?: number;
  distance?: number;
};

const LINKS: LinkDatum[] = [
  { source: "Công nhân", target: "Nông dân" },
  { source: "Công nhân", target: "Trí thức" },
  { source: "Nông dân",  target: "Doanh nhân" },
  { source: "Trí thức",  target: "Thanh niên" },
  { source: "Phụ nữ",    target: "Thanh niên" },
  { source: "Kiều bào",  target: "Doanh nhân" },
  { source: "Kiều bào",  target: "Trí thức" },
  { source: "Đồng bào tôn giáo",         target: "Đồng bào dân tộc thiểu số", strength: 0.5, distance: 90 },
  { source: "Đồng bào tôn giáo",         target: "Phụ nữ",     distance: 100 },
  { source: "Đồng bào tôn giáo",         target: "Trí thức",   distance: 110 },
  { source: "Đồng bào dân tộc thiểu số", target: "Nông dân",   distance: 110 },
  { source: "Đồng bào dân tộc thiểu số", target: "Công nhân",  distance: 110 },
  { source: "Đồng bào dân tộc thiểu số", target: "Thanh niên", distance: 110 },
];

const COLOR_BY_GROUP: Record<string,string> = {
  giai_cap:"#1976D2", tri_thuc:"#FFCD00", doanh_nhan:"#E85D75",
  gioi_tre:"#1E3A8A", phu_nu:"#2E7D32", ton_giao:"#DA251D",
  dan_toc:"#B45309", kieu_bao:"#8E24AA", khac:"#94A3B8"
};
const color = (g:string)=> COLOR_BY_GROUP[g] ?? COLOR_BY_GROUP.khac;

export default function NetworkGraph() {
  const ref = useRef<SVGSVGElement>(null);
  const cohesion = useAppStore(s=>s.cohesion);

  useEffect(() => {
    const el = ref.current; if (!el) return;

    const width = el.clientWidth || 700;
    const height = 420;

    const svg = select(el);
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`)
       .attr("width", "100%")
       .attr("height", height)
       .classed("touch-canvas", true);

    const nodes: NodeDatum[] = FORCE_NODES.map(d=>({ ...d }));
    const links: LinkDatum[] = LINKS.map(d=>({ ...d }));

    // ======= BẢN ĐỒ LỰC THEO COHESION (đổi rất mạnh) =======
    const minSide = Math.min(width, height);

    // link rất yếu khi cohesion thấp, rất khỏe khi cao (dùng pow để "đột ngột")
    const linkStrengthBase = scaleLinear().domain([0,100]).range([0.001, 0.7])(cohesion) as number;
    // distance: rất xa khi thấp, gần khi cao
    const linkDistanceBase = scaleLinear().domain([0,100]).range([minSide*0.9, minSide*0.25])(cohesion) as number;
    // charge đẩy: cực mạnh khi thấp, nhẹ khi cao
    const charge = scaleLinear().domain([0,100]).range([-260, -12])(cohesion) as number;
    // lực kéo về tâm: yếu khi thấp (để rời rạc), mạnh khi cao
    const centerStrength = scaleLinear().domain([0,100]).range([0.01, 0.18])(cohesion) as number;
    // lực hướng ra vòng tròn (cho trạng thái thấp thêm "rã đám")
    const radialStrength = scaleLinear().domain([0,100]).range([0.14, 0])(cohesion) as number;
    const radialRadius = scaleLinear().domain([0,100]).range([minSide*0.55, minSide*0.35])(cohesion) as number;

    const sim = forceSimulation<NodeDatum>(nodes)
      .alpha(0.9) // tăng năng lượng ban đầu để sắp xếp lại mạnh
      .force("link",
        forceLink<NodeDatum, LinkDatum>(links)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .id((d:any)=> d.id)
          .strength(d => d.strength ?? linkStrengthBase)
          .distance(d => d.distance ?? linkDistanceBase)
      )
      .force("charge", forceManyBody().strength(charge))
      .force("center", forceCenter(width/2, height/2))
      .force("x", forceX(width/2).strength(centerStrength))
      .force("y", forceY(height/2).strength(centerStrength))
      .force("radial", forceRadial(radialRadius, width/2, height/2).strength(radialStrength))
      .force("collision", forceCollide<NodeDatum>().radius(d => (d.weight ?? 1)*10 + 18));

    // ======= VẼ =======
    const link = svg.append("g")
      .attr("stroke", "rgba(255,255,255,.25)")
      .attr("stroke-width", 1.2)
      .attr("stroke-opacity", scaleLinear().domain([0,100]).range([0.12,0.35])(cohesion) as number)
      .selectAll<SVGLineElement, LinkDatum>("line")
      .data(links).enter().append("line");

    const node = svg.append("g")
      .selectAll<SVGGElement, NodeDatum>("g")
      .data(nodes).enter().append("g")
      .call(
        d3drag<SVGGElement, NodeDatum>()
          .on("start", (ev:any,d)=>{ if(!ev.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
          .on("drag",  (ev:any,d)=>{ d.fx=ev.x; d.fy=ev.y; })
          .on("end",   (ev:any,d)=>{ if(!ev.active) sim.alphaTarget(0); d.fx=null; d.fy=null; })
      );

    node.append("circle")
      .attr("r", d => (d.weight ?? 1)*10 + 10)
      .attr("fill", d => color(d.group))
      .attr("fill-opacity", 0.9)
      .attr("stroke", "white")
      .attr("stroke-opacity", 0.25);

    node.append("text")
      .text(d=>d.id)
      .attr("font-size", 12)
      .attr("text-anchor","middle")
      .attr("dy", 4)
      .attr("fill","white")
      .style("pointer-events","none");

    sim.on("tick", ()=>{
      link
        .attr("x1", (d:LinkDatum)=> ((d.source as NodeDatum).x ?? 0))
        .attr("y1", (d:LinkDatum)=> ((d.source as NodeDatum).y ?? 0))
        .attr("x2", (d:LinkDatum)=> ((d.target as NodeDatum).x ?? 0))
        .attr("y2", (d:LinkDatum)=> ((d.target as NodeDatum).y ?? 0));
      node.attr("transform", (d:NodeDatum)=> `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    return ()=> void sim.stop();
  }, [cohesion]);

  return (
    <div className="glass p-4">
      <svg ref={ref}/>
      <p className="mt-3 text-sm text-white/70">
        Kéo thanh <b>Độ gắn kết</b> xuống thấp để thấy mạng <i>rời rạc</i>; kéo lên cao để thấy mạng <i>quy tụ</i>.
      </p>
    </div>
  );
}
