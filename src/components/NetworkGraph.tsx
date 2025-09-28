import { useEffect, useRef } from "react";
import {
  // d3-selection
  select,
  // d3-drag
  drag as d3drag,
  // d3-force
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
  // d3-scale
  scaleOrdinal,
  scaleLinear,
  // d3-scale-chromatic
  schemeTableau10,
} from "d3";

import { FORCE_NODES } from "../data/forces";
import { useAppStore } from "../store/useAppStore";

/** ------------------ Local types (không phụ thuộc d3 types) ------------------ */
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

/** ------------------ Links: thêm cầu nối để không “trôi đảo” ------------------ */
const LINKS: LinkDatum[] = [
  { source: "Công nhân", target: "Nông dân" },
  { source: "Công nhân", target: "Trí thức" },
  { source: "Nông dân",  target: "Doanh nhân" },
  { source: "Trí thức",  target: "Thanh niên" },
  { source: "Phụ nữ",    target: "Thanh niên" },
  { source: "Kiều bào",  target: "Doanh nhân" },
  { source: "Kiều bào",  target: "Trí thức" },

  // 2 nút hay bị “rời” — nối đa hướng vào lõi
  { source: "Đồng bào tôn giáo",         target: "Đồng bào dân tộc thiểu số", strength: 0.5, distance: 90 },
  { source: "Đồng bào tôn giáo",         target: "Phụ nữ",     distance: 100 },
  { source: "Đồng bào tôn giáo",         target: "Trí thức",   distance: 110 },
  { source: "Đồng bào dân tộc thiểu số", target: "Nông dân",   distance: 110 },
  { source: "Đồng bào dân tộc thiểu số", target: "Công nhân",  distance: 110 },
  { source: "Đồng bào dân tộc thiểu số", target: "Thanh niên", distance: 110 },
];

export default function NetworkGraph() {
  const ref = useRef<SVGSVGElement>(null);
  const cohesion = useAppStore((s) => s.cohesion);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const width = el.clientWidth || 700;
    const height = 420;

    const svg = select(el);
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", height);

    const nodes: NodeDatum[] = FORCE_NODES.map((d) => ({ ...d }));
    const links: LinkDatum[] = LINKS.map((d) => ({ ...d }));

const COLOR_BY_GROUP: Record<string,string> = {
  giai_cap:  "#1976D2", // xanh công – công nhân
  tri_thuc:  "#FFCD00", // vàng trí thức
  doanh_nhan:"#E85D75", // hồng sen (năng động)
  gioi_tre:  "#1E3A8A", // lam chàm
  phu_nu:    "#2E7D32", // xanh tre
  ton_giao:  "#DA251D", // đỏ ý chí & niềm tin
  dan_toc:   "#B45309", // nâu đất (bản sắc)
  kieu_bao:  "#8E24AA", // tím (kết nối xa gần)
  khac:      "#94A3B8"
};
const color = (group: string) => COLOR_BY_GROUP[group] ?? "#94A3B8";
    const linkStrengthBase = scaleLinear().domain([0, 100]).range([0.05, 0.6])(cohesion) as number;
    const charge = scaleLinear().domain([0, 100]).range([-60, -5])(cohesion) as number;

    const sim = forceSimulation<NodeDatum>(nodes)
      .force(
        "link",
        forceLink<NodeDatum, LinkDatum>(links)
          // d3 nhận id kiểu any → dùng any cho chắc
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .id((d: any) => d.id)
          .strength((d) => d.strength ?? linkStrengthBase)
          .distance((d) => d.distance ?? 95)
      )
      .force("charge", forceManyBody().strength(charge))
      .force("center", forceCenter(width / 2, height / 2))
      .force("collision", forceCollide<NodeDatum>().radius((d) => (d.weight ?? 1) * 10 + 18))
      // lực hướng tâm nhẹ để hạn chế trôi rìa
      .force("x", forceX(width / 2).strength(0.03))
      .force("y", forceY(height / 2).strength(0.03));

    /** ------------------ Drag handlers ------------------ */
    const dragStarted = (event: any, d: NodeDatum) => {
      if (!event.active) sim.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };
    const dragged = (event: any, d: NodeDatum) => {
      d.fx = event.x;
      d.fy = event.y;
    };
    const dragEnded = (event: any, d: NodeDatum) => {
      if (!event.active) sim.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    };

    /** ------------------ Links ------------------ */
    const link = svg
      .append("g")
      .attr("stroke", "rgba(255,255,255,.25)")
      .attr("stroke-width", 1.2)
      .selectAll<SVGLineElement, LinkDatum>("line")
      .data(links)
      .enter()
      .append("line");

    /** ------------------ Nodes ------------------ */
    const node = svg
      .append("g")
      .selectAll<SVGGElement, NodeDatum>("g")
      .data(nodes)
      .enter()
      .append("g")
      .call(
        d3drag<SVGGElement, NodeDatum>()
          .on("start", dragStarted)
          .on("drag", dragged)
          .on("end", dragEnded)
      );

    node
      .append("circle")
      .attr("r", (d) => (d.weight ?? 1) * 10 + 10)
      .attr("fill", (d) => color(d.group))
      .attr("fill-opacity", 0.85)
      .attr("stroke", "white")
      .attr("stroke-opacity", 0.3);

    node
      .append("text")
      .text((d) => d.id)
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .attr("dy", 4)
      .attr("fill", "white")
      .style("pointer-events", "none"); // để kéo bằng cách bấm vào chữ cũng trơn tru

    /** ------------------ Ticking ------------------ */
    sim.on("tick", () => {
      link
        .attr("x1", (d: LinkDatum) => ((d.source as NodeDatum).x ?? 0))
        .attr("y1", (d: LinkDatum) => ((d.source as NodeDatum).y ?? 0))
        .attr("x2", (d: LinkDatum) => ((d.target as NodeDatum).x ?? 0))
        .attr("y2", (d: LinkDatum) => ((d.target as NodeDatum).y ?? 0));

      node.attr("transform", (d: NodeDatum) => `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    return () => void sim.stop();
  }, [cohesion]);

  return (
    <div className="glass p-4">
      <svg ref={ref} />
      <p className="mt-3 text-sm text-white/70">
        Kéo thả các nút lực lượng để thấy cách <span className="text-brand-300">liên kết</span> thay đổi sức mạnh tổng thể.
      </p>
    </div>
  );
}
