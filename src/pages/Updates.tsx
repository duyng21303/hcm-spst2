export default function Updates(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Thực tiễn & cập nhật</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <article className="glass p-4">
          <div className="text-sm text-brand-200">Ví dụ 1</div>
          <div className="font-semibold">Phát huy đại đoàn kết trong giai đoạn mới</div>
          <p className="text-sm text-white/80 mt-2">Nhập nội dung minh hoạ từ báo cáo/hoạt động địa phương (tự tổng hợp, có nguồn).</p>
        </article>
        <article className="glass p-4">
          <div className="text-sm text-brand-200">Ví dụ 2</div>
          <div className="font-semibold">Thực hành hiệp thương trong cộng đồng</div>
          <p className="text-sm text-white/80 mt-2">Nêu tình huống, cách xử lý, kết quả.</p>
        </article>
      </div>
    </div>
  )
}
