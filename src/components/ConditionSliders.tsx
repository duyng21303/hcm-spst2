import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const FIELDS = [
  { key:"loi_ich", label:"Hài hoà lợi ích" },
  { key:"dan_chu", label:"Dân chủ tham gia" },
  { key:"niem_tin", label:"Niềm tin" },
  { key:"chinh_sach", label:"Công bằng chính sách" },
  { key:"khoan_dung", label:"Khoan dung khác biệt" },
] as const;

type FieldKey = typeof FIELDS[number]["key"];

export default function ConditionSliders(){
  const [state, setState] = useState<Record<FieldKey,number>>({
    loi_ich:60, dan_chu:60, niem_tin:60, chinh_sach:60, khoan_dung:60
  });

  const risk = useMemo(()=>{
    // rủi ro chia rẽ giảm khi điều kiện tăng
    const avg = Object.values(state).reduce((a,b)=>a+b,0)/FIELDS.length;
    return Math.round(100-avg);
  }, [state]);

  return (
    <div className="glass p-6 space-y-4">
      {FIELDS.map(f=>(
        <div key={f.key}>
          <div className="flex justify-between text-sm">
            <span>{f.label}</span>
            <span className="text-white/60">{state[f.key]}</span>
          </div>
          <input type="range" min={0} max={100} value={state[f.key]}
            onChange={e=>setState(s=>({...s, [f.key]: parseInt(e.target.value)}))}
            className="w-full accent-accent-500" />
        </div>
      ))}
      <div>
        <div className="text-sm mb-1">Rủi ro chia rẽ (càng thấp càng tốt): {risk}%</div>
       <div className="h-3 w-full rounded bg-[var(--track)] overflow-hidden">
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: `${risk}%` }}
    transition={{ type: "spring", stiffness: 80 }}
    className="h-full"
    style={{ background: "linear-gradient(90deg, #ef4444, var(--accent))" }} // đỏ -> vàng
  />
</div>

      </div>
      <p className="text-xs text-white/70">
        Gợi ý: tăng <b>hiệp thương dân chủ</b>, <b>đối thoại</b>, <b>chính sách hài hoà</b> → rủi ro giảm.
      </p>
    </div>
  )
}
