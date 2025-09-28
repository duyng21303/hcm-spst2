import { FORCE_NODES } from "../data/forces";

export default function Forces(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">I.2 Lực lượng của khối đại đoàn kết</h2>
      <p className="text-white/80">Bản đồ lực lượng – điểm tương đồng / khác biệt / lợi ích chung.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {FORCE_NODES.map(n=>(
          <div key={n.id} className="glass p-4">
            <div className="text-lg font-semibold">{n.id}</div>
            <div className="mt-2 grid gap-2 text-sm">
              <div><span className="badge">Tương đồng</span> Lợi ích quốc gia, phát triển bền vững.</div>
              <div><span className="badge">Khác biệt</span> Vị trí, nhu cầu, điều kiện sống.</div>
              <div><span className="badge">Điểm đồng</span> Độc lập, hoà bình, phồn vinh.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
