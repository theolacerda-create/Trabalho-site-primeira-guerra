const carousels = document.querySelectorAll('.carousel');
let autoScroll = true;
const speed = 0.5; 
const interval = 25; 

carousels.forEach(carousel => {
  
  const cards = Array.from(carousel.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });

  
  setInterval(() => {
    if (autoScroll) {
      carousel.scrollLeft += speed;

      
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    }
  }, interval);


  carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  });
});


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    autoScroll = !card.classList.contains('flipped');
  });
});

