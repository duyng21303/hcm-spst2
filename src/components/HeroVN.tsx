import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroVN(){
  return (
    <section className="relative overflow-hidden rounded-3xl glass p-10">
      {/* ngôi sao vàng mờ phía sau */}
      <motion.svg
        initial={{scale: .9, opacity:.18, rotate:0}}
        animate={{scale: 1, opacity:.22, rotate: 5}}
        transition={{duration: 18, repeat: Infinity, repeatType: "mirror"}}
        viewBox="0 0 100 100"
        className="absolute -top-16 -right-10 w-[420px] h-[420px] text-vn-gold"
      >
        <polygon
          points="50,10 61,38 91,38 66,56 76,86 50,68 24,86 34,56 9,38 39,38"
          fill="currentColor"
          opacity="0.6"
          />
      </motion.svg>

      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
        <span className="text-vn-gold">ĐẠI ĐOÀN KẾT</span> – UNITY LAB
      </h1>
      <p className="mt-4 text-white/80 max-w-2xl font-serif">
        “Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.”
      </p>

      <div className="mt-6 flex gap-3">
        <Link to="/vai-tro" className="btn-red">Bắt đầu thí nghiệm</Link>
        <Link to="/debate" className="btn-gold">Vào Debate</Link>
      </div>
    </section>
  );
}
