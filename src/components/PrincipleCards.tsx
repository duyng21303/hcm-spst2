import { PRINCIPLES } from "../data/principles";
import { motion } from "framer-motion";

export default function PrincipleCards(){
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {PRINCIPLES.map((p,idx)=>(
        <motion.div
          key={p.title}
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay: idx*0.05}}
          className="glass p-5"
        >
          <div className="text-lg font-semibold">{p.title}</div>
          <p className="text-sm text-white/80 mt-1">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
