// 1. LÓGICA DA PÁGINA HOME (index.html)
const btnReserva = document.getElementById("reserva");
const btnMenu = document.getElementById("visualizarMenu");

if (btnReserva) {
    btnReserva.addEventListener("click", () => {
        localStorage.setItem("ultimaAcao", "Reserva");
        window.location.href = "reserva.html";
    });
}

if (btnMenu) {
    btnMenu.addEventListener("click", () => {
        localStorage.setItem("ultimaAcao", "Menu");
        const menu = document.getElementById("Menu");
        if(menu){
            menu.scrollIntoView({
                behavior:"smooth"
            });
        } else {
            alert("Menu em desenvolvimento.");
        }
    });
}

// 2. LÓGICA DO MENU RESPONSIVO (Ambas as páginas)
const menuToggle = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");

if (menuToggle && navegacao) {
    menuToggle.addEventListener("click", () => {
        navegacao.classList.toggle("ativo");
    });
}

// 3. LÓGICA DA PÁGINA DE RESERVAS (reserva.html)
const formReserva = document.getElementById("formReserva");
const mensagemAlerta = document.getElementById("mensagemAlerta"); 

// Só executa se o formulário e a caixa de alerta estiverem na tela
if (formReserva && mensagemAlerta) {
    formReserva.addEventListener("submit", function(event) {
        event.preventDefault();

        // Captura os valores
        const mesaEscolhida = document.getElementById("mesa").value;
        const qtdPessoas = document.getElementById("pessoas").value;

        // Salva no Local Storage
        const dadosDaReserva = {
            mesa: mesaEscolhida,
            pessoas: qtdPessoas,
            dataRegistro: new Date().toLocaleString()
        };
        localStorage.setItem("minhaReservaBravos", JSON.stringify(dadosDaReserva));

        // Exibe o alerta visual na tela
        mensagemAlerta.textContent = `Sucesso! Reserva confirmada para ${qtdPessoas} pessoas na mesa: ${mesaEscolhida}.`;
        mensagemAlerta.classList.remove("d-none"); 
        mensagemAlerta.classList.add("alert-success"); 

        // Esconde o formulário
        formReserva.style.display = "none";

        // Aguarda 3.5 segundos e redireciona
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3500);
    });
}