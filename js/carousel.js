const images = [
    'img/river.jpg',
    'img/sunevir.jpg',
    'img/train.jpg',
]

let currentSlide = 0;

function showCurrentSlide (){
    const imgContainer = document.querySelector('.nature .image');
    imgContainer.src = images[currentSlide]
}

function next (){
    currentSlide++;
    if(currentSlide > images.length - 1) currentSlide = 0;
    showCurrentSlide();
}

setInterval(next, 2000)
showCurrentSlide()