const btnReserva = document.getElementById("reserva");
const btnMenu = document.getElementById("visualizarMenu");

btnReserva.addEventListener("click", () => {
    localStorage.setItem("ultimaAcao","Reserva");
    alert("Sua reserva foi iniciada!");
});
btnMenu.addEventListener("click", () => {
    localStorage.setItem("ultimaAcao","Menu");
    const menu = document.getElementById("Menu");
    if(menu){
        menu.scrollIntoView({
            behavior:"smooth"
        });
    }else{
        alert("Menu em desenvolvimento.");
    }
});

// Lógica do Menu Responsivo
const menuToggle = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");

if (menuToggle && navegacao) {
    menuToggle.addEventListener("click", () => {
        navegacao.classList.toggle("ativo");
    });
}