import { FORCE_NODES, TOOLTIP_TEXTS } from "../data/forces";

function BadgeWithTooltip({ label }: { label: string }) {
  return (
    <span className="relative group">
      <span className="badge">{label}</span>
      <span className="absolute z-10 hidden group-hover:block w-64 p-2 text-xs text-white bg-black/80 rounded-md -top-12 left-1/2 -translate-x-1/2">
        {TOOLTIP_TEXTS[label]}
      </span>
    </span>
  );
}

export default function Forces() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">I.2 Lực lượng của khối đại đoàn kết</h2>
      <p className="text-white/80">
        Bản đồ lực lượng – chủ thể rộng rãi & nền tảng (liên minh công–nông–trí).
      </p>

      <div className="rounded-xl border border-white/10 p-4 text-sm glass">
        <div className="flex flex-wrap gap-3">
          <BadgeWithTooltip label="Chủ thể" />
          <BadgeWithTooltip label="Nền tảng" />
          <BadgeWithTooltip label="Hiệp thương dân chủ" />
          <BadgeWithTooltip label="Cầu đồng tồn dị" />
        </div>
        <p className="mt-2 text-white/70">
          Điểm quy tụ lợi ích chung: độc lập dân tộc, tự do & hạnh phúc của nhân dân.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch auto-rows-fr">
        {FORCE_NODES.map((n) => (
          <div key={n.id} className="glass p-4 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{n.id}</div>
              <span
                className={
                  n.role === "nen_tang"
                    ? "badge badge-success relative group"
                    : "badge relative group"
                }
              >
                {n.role === "nen_tang" ? "Nền tảng" : "Chủ thể"}
              </span>
            </div>

            {n.notes && (
              <div className="mt-2 text-sm text-white/80">{n.notes}</div>
            )}

            <div className="mt-auto pt-3 flex flex-wrap gap-2 text-xs">
              <BadgeWithTooltip label="Hiệp thương dân chủ" />
              <BadgeWithTooltip label="Cầu đồng tồn dị" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}