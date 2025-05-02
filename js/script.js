document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM đã tải xong, script.js bắt đầu chạy!");

    // Lấy tham chiếu đến các phần tử HTML qua ID
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Kiểm tra xem có lấy được phần tử không
    if (!loginForm || !passwordInput || !errorMessage) {
        console.error('Lỗi: Không tìm thấy một hoặc nhiều phần tử form!');
        return;
    }

    // --- !!! QUAN TRỌNG: THAY MẬT KHẨU CỦA BẠN VÀO ĐÂY !!! ---
    const correctPassword = "anhsinhvienylaplanhtutrentroiroixuongvayeuem"; // Ví dụ: Thay bằng mật khẩu bí mật của bạn
    // --- !!! Nhớ giữ mật khẩu này bí mật nhé !!! ---

    // Thêm trình lắng nghe sự kiện 'submit' cho form
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        console.log('Form đã được submit!');

        const enteredPassword = passwordInput.value;
        console.log('Mật khẩu đã nhập:', enteredPassword);

        // Gọi hàm kiểm tra mật khẩu
        checkPassword(enteredPassword, correctPassword);
    });

    // --- Hàm kiểm tra mật khẩu ---
    function checkPassword(entered, correct) {
        if (entered === correct) {
            // Mật khẩu ĐÚNG
            console.log('Mật khẩu chính xác! Chuyển trang...');
            errorMessage.style.display = 'none';
            errorMessage.classList.remove('apply-shake');

            // Chuyển hướng sang trang main.html
            window.location.href = 'main.html';

        } else {
            // Mật khẩu SAI
            console.log('Mật khẩu sai!');
            errorMessage.style.display = 'block'; // Hiển thị thông báo lỗi

            // Kích hoạt animation rung lắc
            errorMessage.classList.remove('apply-gentle-wiggle'); // Đổi tên class
            void errorMessage.offsetWidth; // Giữ nguyên để trigger reflow
            errorMessage.classList.add('apply-gentle-wiggle');    // Đổi tên class

            passwordInput.value = ''; // Xóa ô nhập
            passwordInput.focus(); // Focus lại ô nhập
        }
    }

    // --- Tự động ẩn thông báo lỗi khi người dùng nhập lại vào ô mật khẩu ---
    passwordInput.addEventListener('input', () => {
        if (errorMessage.style.display === 'block') {
            errorMessage.style.display = 'none';
             errorMessage.classList.remove('apply-shake');
        }
    });

}); // Kết thúc của addEventListener DOMContentLoaded