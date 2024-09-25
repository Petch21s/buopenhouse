document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.image-slide');
   
    let currentIndex = 0;
    let slideInterval;
    const slideDuration = 3000; // 3 วินาที

    

    // ฟังก์ชันอัปเดตการแสดงภาพ
    function updateSlidePosition() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentIndex ? '1' : '0';
            slide.style.transition = 'opacity 0.5s ease-in-out';
        });
        updateDots();
    }

    // ฟังก์ชันเปลี่ยนไปยัง Slide ที่กำหนด
    function goToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
    }

    // ฟังก์ชันถัดไป Slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    // ฟังก์ชันก่อนหน้า Slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    // ฟังก์ชันเริ่มการแสดงภาพอัตโนมัติ
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // ฟังก์ชันหยุดการแสดงภาพอัตโนมัติ
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Event Listeners สำหรับปุ่ม Next และ Previous
    document.getElementById('next').addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    document.getElementById('prev').addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

   
    // เริ่มการแสดงภาพอัตโนมัติ
    startSlideShow();
});
