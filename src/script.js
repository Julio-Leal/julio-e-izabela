const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hiddeSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function prevSlider() {
    hiddeSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

function nextSlider() {
    hiddeSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

btnPrev.addEventListener('click', () => prevSlider());
btnNext.addEventListener('click', () => nextSlider());

console.log(slider)