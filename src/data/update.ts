export type UpdateItem = {
  tag: string;
  title: string;
  desc: string;
  sourceText?: string;
  sourceUrl?: string;
};

export const UPDATES: UpdateItem[] = [
  {
    tag: "Đại đoàn kết",
    title: "Đại hội MTTQ Việt Nam lần thứ X (2024–2029)",
    desc: `Đại hội đại biểu toàn quốc Mặt trận Tổ quốc Việt Nam lần thứ X diễn ra 16–18/10/2024
tại Hà Nội với chủ đề “Đoàn kết – Dân chủ – Đổi mới – Sáng tạo – Phát triển”, tiếp tục khẳng định phương châm phát huy sức mạnh đại đoàn kết toàn dân tộc.`,
    sourceText: "Mặt trận Tổ quốc Việt Nam – Thông cáo báo chí kết quả Đại hội đại biểu toàn quốc Mặt trận Tổ quốc Việt Nam lần thứ X, nhiệm kỳ 2024 - 2029",
    sourceUrl: "https://mattran.org.vn/hoat-dong/thong-cao-bao-chi-ket-qua-dai-hoi-dai-bieu-toan-quoc-mat-tran-to-quoc-viet-nam-lan-thu-x-nhiem-ky-2024-2029-57428.html"
  },
  {
    tag: "Hiệp thương dân chủ",
    title: "Bầu cử Quốc hội 2021 – 3 vòng hiệp thương",
    desc: `Ủy ban Trung ương MTTQ Việt Nam chủ trì 3 vòng hiệp thương năm 2021 để lựa chọn,
lập danh sách người đủ tiêu chuẩn ứng cử đại biểu Quốc hội khóa XV, bảo đảm bàn bạc công khai,
đồng thuận rộng rãi giữa các thành phần xã hội.`,
    sourceText: "Mặt trận Tổ quốc Việt Nam – Vai trò, trách nhiệm của Mặt trận Tổ quốc Việt Nam trong công tác bầu cử",
    sourceUrl: "https://mattran.org.vn/hoat-dong/vai-tro-trach-nhiem-cua-mat-tran-to-quoc-viet-nam-trong-cong-tac-bau-cu-37713.html"
  },
  {
    tag: "Cầu đồng tồn dị",
    title: "Ngày hội Đại đoàn kết tại TP.HCM 2023",
    desc: `Ngày 18/11/2023, TP.HCM tổ chức Ngày hội Đại đoàn kết toàn dân tộc, kỷ niệm 93 năm truyền thống MTTQ.
Hoạt động nhấn mạnh phát huy dân chủ, tăng cường đồng thuận xã hội – “lấy cái chung để hạn chế cái riêng”.`,
    sourceText: "Báo Nhân Dân - Thành phố Hồ Chí Minh tổ chức Ngày hội Đại đoàn kết toàn dân tộc 2023",
    sourceUrl: "https://nhandan.vn/thanh-pho-ho-chi-minh-to-chuc-ngay-hoi-dai-doan-ket-toan-dan-toc-2023-post783297.html"
  },
  {
    tag: "Đại đoàn kết địa phương",
    title: "Ngày hội Đại đoàn kết là nét đẹp văn hóa (2024)",
    desc: `Thừa Thiên Huế và nhiều địa phương tổ chức Ngày hội Đại đoàn kết dịp 18/11/2024,
ôn lại truyền thống MTTQ, đánh giá việc thực hiện Cuộc vận động “Toàn dân đoàn kết xây dựng nông thôn mới, đô thị văn minh”.`,
    sourceText: "Báo Nhân Dân - Đồng chí Nguyễn Xuân Thắng: Ngày hội Đại đoàn kết toàn dân tộc đã trở thành nét đẹp văn hóa",
    sourceUrl: "https://nhandan.vn/dong-chi-nguyen-xuan-thang-ngay-hoi-dai-doan-ket-toan-dan-toc-da-tro-thanh-net-dep-van-hoa-post843239.html"
  },
  
 {
    "tag": "Phong trào – Vận động xã hội",
    "title": "Phong trào thi đua “Cả nước chung sức xây dựng nông thôn mới” giai đoạn 2021 – 2025",
    "desc": "Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội các cấp tuyên truyền, vận động, tăng cường sự đồng thuận trong các tầng lớp nhân dân để chung sức xây dựng nông thôn mới; vận động đoàn viên, hội viên và nhân dân tham gia hưởng ứng tích cực Phong trào thi đua gắn với Cuộc vận động “Toàn dân đoàn kết xây dựng nông thôn mới, đô thị văn minh”; tổ chức giám sát thực hiện xây dựng nông thôn góp phần nâng cao chất lượng hiệu quả của Phong trào.",
    "sourceText": "Báo Điện tử Chính phủ – Tổ chức Phong trào thi đua “Cả nước chung sức xây dựng nông thôn mới” giai đoạn 2021 – 2025",
    "sourceUrl": "https://baochinhphu.vn/to-chuc-phong-trao-thi-dua-ca-nuoc-chung-suc-xay-dung-nong-thon-moi-giai-doan-2021-2025-102220518222916482.htm"
  },
  {
    tag: "Thực tiễn vận động",
    title: "Quyên góp cứu trợ thiên tai – nguồn lực xã hội",
    desc: `Các chương trình vận động cứu trợ của MTTQ tiếp nhận, phân bổ nguồn lực lớn để hỗ trợ người dân vùng thiên tai.
Năm 2024, Ban Vận động Cứu trợ Trung ương ghi nhận số tiếp nhận lên đến hàng nghìn tỷ đồng cho khắc phục bão lũ...Không chỉ MTTQ mà còn các tổ chức tôn giáo, doanh nghiệp, kiều bào đều chung tay hỗ trợ đồng bào miền Trung vượt qua thiên tai.`,
    sourceText: "Mặt trận Tổ quốc Việt Nam – Số tiền ủng hộ đồng bào bị thiệt hại bởi cơn bão số 3 lên tới 1.628 tỷ đồng",
    sourceUrl: "https://mattran.org.vn/hoat-dong/so-tien-ung-ho-dong-bao-bi-thiet-hai-boi-con-bao-so-3-len-toi-1628-ty-dong-57166.html"
  },
  {
    "tag": "Đoàn kết qua chuyển đổi số – cộng đồng",
    "title": "Chương trình “Sóng và máy tính cho em”",
    "desc": "Chương trình “Sóng và máy tính cho em” do Thủ tướng Chính phủ phát động ngày 12/9/2021 để hỗ trợ máy tính bảng phục vụ học trực tuyến cho học sinh thuộc gia đình hộ nghèo, cận nghèo và học sinh có bố, mẹ bị tử vong do dịch bệnh Covid-19.",
    "sourceText": "Bộ giáo dục và đào tạo – Phối hợp thực hiện hiệu quả chương trình “Sóng và máy tính cho em”",
    "sourceUrl": "https://moet.gov.vn/tintuc/Pages/tin-tong-hop.aspx?ItemID=8745"
  },
  {
    tag: "Đoàn kết quốc tế",
    title: "Việt Nam tiếp nhận vắc-xin COVID-19 qua COVAX",
    desc: `Trong giai đoạn 2021–2022, Việt Nam tiếp nhận nhiều đợt vắc-xin thông qua Cơ chế COVAX,
thể hiện tinh thần đoàn kết quốc tế và hợp tác vì sức khỏe cộng đồng.`,
    sourceText: "UNICEF Việt Nam – COVAX hỗ trợ thêm 1,18 triệu liều vắc-xin COVID-19 cho Việt Nam",
    sourceUrl: "https://www.unicef.org/vietnam/vi/th%C3%B4ng-c%C3%A1o-b%C3%A1o-ch%C3%AD/covax-h%E1%BB%97-tr%E1%BB%A3-th%C3%AAm-118-tri%E1%BB%87u-li%E1%BB%81u-v%E1%BA%AFc-xin-covid-19-cho-vi%E1%BB%87t-nam"
  },
];
