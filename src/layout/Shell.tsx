import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Shell(){
  return (
    <div className="min-h-screen bg-dongson">

      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-10">
        <Outlet/>
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-10 text-xs text-white/70">
        <div className="glass p-6 rounded-2xl">
          © {new Date().getFullYear()} UNITY LAB • “Hiệp thương khác biệt – cộng hưởng sức mạnh”
        </div>
      </footer>
    </div>
  );
}
