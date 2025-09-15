document.querySelectorAll(".card").forEach(card => {
card.addEventListener("click", () => {
card.classList.toggle("ativo");
});
});



document.getElementById("filtro").addEventListener("input", function(){
const termo = this.value.toLowerCase();
document.querySelectorAll(".card").forEach(card => {
const nome = card.querySelector("h3").textContent.toLowerCase();
if(nome.includes(termo)){
card.style.display = "block";
} else {
card.style.display = "none";
}
});
});