
const cards = document.querySelectorAll('.card');


const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');


cards.forEach(card => {
  card.addEventListener('click', () => {
   
    card.classList.toggle('ativo');

   
    const title = card.querySelector('h3').innerText;
    const description = card.getAttribute('data-info');

    
    modalTitle.textContent = title;
    modalDesc.textContent = description;


    modal.style.display = 'block';
  });
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


document.getElementById("filtro")?.addEventListener("input", function() {
  const termo = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const nome = card.querySelector("h3").textContent.toLowerCase();
    if (nome.includes(termo)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
