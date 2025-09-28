type QuizItem = {
  q: string;
  choices: string[];
  answerIdx: number;
  explain: string;
};

export const QUIZ: QuizItem[] = [
  {
    q: "Đại đoàn kết toàn dân tộc là …",
    choices: ["Sách lược ngắn hạn", "Chiến lược lâu dài và điều kiện thắng lợi", "Chỉ là khẩu hiệu"],
    answerIdx: 1,
    explain: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết là chiến lược lâu dài, then chốt quyết định thành bại của cách mạng.",
  },
  {
    q: "Nguyên tắc chủ đạo của Mặt trận dân tộc thống nhất là …",
    choices: ["Bỏ qua khác biệt", "Hiệp thương dân chủ, tự nguyện, tôn trọng", "Đồng nhất hoá tư tưởng"],
    answerIdx: 1,
    explain: "Mặt trận gồm nhiều giai tầng, tôn giáo, đảng phái nên phải hiệp thương dân chủ mới quy tụ được lực lượng.",
  },
  {
    q: "Nền tảng của khối đại đoàn kết toàn dân tộc theo Hồ Chí Minh là …",
    choices: ["Giáo dục", "Liên minh công nhân - nông dân - trí thức", "Chỉ trí thức"],
    answerIdx: 1,
    explain: "Đại đa số nhân dân là công – nông – lao động; cùng đội ngũ trí thức là nền gốc của đại đoàn kết.",
  },
  {
    q: "Hạt nhân then chốt để củng cố đại đoàn kết là …",
    choices: ["Sự đoàn kết trong Đảng", "Sức mạnh quân đội", "Kinh tế phát triển"],
    answerIdx: 0,
    explain: "Đảng đoàn kết thì dân tộc đoàn kết; đó là điều kiện cho sự đoàn kết ngoài xã hội.",
  },
  {
    q: "Chủ thể của khối đại đoàn kết toàn dân tộc là …",
    choices: ["Một vài giai cấp chủ chốt", "Toàn thể nhân dân Việt Nam yêu nước", "Chỉ người trong nước"],
    answerIdx: 1,
    explain: "Bao gồm mọi giai cấp, tầng lớp, tôn giáo, dân tộc, trong và ngoài nước, miễn cùng mục tiêu vì nước vì dân.",
  },
  {
    q: "Một điều kiện quan trọng để tập hợp lực lượng là …",
    choices: ["Đặt lợi ích chung làm điểm quy tụ", "Ưu tiên lợi ích nhóm", "Chỉ nêu khẩu hiệu chung chung"],
    answerIdx: 0,
    explain: "Phải xử lý hài hoà lợi ích, tìm mẫu số chung vì nước vì dân để đoàn kết rộng rãi.",
  },
  {
    q: "Truyền thống cần kế thừa để xây dựng đoàn kết là …",
    choices: ["Cạnh tranh quyết liệt", "Yêu nước, nhân nghĩa, đoàn kết", "Tư lợi cá nhân"],
    answerIdx: 1,
    explain: "Đó là cội nguồn sức mạnh vô địch của dân tộc Việt Nam qua lịch sử dựng nước giữ nước.",
  },
  {
    q: "Để quy tụ rộng rãi, cần có thái độ …",
    choices: ["Khoan dung, độ lượng", "Đòi hỏi tuyệt đối hoàn hảo", "Loại trừ người khác biệt"],
    answerIdx: 0,
    explain: "Trân trọng phần thiện dù nhỏ nhất, 'cầu đồng tồn dị' để mở rộng khối đại đoàn kết.",
  },
  {
    q: "Niềm tin đặt vào đâu là nguyên tắc tối cao trong cuộc sống của Hồ Chí Minh?",
    choices: ["Niềm tin vào cá nhân lãnh tụ", "Niềm tin vào nhân dân", "Niềm tin vào kinh tế thị trường"],
    answerIdx: 1,
    explain: "Yêu dân, tin dân, dựa vào dân là nguồn sức mạnh vô địch của khối đại đoàn kết.",
  },
  {
    q: "Mặt trận dân tộc thống nhất là …",
    choices: ["Tổ chức nhỏ lẻ", "Nơi quy tụ mọi tổ chức/cá nhân yêu nước (trong & ngoài nước)", "Chỉ hoạt động tại địa phương"],
    answerIdx: 1,
    explain: "Khi được tổ chức thành khối vững chắc, đại đoàn kết mới trở thành sức mạnh to lớn.",
  },
  {
    q: "Nguyên tắc xây dựng Mặt trận: đặt dưới sự lãnh đạo của … và trên nền tảng …",
    choices: ["Quốc hội; giai cấp tư sản", "Đảng; liên minh công – nông – trí thức", "Chính phủ; doanh nghiệp"],
    answerIdx: 1,
    explain: "Đảng vừa là thành viên vừa lãnh đạo; nền tảng là liên minh công – nông – trí thức.",
  },
  {
    q: "Đoàn kết 'thật sự' theo Hồ Chí Minh bao gồm …",
    choices: ["Tránh mọi phê bình", "Vừa đoàn kết vừa đấu tranh, phê bình thân ái vì nước vì dân", "Đồng hoá mọi khác biệt"],
    answerIdx: 1,
    explain: "Phải học cái tốt của nhau, phê bình cái sai trên lập trường thân ái để cùng tiến bộ.",
  },
  {
    q: "Một phương thức chủ yếu để xây dựng khối đại đoàn kết là …",
    choices: ["Làm tốt công tác dân vận", "Tăng áp lực hành chính", "Đóng cửa thông tin"],
    answerIdx: 0,
    explain: "Giáo dục, tuyên truyền, hướng dẫn, vận động quần chúng để phát huy vai trò, trí tuệ, khả năng của dân.",
  },
  {
    q: "Các đoàn thể quần chúng (Công đoàn, Nông dân, Đoàn TN, Phụ nữ…) có nhiệm vụ chính là …",
    choices: ["Kinh doanh", "Tập hợp, giáo dục, rèn luyện, vận động quần chúng", "Chỉ hoạt động nghi lễ"],
    answerIdx: 1,
    explain: "Tổ chức phù hợp từng đối tượng để giác ngộ, bảo vệ quyền lợi và góp phần thực hiện nhiệm vụ cách mạng.",
  },
  {
    q: "Các đoàn thể, tổ chức quần chúng được hợp nhất trong …",
    choices: ["Một hiệp hội nghề nghiệp", "Mặt trận dân tộc thống nhất", "Câu lạc bộ thiện nguyện"],
    answerIdx: 1,
    explain: "Mặt trận càng rộng và chặt chẽ thì khối đại đoàn kết càng bền vững.",
  },
  {
    q: "Đại đoàn kết toàn dân tộc được xác định là nhiệm vụ hàng đầu của …",
    choices: ["Đảng (phải xác định và quán triệt)", "Chỉ Chính phủ", "Chỉ đoàn thể xã hội"],
    answerIdx: 0,
    explain: "Đảng lãnh đạo phải quán triệt đại đoàn kết trong đường lối, chính sách và hoạt động thực tiễn.",
  },
  {
    q: "Theo tư tưởng Hồ Chí Minh, mục đích chung của Mặt trận là …",
    choices: ["Tăng số lượng hội viên", "Tập hợp mức cao nhất lực lượng dân tộc vì độc lập, tự do, hạnh phúc",
              "Tập trung đấu tranh nội bộ"],
    answerIdx: 1,
    explain: "Tập hợp tối đa lực lượng vào khối đại đoàn kết vì mục tiêu chung của dân tộc.",
  },
  {
  q: "Hồ Chí Minh khẳng định: 'Đoàn kết, đoàn kết, đại đoàn kết; Thành công, thành công, đại thành công'. Câu nói này nhấn mạnh …",
  choices: ["Vai trò quyết định của đoàn kết", "Chỉ mang tính khẩu hiệu tuyên truyền", "Chỉ phù hợp thời chiến"],
  answerIdx: 0,
  explain: "Đây là kết luận khái quát của Người, coi đoàn kết là nhân tố then chốt dẫn tới thành công."
},
{
  q: "Theo Hồ Chí Minh, cách mạng là sự nghiệp của …",
  choices: ["Một nhóm lãnh đạo", "Quần chúng nhân dân", "Chỉ Đảng Cộng sản"],
  answerIdx: 1,
  explain: "Cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng."
},
{
  q: "Nguyên tắc bất di bất dịch khi thực hiện đoàn kết là …",
  choices: ["Lấy lợi ích tối cao của dân tộc và nhân dân làm mục tiêu", "Lấy lợi ích nhóm làm trước tiên", "Đặt lợi ích cá nhân lên hàng đầu"],
  answerIdx: 0,
  explain: "Đoàn kết phải xuất phát từ mục tiêu vì nước, vì dân; nếu độc lập mà dân không hạnh phúc thì độc lập không có ý nghĩa."
},
{
  q: "Khi xây dựng khối đoàn kết, Hồ Chí Minh ví von …",
  choices: ["Như một dòng sông lớn", "Như cái nền của nhà, gốc của cây", "Như một trận bóng đoàn kết"],
  answerIdx: 1,
  explain: "Người nói: 'Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân… Nó cũng như cái nền của nhà, gốc của cây'."
},
{
  q: "Quan điểm 'cầu đồng tồn dị' trong đoàn kết nghĩa là …",
  choices: ["Chỉ giữ lại cái chung, xoá bỏ cái riêng", "Lấy điểm chung để hạn chế khác biệt", "Không chấp nhận khác biệt"],
  answerIdx: 1,
  explain: "Đoàn kết phải vừa giữ cái chung, vừa tôn trọng cái riêng, lấy cái chung để hạn chế cái riêng."
},
{
  q: "Trong Mặt trận, liên minh công – nông giữ vai trò nền tảng vì …",
  choices: ["Đông nhất và bị áp bức nặng nề nhất", "Có tri thức cao", "Có điều kiện kinh tế mạnh"],
  answerIdx: 0,
  explain: "Công – nông đông nhất, bị bóc lột nặng nề và chí khí cách mạng bền bỉ hơn mọi tầng lớp khác."
},
{
  q: "Mặt trận dân tộc thống nhất qua từng giai đoạn có nhiều tên gọi. Ví dụ năm 1941 là …",
  choices: ["Mặt trận Việt Minh", "Mặt trận Liên Việt", "Mặt trận Tổ quốc Việt Nam"],
  answerIdx: 0,
  explain: "Năm 1941 thành lập Mặt trận Việt Minh – mặt trận dân tộc thống nhất giai đoạn tiền khởi nghĩa."
},
{
  q: "Trong quan hệ với đồng bào lạc lối, Hồ Chí Minh căn dặn …",
  choices: ["Trừng trị nghiêm khắc", "Lấy tình thân ái mà cảm hoá", "Loại bỏ khỏi khối đoàn kết"],
  answerIdx: 1,
  explain: "Người dặn: 'Đối với đồng bào lạc lối, phải lấy tình thân ái mà cảm hoá'."
},
{
  q: "Trong công tác dân vận, Hồ Chí Minh nhấn mạnh cán bộ phải …",
  choices: ["Áp đặt mệnh lệnh", "Tìm đủ cách giải thích cho dân hiểu lợi ích của họ", "Giữ bí mật, không giải thích"],
  answerIdx: 1,
  explain: "Người căn dặn: 'Cần phải chịu khó tìm đủ cách giải thích cho họ hiểu rằng những việc đó là vì ích lợi của họ'."
},
{
  q: "Vai trò của các đoàn thể nhân dân trong Mặt trận là …",
  choices: ["Tổ chức của dân, phấn đấu cho dân, bênh vực quyền của dân", "Đại diện cho lợi ích riêng", "Chỉ làm nhiệm vụ hình thức"],
  answerIdx: 0,
  explain: "Hồ Chí Minh khẳng định: 'Những đoàn thể ấy là tổ chức của dân, phấn đấu cho dân, bênh vực quyền của dân'."
}
];
