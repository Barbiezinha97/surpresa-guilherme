// ==========================================
// CONTADOR DO ANIVERSÁRIO
// ==========================================

const aniversario = new Date("2026-09-26T00:00:00");

function atualizarContador() {
    const agora = new Date();
    const diferenca = aniversario - agora;

    const dias = document.getElementById("days");
    const horas = document.getElementById("hours");
    const minutos = document.getElementById("minutes");
    const segundosElemento = document.getElementById("seconds");

    if (!dias || !horas || !minutos || !segundosElemento) {
        return;
    }

    if (diferenca <= 0) {
        dias.textContent = "🎂";
        horas.textContent = "❤️";
        minutos.textContent = "🎉";
        segundosElemento.textContent = "🥳";
        return;
    }

    const totalSegundos = Math.floor(diferenca / 1000);

    dias.textContent = Math.floor(totalSegundos / 86400);

    horas.textContent =
        Math.floor((totalSegundos % 86400) / 3600);

    minutos.textContent =
        Math.floor((totalSegundos % 3600) / 60);

    segundosElemento.textContent =
        totalSegundos % 60;
}

atualizarContador();
setInterval(atualizarContador, 1000);


// ==========================================
// MÚSICA
// ==========================================

const musica = document.getElementById("musica");
const musicButton = document.getElementById("musicButton");


// Atualiza o botão quando a música começa
function musicaComecou() {
    if (musicButton) {
        musicButton.innerHTML = "🔊";
        musicButton.setAttribute(
            "aria-label",
            "Pausar música"
        );
    }
}


// Atualiza o botão quando a música pausa
function musicaParou() {
    if (musicButton) {
        musicButton.innerHTML = "🎵";
        musicButton.setAttribute(
            "aria-label",
            "Tocar música"
        );
    }
}


// Tenta tocar a música
function tocarMusica() {

    if (!musica) {
        console.error("Áudio #musica não foi encontrado no HTML.");
        return;
    }

    musica.volume = 1.0;

    const promessa = musica.play();

    if (promessa !== undefined) {

        promessa
            .then(() => {

                musicaComecou();

                console.log("🎵 Música tocando!");

            })
            .catch((erro) => {

                musicaParou();

                console.error(
                    "Não foi possível iniciar a música:",
                    erro
                );

            });
    }
}


// Pausar ou tocar música
function toggleMusic() {

    if (!musica) {
        console.error("Áudio #musica não foi encontrado.");
        return;
    }

    if (musica.paused) {

        tocarMusica();

    } else {

        musica.pause();
        musicaParou();

    }
}


// ==========================================
// BOTÃO "ABRIR MINHA SURPRESA"
// ==========================================

function startSurprise() {

    // O clique do usuário permite tentar iniciar o áudio
    tocarMusica();

    // Desce para a próxima parte da página
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}


// ==========================================
// ROLAGEM
// ==========================================

function scrollToSection() {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

}


// ==========================================
// CARTA
// ==========================================

function openLetter() {

    const modal = document.getElementById("letterModal");

    if (modal) {
        modal.classList.add("active");
    }

}


function closeLetter() {

    const modal = document.getElementById("letterModal");

    if (modal) {
        modal.classList.remove("active");
    }

}


// Fechar carta clicando fora dela
const modal = document.getElementById("letterModal");

if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeLetter();
        }

    });

}


// Fechar carta apertando ESC
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLetter();
    }

});


// ==========================================
// CORAÇÕES FLUTUANDO
// ==========================================

function criarCoracao() {

    const container = document.querySelector(".hearts");

    if (!container) {
        return;
    }

    const heart = document.createElement("div");

    const emojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨"
    ];

    heart.classList.add("heart");

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    container.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, 10000);

}

setInterval(criarCoracao, 650);


// ==========================================
// EVENTOS DA MÚSICA
// ==========================================

if (musica) {

    musica.addEventListener(
        "play",
        musicaComecou
    );

    musica.addEventListener(
        "playing",
        musicaComecou
    );

    musica.addEventListener(
        "pause",
        musicaParou
    );

    musica.addEventListener(
        "ended",
        musicaParou
    );

    musica.addEventListener(
        "error",
        function() {

            console.error(
                "❌ Erro ao carregar musica.mp3."
            );

        }
    );

}
