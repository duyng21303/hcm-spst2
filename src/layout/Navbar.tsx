import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import { FaFlask, FaPlay, FaSearch } from "react-icons/fa";

const linkCls = ({ isActive }: {isActive:boolean}) =>
  `px-3 py-2 rounded-lg hover:bg-white/10 ${isActive ? "bg-white/10" : ""}`;

export default function Navbar(){
  const mode = useAppStore(s => s.mode);
  const toggle = useAppStore(s => s.toggleMode);

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 glass">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <FaFlask className="text-brand-400" />
            <span className="font-semibold">UNITY LAB</span>
          </Link>
          <nav className="flex-1 flex gap-1 text-sm">
            <NavLink to="/vai-tro" className={linkCls}>Vai trò</NavLink>
            <NavLink to="/luc-luong" className={linkCls}>Lực lượng</NavLink>
            <NavLink to="/dieu-kien" className={linkCls}>Điều kiện</NavLink>
            <NavLink to="/mat-tran" className={linkCls}>Mặt trận</NavLink>
            <NavLink to="/phuong-thuc" className={linkCls}>Phương thức</NavLink>
            <NavLink to="/debate" className={linkCls}>Debate</NavLink>
            <NavLink to="/cap-nhat" className={linkCls}>Thực tiễn</NavLink>
            <NavLink to="/ai-usage" className={linkCls}>AI Usage</NavLink>
          </nav>
         <button onClick={toggle} className="badge flex items-center gap-2 text-vn-gold">
  {mode==="presentation" ? "Trình bày" : "Khám phá"}
</button>
<div className="h-[2px] bg-gradient-to-r from-vn-red via-vn-gold to-vn-bamboo mt-2 rounded" />

        </div>
        <motion.div
          layoutId="nav-underline"
          className="h-[2px] bg-gradient-to-r from-brand-500 via-deep-500 to-accent-500 mt-2 rounded"
        />
      </div>
    </div>
  )
}
