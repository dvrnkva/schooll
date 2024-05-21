const slides = document.querySelectorAll('.slide');
const dots = [];
let currentSlide = 0;

// Создание индикаторов
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        showSlide(i);
    });
    document.querySelector('.indicators').appendChild(dot);
    dots.push(dot);
}

// Показ слайда
function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    slides[n].classList.add('active');
    dots[n].classList.add('active');
    currentSlide = n;
}

// Автоматическая смена слайдов
function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}
setInterval(nextSlide, 4500);

// Показать первый слайд
showSlide(0);