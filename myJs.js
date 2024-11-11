let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active'); // Hiển thị slide tương ứng
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Chuyển đến slide kế tiếp
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Quay lại slide trước
    showSlide(currentSlide);
}

// Khởi tạo slide đầu tiên
showSlide(currentSlide);
setInterval(() => {
    nextSlide();
}, 5000); // Thay đổi slide sau mỗi 5 giây