import { useState } from "react";
import { METHODS } from "../data/methods";
import { AnimatePresence, motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";

export default function MethodToolkit(){
  const [picked, setPicked] = useState<string[]>([]);
  const add = (id:string)=> setPicked(p => p.includes(id) ? p : [...p, id]);
  const remove = (id:string)=> setPicked(p=> p.filter(x=>x!==id));
  const { cohesion, setCohesion } = useAppStore();

  const total = picked.length * 6; // minh hoạ
  const newCohesion = Math.min(100, cohesion + total);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="glass p-4">
        <div className="text-sm mb-2">Kéo/chọn phương thức (nhấp để thêm):</div>
        <div className="flex flex-wrap gap-2">
          {METHODS.map(m=>(
            <button key={m.id} onClick={()=>add(m.id)} className="badge hover:scale-105 transition">
              {m.label}
            </button>
          ))}
        </div>
        <div className="mt-4 text-sm text-white/70">Tác động tổng hợp: +{total} cohesion</div>
        <button
          onClick={()=> setCohesion(newCohesion)}
          className="mt-3 px-4 py-2 rounded-xl bg-accent-500 hover:bg-accent-700"
        >
          Áp dụng vào mô phỏng
        </button>
      </div>

      <div className="glass p-4">
        <div className="text-sm mb-2">Phương thức đã chọn (nhấp để bỏ):</div>
        <div className="flex flex-wrap gap-2 min-h-[52px]">
          <AnimatePresence>
            {picked.map(id=>{
              const m = METHODS.find(x=>x.id===id)!;
              return (
                <motion.button
                  key={id}
                  onClick={()=>remove(id)}
                  initial={{opacity:0, scale:.9}}
                  animate={{opacity:1, scale:1}}
                  exit={{opacity:0, scale:.9}}
                  className="badge bg-deep-700/50 border-deep-500/40"
                >
                  {m.label}
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
