// data/forces.ts
export type ForceNode = {
  id: string;
  group:
    | "giai_cap"
    | "ton_giao"
    | "dan_toc"
    | "gioi_tre"
    | "tri_thuc"
    | "doanh_nhan"
    | "phu_nu"
    | "kieu_bao"
    | "khac";
  role: "chu_the" | "nen_tang";
  weight?: number;
  notes?: string;
};

export const FORCE_NODES: ForceNode[] = [
  {
    id: "Công nhân",
    group: "giai_cap",
    role: "nen_tang",
    weight: 3,
    notes:
      "Lực lượng chủ yếu trong khối đoàn kết; cùng nông dân và trí thức tạo nền gốc của đại đoàn kết.",
  },
  {
    id: "Nông dân",
    group: "giai_cap",
    role: "nen_tang",
    weight: 3,
    notes:
      "Cùng công nhân và trí thức làm nền tảng vững chắc để mở rộng mặt trận.",
  },
  {
    id: "Trí thức",
    group: "tri_thuc",
    role: "nen_tang",
    weight: 2,
    notes:
      "Một trong ba trụ cột nền tảng; cần liên minh chặt chẽ dưới sự lãnh đạo của Đảng.",
  },
  {
    id: "Doanh nhân",
    group: "doanh_nhan",
    role: "chu_the",
    weight: 2,
    notes:
      "Lực lượng cần được đoàn kết nếu phụng sự Tổ quốc và nhân dân; tôn trọng lợi ích chính đáng.",
  },
  {
    id: "Thanh niên",
    group: "gioi_tre",
    role: "chu_the",
    weight: 2,
    notes:
      "Đội ngũ xung kích; được tập hợp qua các đoàn thể phù hợp (Đoàn TN...).",
  },
  {
    id: "Phụ nữ",
    group: "phu_nu",
    role: "chu_the",
    weight: 2,
    notes:
      "Lực lượng rộng rãi; tập hợp qua Hội Phụ nữ, cùng tiến bộ trong mặt trận.",
  },
  {
    id: "Đồng bào tôn giáo",
    group: "ton_giao",
    role: "chu_the",
    notes:
      "Đoàn kết chặt chẽ giữa đồng bào lương và đồng bào tôn giáo; xây dựng đời sống hòa thuận, ấm no.",
  },
  {
    id: "Đồng bào dân tộc thiểu số",
    group: "dan_toc",
    role: "chu_the",
    notes:
      "Đoàn kết các dân tộc anh em; cùng nhau xây dựng Tổ quốc.",
  },
  {
    id: "Kiều bào",
    group: "kieu_bao",
    role: "chu_the",
    notes:
      "Mặt trận quy tụ cả trong nước và kiều bào ở nước ngoài, miễn cùng hướng về mục tiêu chung.",
  },
];

export const TOOLTIP_TEXTS: Record<string, string> = {
  "Hiệp thương dân chủ":
    "“Hoạt động theo nguyên tắc hiệp thương dân chủ, bảo đảm sự thống nhất lợi ích giữa các giai cấp, dân tộc, tôn giáo…” (Giáo trình Tư tưởng Hồ Chí Minh ((2021)), Chương V, Phần I, mục 4).",
  "Cầu đồng tồn dị":
    "“Đoàn kết lâu dài, chặt chẽ, thật sự, chân thành, thân ái giúp nhau cùng tiến bộ” – phương châm cầu đồng tồn dị. (Giáo trình Tư tưởng Hồ Chí Minh ((2021)), Chương V, Phần I, mục 4).",
  "Nền tảng":
    "“Phải được xây dựng trên nền tảng liên minh công – nông – trí thức, đặt dưới sự lãnh đạo của Đảng.” (Giáo trình Tư tưởng Hồ Chí Minh ((2021)), Chương V, Phần I, mục 4).",
  "Chủ thể":
    "“Chủ thể của khối đại đoàn kết toàn dân tộc bao gồm toàn thể nhân dân Việt Nam không phân biệt dân tộc, giai cấp, tôn giáo, lứa tuổi…” (Giáo trình Tư tưởng Hồ Chí Minh ((2021)), Chương V, Phần I, mục 2).",
};
