# ==========================================
# 1. CÀI ĐẶT THƯ VIỆN CẦN THIẾT
# ==========================================
!pip install -q gradio

import gradio as gr

# ==========================================
# 2. TOÀN BỘ MÃ GIAO DIỆN HTML/CSS/JS CHUẨN SHOPEE SELLER
# ==========================================
html_code = """
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Smart Review Crisis Assistant - Shopee Seller Center</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f6f6f6;
        }
        .shopee-orange { background-color: #ee4d2d; }
        .shopee-orange-text { color: #ee4d2d; }
        .shopee-border { border-color: #ee4d2d; }
        .bg-shopee-light { background-color: #fff5f3; }

        .chat-scroll::-webkit-scrollbar {
            width: 5px;
        }
        .chat-scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
            background: #d4d4d4;
            border-radius: 4px;
        }
        .chat-scroll::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
        }
    </style>
</head>
<body class="text-gray-800">

    <!-- Top Navigation Bar -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 shopee-orange rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <div>
                    <div class="flex items-center space-x-2">
                        <span class="font-bold text-lg text-gray-900">Shopee Kênh Người Bán</span>
                        <span class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">AI Smart Assistant</span>
                    </div>
                    <span class="text-xs text-gray-500">Gian hàng: Gia Dụng Tiện Ích Official</span>
                </div>
            </div>

            <div class="flex items-center space-x-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <span class="w-2 h-2 mr-1.5 bg-green-400 rounded-full animate-pulse"></span> Live Shopee API
                </span>
                <div class="flex items-center space-x-2 border-l pl-4 border-gray-200">
                    <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
                        GD
                    </div>
                    <span class="text-sm font-medium text-gray-700">Admin_CSKH</span>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Container -->
    <div class="max-w-7xl mx-auto px-4 py-6 flex gap-6">

        <!-- Sidebar Navigation -->
        <aside class="w-64 flex-shrink-0 hidden lg:block">
            <div class="bg-white rounded-xl border border-gray-200 p-4 space-y-1 shadow-sm">
                <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
                    <i class="fa-solid fa-chart-line w-5"></i>
                    <span>Tổng quan Gian hàng</span>
                </a>
                <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
                    <i class="fa-solid fa-box w-5"></i>
                    <span>Quản lý Đơn hàng</span>
                </a>
                <a href="#" class="flex items-center justify-between px-3 py-2.5 text-sm font-bold shopee-orange-text bg-shopee-light rounded-lg border-l-4 shopee-border">
                    <div class="flex items-center space-x-3">
                        <i class="fa-solid fa-triangle-exclamation w-5"></i>
                        <span>AI Review Crisis</span>
                    </div>
                    <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">1</span>
                </a>
                <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
                    <i class="fa-solid fa-comments w-5"></i>
                    <span>Shopee Chat</span>
                </a>
                <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
                    <i class="fa-solid fa-star w-5"></i>
                    <span>Đánh giá Shop</span>
                </a>
                <div class="pt-4 mt-4 border-t border-gray-100">
                    <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
                        <i class="fa-solid fa-gear w-5"></i>
                        <span>Cấu hình AI Agent</span>
                    </a>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 space-y-6">

            <!-- Banner / Alert Header -->
            <div class="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-xl p-4 text-white shadow-md flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="p-3 bg-white/20 backdrop-blur-md rounded-lg">
                        <i class="fa-solid fa-shield-cat text-2xl"></i>
                    </div>
                    <div>
                        <h2 class="text-lg font-bold">Cảnh báo Khủng hoảng Đánh giá (AI Crisis Alert)</h2>
                        <p class="text-xs text-white/90">Phát hiện 1 Đánh giá 1 Sao nguy cơ cao. AI đã phân tích nguyên nhân & chuẩn bị kịch bản xử lý.</p>
                    </div>
                </div>
                <div class="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold">
                    <i class="fa-solid fa-clock mr-1"></i> Thời gian phản hồi khuyến nghị: &lt; 2 giờ
                </div>
            </div>

            <!-- Incident Card & AI Insights Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

                <!-- Left Column: The 1-Star Review (5 cols) -->
                <div class="lg:col-span-5 bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
                    <div class="flex items-center justify-between border-b border-gray-100 pb-3">
                        <span class="text-xs font-semibold text-gray-400 tracking-wider uppercase">Đơn hàng #24102026-SP01</span>
                        <span class="text-xs bg-red-100 text-red-700 px-2.5 py-1 rounded-full font-bold">1/5 STAR REVIEW</span>
                    </div>

                    <!-- Product Info -->
                    <div class="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                        <div class="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center text-gray-500 font-bold">
                            <i class="fa-solid fa-whiskey-glass text-xl text-gray-400"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="text-sm font-semibold text-gray-800 truncate">Bình giữ nhiệt Inox Cao cấp 500ml Chống Tràn</h4>
                            <p class="text-xs text-gray-500">Phân loại: Bạc - Metallic / Khách hàng: NguyenVanA</p>
                        </div>
                    </div>

                    <!-- Review Content -->
                    <div class="bg-red-50/50 border border-red-100 rounded-lg p-3 text-sm text-gray-800">
                        <div class="flex text-amber-400 text-xs mb-1.5">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star text-gray-300"></i>
                            <i class="fa-regular fa-star text-gray-300"></i>
                            <i class="fa-regular fa-star text-gray-300"></i>
                            <i class="fa-regular fa-star text-gray-300"></i>
                        </div>
                        <p class="italic text-gray-700 font-medium">“Bình bị rò nước khi sử dụng, shop tư vấn giữ nhiệt tốt mà chất lượng quá thất vọng.”</p>
                        <span class="block text-right text-xs text-gray-400 mt-2">10 phút trước</span>
                    </div>

                    <!-- AI Analytics Engine Results -->
                    <div class="space-y-3 pt-2">
                        <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center">
                            <i class="fa-solid fa-microchip text-indigo-500 mr-2"></i> Kết quả Phân tích Cảm xúc (AI Sentiment)
                        </h4>

                        <div class="space-y-2 text-xs">
                            <div class="flex justify-between items-center bg-gray-50 p-2 rounded">
                                <span class="text-gray-600">Cảm xúc chủ đạo:</span>
                                <span class="font-bold text-red-600 flex items-center">
                                    😡 Tức giận / Thất vọng (94%)
                                </span>
                            </div>
                            <div class="flex justify-between items-center bg-gray-50 p-2 rounded">
                                <span class="text-gray-600">Mức độ rủi ro (Risk Level):</span>
                                <span class="font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">
                                    🚨 CRITICAL (Nhiêm trọng)
                                </span>
                            </div>
                        </div>

                        <div class="bg-indigo-50/50 border border-indigo-100 rounded-lg p-3 text-xs space-y-1.5">
                            <span class="font-bold text-indigo-900 block">🔍 Root Cause (Nguyên nhân cốt lõi):</span>
                            <ul class="list-disc list-inside text-indigo-800 space-y-1 pl-1">
                                <li>Lỗi kỹ thuật: Hỏng/Lệch gioăng cao su chống tràn.</li>
                                <li>Lỗi kỳ vọng (Expectation Gap): Tư vấn ban đầu tạo kỳ vọng cao nhưng sản phẩm thực tế bị lỗi QC.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Right Column: AI Action Workspace & Suggestions (7 cols) -->
                <div class="lg:col-span-7 space-y-6">

                    <!-- AI Smart Action Panel -->
                    <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

                        <!-- Tab Header -->
                        <div class="border-b border-gray-200 bg-gray-50/80 px-4 pt-3 flex space-x-4">
                            <button id="tab-public-btn" onclick="switchTab('public')" class="pb-3 px-2 text-sm font-bold border-b-2 border-orange-500 text-orange-600 flex items-center space-x-2">
                                <i class="fa-solid fa-globe"></i>
                                <span>Phản hồi Public trên Shopee</span>
                            </button>
                            <button id="tab-private-btn" onclick="switchTab('private')" class="pb-3 px-2 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 flex items-center space-x-2">
                                <i class="fa-solid fa-paper-plane"></i>
                                <span>Tin nhắn riêng (Shopee Chat)</span>
                            </button>
                        </div>

                        <!-- Tab Content Container -->
                        <div class="p-5 space-y-4">

                            <!-- Public Reply Content -->
                            <div id="tab-public" class="space-y-3">
                                <div class="flex justify-between items-center">
                                    <span class="text-xs text-gray-500">Mục tiêu: Bảo vệ uy tín Shop với các khách hàng tiềm năng khác đang xem đánh giá.</span>
                                    <button onclick="copyPublicText()" class="text-xs text-indigo-600 hover:underline flex items-center space-x-1">
                                        <i class="fa-regular fa-copy"></i>
                                        <span>Sao chép</span>
                                    </button>
                                </div>
                                <textarea id="public-text" rows="5" class="w-full text-sm border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-700 bg-gray-50/30">Chào bạn, Shop chân thành xin lỗi vì trải nghiệm không tốt của bạn với sản phẩm Bình giữ nhiệt ạ.

Sự cố rò nước là lỗi kỹ thuật không mong muốn ngoài kiểm soát trong khâu kiểm hàng. Shop đã lập tức nhắn tin riêng qua Shopee Chat để gửi tặng bạn 1 chiếc bình mới 100% hoàn toàn miễn phí (đã qua kiểm tra chống rò rỉ kỹ lưỡng) mà bạn không cần trả lại bình cũ ạ.

Shop rất mong bạn kiểm tra tin nhắn để Shop có cơ hội hỗ trợ bạn tận tình nhất nhé!</textarea>
                            </div>

                            <!-- Private Reply Content (Hidden by default) -->
                            <div id="tab-private" class="space-y-3 hidden">
                                <div class="flex justify-between items-center">
                                    <span class="text-xs text-gray-500">Mục tiêu: Xoa dịu cảm xúc, đổi mới sản phẩm & thuyết phục xin sửa lại 5 sao.</span>
                                    <button onclick="copyPrivateText()" class="text-xs text-indigo-600 hover:underline flex items-center space-x-1">
                                        <i class="fa-regular fa-copy"></i>
                                        <span>Sao chép</span>
                                    </button>
                                </div>
                                <textarea id="private-text" rows="5" class="w-full text-sm border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-700 bg-gray-50/30">Chào bạn, em là Quản lý CSKH của Shop ạ.

Em đã đọc đánh giá của mình về chiếc bình giữ nhiệt bị rò nước. Em thật sự rất làm tiếc và xin lỗi vì sự cố kỹ thuật này đã làm bạn thất vọng.

Để khắc phục ngay cho mình, Shop xin phép gửi ĐỔI MỚI 1 chiếc bình mới 100% (đã được bộ phận QC xả nước test kỹ gioăng cao su) đến tận nhà cho bạn, toàn bộ chi phí vận chuyển Shop xin chịu 100% ạ.

Bạn chỉ cần xác nhận lại Địa chỉ & SĐT nhận hàng giúp em tại đây, em sẽ cho đi đơn ngay trong chiều nay nhé ạ!</textarea>
                            </div>

                            <!-- Action Bar -->
                            <div class="pt-3 border-t border-gray-100 flex flex-wrap gap-3 items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <span class="text-xs text-gray-500">Tự động hóa đi kèm:</span>
                                    <span class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">Tạo đơn Đổi Trả (0đ)</span>
                                </div>

                                <button id="send-btn" onclick="executeSend()" class="shopee-orange hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition flex items-center space-x-2">
                                    <i class="fa-solid fa-paper-plane"></i>
                                    <span>Phê duyệt & Tự động Gửi (1-Click)</span>
                                </button>
                            </div>

                        </div>
                    </div>

                    <!-- AI Chat Assistant Direct Workspace -->
                    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-3">
                        <div class="flex items-center justify-between border-b border-gray-100 pb-2">
                            <h3 class="text-sm font-bold text-gray-800 flex items-center space-x-2">
                                <i class="fa-solid fa-robot text-orange-500"></i>
                                <span>Trò chuyện trực tiếp với AI Agent</span>
                            </h3>
                            <span class="text-xs text-gray-400">Model: GPT-4o-mini (Shopee RAG)</span>
                        </div>

                        <!-- Chat Messages History -->
                        <div id="chat-box" class="h-44 overflow-y-auto space-y-3 p-2 border border-gray-100 rounded-lg bg-gray-50/50 text-xs chat-scroll">

                            <!-- AI Message -->
                            <div class="flex items-start space-x-2">
                                <div class="w-6 h-6 rounded-full shopee-orange flex items-center justify-center text-white text-xs flex-shrink-0">
                                    AI
                                </div>
                                <div class="bg-white p-2.5 rounded-r-lg rounded-bl-lg border border-gray-200 shadow-2xs max-w-[85%] text-gray-700">
                                    Em đã chuẩn bị sẵn kịch bản đổi mới bình giữ nhiệt 100% cho khách hàng <b>NguyenVanA</b>. Bạn có muốn điều chỉnh thêm ưu đãi gì không?
                                </div>
                            </div>

                        </div>

                        <!-- Prompt Input -->
                        <div class="flex gap-2">
                            <input type="text" id="user-input" onkeypress="handleKeyPress(event)" placeholder="Ví dụ: Thêm mã giảm giá 20k cho đơn sau vào tin nhắn..." class="flex-1 text-xs border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none">
                            <button onclick="sendChatMessage()" class="bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
                                Gửi
                            </button>
                        </div>

                        <!-- Quick Prompts -->
                        <div class="flex flex-wrap gap-2 text-[11px]">
                            <span class="text-gray-400 font-medium">Gợi ý nhanh:</span>
                            <button onclick="quickPrompt('Tặng thêm Voucher 20k cho đơn sau')" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                                + Tặng Voucher 20k
                            </button>
                            <button onclick="quickPrompt('Tự động bật lịch nhắc xin sửa review sau 3 ngày')" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                                + Lịch tự động Follow-up
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    </div>

    <!-- Notification Toast -->
    <div id="toast" class="fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 transition-all duration-300 transform translate-y-20 opacity-0 z-50">
        <i class="fa-solid fa-circle-check text-green-400 text-lg"></i>
        <span id="toast-message" class="text-sm font-medium">Thao tác thành công!</span>
    </div>

    <!-- JavaScript Interactions -->
    <script>
        let currentTab = 'public';

        function switchTab(tab) {
            currentTab = tab;
            const publicTab = document.getElementById('tab-public');
            const privateTab = document.getElementById('tab-private');
            const publicBtn = document.getElementById('tab-public-btn');
            const privateBtn = document.getElementById('tab-private-btn');

            if (tab === 'public') {
                publicTab.classList.remove('hidden');
                privateTab.classList.add('hidden');
                publicBtn.className = "pb-3 px-2 text-sm font-bold border-b-2 border-orange-500 text-orange-600 flex items-center space-x-2";
                privateBtn.className = "pb-3 px-2 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 flex items-center space-x-2";
            } else {
                publicTab.classList.add('hidden');
                privateTab.classList.remove('hidden');
                privateBtn.className = "pb-3 px-2 text-sm font-bold border-b-2 border-orange-500 text-orange-600 flex items-center space-x-2";
                publicBtn.className = "pb-3 px-2 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 flex items-center space-x-2";
            }
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            toastMsg.innerText = msg;
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20',


