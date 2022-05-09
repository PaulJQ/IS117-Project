//my attempt at a multi-item carousel... sorry if it didnt work out
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const track = document.querySelector(".track");
const carouselWidth = document.querySelector(".carousel-container").offsetWidth;

next.addEventListener("click", () => {
    track.style.transform = 'translateX(-${ carouselWidth }px)';
})
prev.addEventListener("click", () => {
    track.style.transform = 'translateX(-${ 0}px)';
})