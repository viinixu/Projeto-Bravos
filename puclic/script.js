const btnReserva = document.getElementById("reserva");
const btnMenu = document.getElementById("visualizarMenu");


btnReserva.addEventListener("click", () => {
    localStorage.setItem("ultimaAcao", "Reserva");
    window.location.href = "reserva.html";
});
btnMenu.addEventListener("click", () => {
    localStorage.setItem("ultimaAcao", "Menu");
    const menu = document.getElementById("Menu");
    if (menu) {
        menu.scrollIntoView({
            behavior: "smooth"
        });
    } else {
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

// LÓGICA DA PÁGINA DE RESERVAS
const formReserva = document.getElementById("formReserva");

if (formReserva) {
    formReserva.addEventListener("submit", function(event) {
        event.preventDefault();

        // Captura os valores digitados pelo usuário
        const mesaEscolhida = document.getElementById("mesa").value;
        const qtdPessoas = document.getElementById("pessoas").value;

        // Cria um objeto JavaScript com os dados
        const dadosDaReserva = {
            mesa: mesaEscolhida,
            pessoas: qtdPessoas,
            dataRegistro: new Date().toLocaleString()
        };

        // Converte o objeto em texto (JSON) e salva no Local Storage
        localStorage.setItem("minhaReservaBravos", JSON.stringify(dadosDaReserva));

        alert(`Sucesso! Reserva confirmada para ${qtdPessoas} pessoas na mesa: ${mesaEscolhida}.`);
        
        // Redireciona de volta para a Home após o sucesso
        window.location.href = "index.html";
    });
}