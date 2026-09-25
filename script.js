```javascript
// ==========================================
// CONTAGEM PARA O ANIVERSÁRIO
// ==========================================

const aniversario = new Date("2026-09-26T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = aniversario - agora;

    if (diferenca <= 0) {

        document.getElementById("days").textContent = "🎂";
        document.getElementById("hours").textContent = "❤️";
        document.getElementById("minutes").textContent = "🎉";
        document.getElementById("seconds").textContent = "🥳";

        return;
    }

    const segundos =
        Math.floor(diferenca / 1000);

    const dias =
        Math.floor(segundos / 86400);

    const horas =
        Math.floor((segundos % 86400) / 3600);

    const minutos =
        Math.floor((segundos % 3600) / 60);

    const segundosRestantes =
        segundos % 60;


    document.getElementById("days").textContent = dias;

    document.getElementById("hours").textContent = horas;

    document.getElementById("minutes").textContent = minutos;

    document.getElementById("seconds").textContent =
        segundosRestantes;
}

setInterval(atualizarContador, 1000);

atualizarContador();


// ==========================================
// BOTÃO DA PRIMEIRA TELA
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

    document
        .getElementById("letterModal")
        .classList.add("active");

}


function closeLetter() {

    document
        .getElementById("letterModal")
        .classList.remove("active");

}


document
    .getElementById("letterModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeLetter();

        }

    });


// ==========================================
// MÚSICA
// ==========================================

const musica =
    document.getElementById("musica");

let tocando = false;

function toggleMusic() {

    if (tocando) {

        musica.pause();

        tocando = false;

    } else {

        musica.play();

        tocando = true;

    }

}


// ==========================================
// CORAÇÕES FLUTUANDO
// ==========================================

function criarCoracao() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");


    const emojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨"
    ];


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


    document
        .querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(criarCoracao, 650);
```
