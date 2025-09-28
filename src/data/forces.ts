export type ForceNode = {
  id: string;
  group: "giai_cap"|"ton_giao"|"dan_toc"|"gioi_tre"|"tri_thuc"|"doanh_nhan"|"phu_nu"|"kieu_bao"|"khac";
  weight?: number;
};

export const FORCE_NODES: ForceNode[] = [
  { id:"Công nhân", group:"giai_cap", weight: 3 },
  { id:"Nông dân", group:"giai_cap", weight: 3 },
  { id:"Trí thức", group:"tri_thuc", weight: 2 },
  { id:"Doanh nhân", group:"doanh_nhan", weight: 2 },
  { id:"Thanh niên", group:"gioi_tre", weight: 2 },
  { id:"Phụ nữ", group:"phu_nu", weight: 2 },
  { id:"Đồng bào tôn giáo", group:"ton_giao" },
  { id:"Đồng bào dân tộc thiểu số", group:"dan_toc" },
  { id:"Kiều bào", group:"kieu_bao" },
];
