import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NeatBackground from "../components/NeatBackground";
import PosterOverlay from "../components/PosterOverlay";
export default function Shell(){
  return (
    <div className="min-h-screen bg-dongson">
<NeatBackground />
 <PosterOverlay
        src="/assets/posters/doan-ket-poster.jpg"
        opacity={0.22}      // 0.18–0.28 là đẹp
        blur={2}            // 1–3px, tránh quá nặng
        blend="overlay"     // thử "multiply"/"soft-light" nếu thích
        vignette            // tối nhẹ viền cho đỡ chói
      />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-10">
        <Outlet/>
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-10 text-xs text-white/70">
        <div className="glass p-6 rounded-2xl">
          © {new Date().getFullYear()} Đại đoàn kết dân tộc - “Hiệp thương khác biệt – cộng hưởng sức mạnh”
        </div>
      </footer>
    </div>
  );
}
