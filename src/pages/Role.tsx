import { useAppStore } from "../store/useAppStore";
import NetworkGraph from "../components/NetworkGraph";

export default function Role(){
  const cohesion = useAppStore(s=>s.cohesion);
  const setCohesion = useAppStore(s=>s.setCohesion);

  const success = Math.round(30 + cohesion*0.7); // điểm “thành công” minh hoạ

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">I.1 Vai trò của đại đoàn kết</h2>
      <p className="text-white/80">
        Đại đoàn kết là chiến lược lâu dài & điều kiện thắng lợi. Dùng thanh trượt để xem ảnh hưởng tới “điểm thành công”.
      </p>

      <div className="glass p-4 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label className="text-sm text-white/70">Độ gắn kết (cohesion): {cohesion}</label>
          <input
            type="range" min={0} max={100} value={cohesion}
            onChange={(e)=>setCohesion(parseInt(e.target.value))}
            className="w-full accent-brand-500"
          />
          <div className="mt-2 h-3 w-full bg-white/10 rounded">
            <div className="h-3 rounded bg-gradient-to-r from-brand-500 via-deep-500 to-accent-500"
                 style={{ width: `${success}%` }}/>
          </div>
          <div className="text-xs text-white/70 mt-1">Điểm thành công (minh hoạ): {success}</div>
        </div>
        <div className="flex-1 w-full">
          <NetworkGraph />
        </div>
      </div>
    </div>
  );
}
