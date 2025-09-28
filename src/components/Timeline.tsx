import { motion } from "framer-motion";

const EVENTS = [
  { year: "1930", text: "Hội Phản đế đồng minh (khởi đầu mặt trận thống nhất)" },
  { year: "1936", text: "Mặt trận Dân chủ Đông Dương" },
  { year: "1939", text: "Mặt trận Nhân dân phản đế Đông Dương" },
  { year: "1941", text: "Mặt trận Việt Minh" },
  { year: "1951", text: "Mặt trận Liên Việt" },
  { year: "1960", text: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam" },
  { year: "1968", text: "Liên minh các lực lượng dân tộc, dân chủ và hòa bình Việt Nam" },
  { year: "1955, 1976 → nay", text: "Mặt trận Tổ quốc Việt Nam (kế thừa và phát triển)" },
];

export default function Timeline(){
  return (
    <div className="glass p-6 overflow-hidden">
      <div className="relative">
        <div className="absolute left-1 top-0 bottom-0 w-1 bg-white/10 rounded" />
        <div className="space-y-6 pl-6">
          {EVENTS.map((e, idx) => (
            <motion.div
              key={`${e.year}-${idx}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: idx * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-[11px] top-1.5 w-4 h-4 rounded-full bg-brand-400 shadow-glow" />
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-brand-200">{e.year}</div>
                <div className="font-medium">{e.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
