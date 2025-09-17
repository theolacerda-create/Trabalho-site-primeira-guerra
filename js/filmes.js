const carousels = document.querySelectorAll('.carousel');
let autoScroll = true;

carousels.forEach(carousel => {
  setInterval(() => {
    if (autoScroll) carousel.scrollLeft += 1;
  }, 30);

  carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    autoScroll = false;
    card.classList.toggle('flipped');
  });
}); 