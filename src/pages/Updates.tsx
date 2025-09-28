import { UPDATES } from "../data/update"

export default function Updates(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Thực tiễn & cập nhật</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {UPDATES.map((u, idx) => (
  <article key={idx} className="glass p-4">
    <div className="text-sm text-brand-200">{u.tag}</div>
    <div className="font-semibold">{u.title}</div>
    <p className="text-sm text-white/80 mt-2">{u.desc}</p>
    {u.sourceText && u.sourceUrl && (
      <p className="mt-2 text-xs text-white/60">
        Nguồn: <a href={u.sourceUrl} target="_blank" rel="noopener noreferrer">{u.sourceText}</a>
      </p>
    )}
  </article>
))}
      </div>
    </div>
  )
}
