import { useState } from "react";
import { motion } from "framer-motion";

type Score = { tonTrongKhacBiet:number; hiepThuong:number; pheBinh:number };
const base: Score = { tonTrongKhacBiet:0, hiepThuong:0, pheBinh:0 };

const OPTIONS = [
  {
    id:"im_lang",
    title:"Im lặng cho “êm chuyện”",
    explain:"Ổn định bề mặt nhưng dồn nén mâu thuẫn, rủi ro cao.",
    delta:{ tonTrongKhacBiet:-2, hiepThuong:-3, pheBinh:-3 }
  },
  {
    id:"ap_dat",
    title:"Áp đặt, kết luận nhanh",
    explain:"Tạo phản ứng, suy yếu lòng tin.",
    delta:{ tonTrongKhacBiet:-3, hiepThuong:-2, pheBinh:-2 }
  },
  {
    id:"hiep_thuong",
    title:"Mở phiên hiệp thương dân chủ + phê bình & tự phê bình",
    explain:"Tôn trọng khác biệt, tìm điểm đồng vì lợi ích chung.",
    delta:{ tonTrongKhacBiet:+4, hiepThuong:+5, pheBinh:+4 }
  }
];

function sumScore(s:Score){ return s.tonTrongKhacBiet + s.hiepThuong + s.pheBinh; }

export default function DebateSimulator(){
  const [score, setScore] = useState<Score>(base);
  const [picked, setPicked] = useState<string|null>(null);

  const choose = (id:string)=>{
    const opt = OPTIONS.find(o=>o.id===id)!;
    setPicked(id);
    setScore(s=>({
      tonTrongKhacBiet: s.tonTrongKhacBiet + opt.delta.tonTrongKhacBiet,
      hiepThuong: s.hiepThuong + opt.delta.hiepThuong,
      pheBinh: s.pheBinh + opt.delta.pheBinh
    }));
  };

  const total = sumScore(score);
  const verdict = total>=6 ? "Phù hợp tinh thần đoàn kết" : total>=0 ? "Trung tính" : "Suy yếu đoàn kết";

  return (
    <div className="glass p-6 space-y-4">
      <div className="text-lg font-semibold">Tình huống</div>
      <p className="text-white/80">
        Nhóm có mâu thuẫn về phân bổ nguồn lực. Một số người nói: “Giữ đoàn kết, đừng tranh luận nữa!” Bạn xử lý thế nào?
      </p>

      <div className="grid md:grid-cols-3 gap-3">
        {OPTIONS.map(o=>(
          <button key={o.id} onClick={()=>choose(o.id)}
            className={`p-4 rounded-xl text-left transition glass hover:bg-white/10 ${picked===o.id?"ring-2 ring-brand-400":""}`}>
            <div className="font-semibold">{o.title}</div>
            <div className="text-sm text-white/70 mt-1">{o.explain}</div>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-3 text-sm">
        <Stat label="Tôn trọng khác biệt" v={score.tonTrongKhacBiet}/>
        <Stat label="Hiệp thương dân chủ" v={score.hiepThuong}/>
        <Stat label="Phê bình & tự phê bình" v={score.pheBinh}/>
        <div className="glass p-4">
          <div className="text-white/70">Kết luận</div>
          <div className="text-accent-500 font-semibold">{verdict}</div>
        </div>
      </div>
    </div>
  )
}

function Stat({label,v}:{label:string; v:number}){
  const percent = Math.max(0, Math.min(100, (v+5)*10));
  return (
    <div className="glass p-4">
      <div className="text-white/70">{label}</div>
      <div className="h-2 bg-white/10 rounded mt-2">
        <motion.div initial={{width:0}} animate={{width:`${percent}%`}}
          className="h-2 rounded bg-gradient-to-r from-brand-500 via-deep-500 to-accent-500" />
      </div>
      <div className="text-xs text-white/60 mt-1">điểm: {v}</div>
    </div>
  );
}
