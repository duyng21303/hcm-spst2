import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <section className="relative overflow-hidden rounded-3xl p-10 glass">
      <motion.h1
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6}}
        className="text-3xl md:text-5xl font-extrabold tracking-tight"
      >
        ĐẠI ĐOÀN KẾT – <span className="text-brand-300">UNITY LAB</span>
      </motion.h1>

      <p className="mt-4 text-white/80 max-w-2xl">
        Trải nghiệm tư tưởng Hồ Chí Minh qua mô phỏng, debate simulator, quiz & poll.
      </p>

      <div className="mt-6 flex gap-3">
        <Link to="/vai-tro" className="px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 shadow-glow">Bắt đầu thí nghiệm</Link>
        <Link to="/debate" className="px-5 py-3 rounded-xl bg-deep-700 hover:bg-deep-500">Vào Debate</Link>
      </div>

      {/* hiệu ứng blob */}
      <motion.div
        animate={{ x:[0,20,-10,0], y:[0,-10,10,0], scale:[1,1.05,0.98,1] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-brand-500/30 blur-3xl"
      />
      <motion.div
        animate={{ x:[0,-20,10,0], y:[0,10,-10,0], scale:[1,0.98,1.05,1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-deep-500/25 blur-3xl"
      />
    </section>
  )
}
