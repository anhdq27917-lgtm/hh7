# HH7 Cloudflare Pages Demo

Đây là repo mẫu cho việc triển khai website tĩnh lên Cloudflare Pages.

## Cấu trúc

- `index.html` – trang chính
- `styles.css` – giao diện
- `script.js` – chức năng chuyển đổi theme

## Triển khai trên Cloudflare Pages

1. Đăng nhập Cloudflare Dashboard.
2. Vào Pages → Create project.
3. Chọn GitHub và kết nối repo `anhdq27917-lgtm/hh7`.
4. Thiết lập:
   - Build command: để trống
   - Output directory: `.`
5. Deploy.

## Lưu ý

Dự án này không cần Node.js hoặc framework, nên rất phù hợp cho Cloudflare Pages trong trường hợp chỉ cần render một trang tĩnh.
