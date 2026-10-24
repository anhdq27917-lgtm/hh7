# HH7 Modern Landing Page

Đây là phiên bản cải tiến của repo cho mục đích triển khai lên Cloudflare Pages.

## Tính năng chính

- Hero section hiện đại và conversion-focused
- Các phần tính năng, demo, workflow, pricing và FAQ
- Responsive design cho mobile/tablet/desktop
- Theme switcher sáng/tối
- Accordion FAQ và menu mobile
- Tối ưu cho landing page marketing và giới thiệu thương hiệu

## Cấu trúc

- `index.html` – toàn bộ layout landing page
- `styles.css` – giao diện hiện đại, responsive và dark mode
- `script.js` – xử lý theme toggle, nav mobile và FAQ accordion

## Deploy trên Cloudflare Pages

1. Đăng nhập Cloudflare Dashboard
2. Vào Workers & Pages → Create application → Pages
3. Chọn Connect to Git
4. Chọn repo `anhdq27917-lgtm/hh7`
5. Chọn branch `main`
6. Thiết lập:
   - Build command: để trống
   - Output directory: `.`
7. Click Save and Deploy

## Lưu ý

Dự án này là static site nên không cần package manager or framework, rất phù hợp với Cloudflare Pages.
