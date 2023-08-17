const searchIcon = document.querySelector("#searchIcon");
const inputConteudo = document.querySelector("#inputConteudo");

searchIcon.addEventListener("click", () => {
    if (!inputConteudo.style.display || inputConteudo.style.display === "none") {
        inputConteudo.classList.remove("inputClose");
        inputConteudo.classList.add("inputOpen");
        inputConteudo.style.display = "block"
    } else {
        inputConteudo.classList.remove("inputOpen");
        inputConteudo.classList.add("inputClose");

        setTimeout(() => {
            inputConteudo.style.display = "none"
        }, 200)
    }
})

const loginIcon = document.querySelector("#loginIcon");
const loginContainer = document.querySelector(".loginContainer");
const loginConteudo = document.querySelector(".loginConteudo");
const header = document.querySelector(".header");

loginIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    loginContainer.classList.remove('closeLogin');
    loginContainer.classList.add('openLogin');
    document.body.style.overflow = "hidden"
    header.style.zIndex = -1;
    document.querySelector(".containerBody").style.zIndex = -1;
    loginContainer.style.display = "flex";
});

document.body.addEventListener("click", function (event) {
    if (!loginConteudo.contains(event.target)) {
        loginContainer.classList.remove('openLogin');
        loginContainer.classList.add('closeLogin');

        setTimeout(() => {
            header.style.zIndex = 1;
            loginContainer.style.display = "none";
            document.body.style.overflow = "scroll"
            document.querySelector(".containerBody").style.zIndex = 1;
        }, 300);
    }
});



const videoPlayer = document.getElementById('videoPlayer');
const bolas = document.querySelectorAll('.bola');

bolas.forEach((bola, index) => {
    bola.addEventListener('click', () => {
        const bolaSelecionada = document.querySelector('.bola.select');
        if (bolaSelecionada) {
            bolaSelecionada.classList.remove('select');
        }

        bola.classList.add('select');

        const videos = [
            'images/vid-1.mp4',
            'images/vid-2.mp4',
            'images/vid-3.mp4',
            'images/vid-4.mp4',
            'images/vid-5.mp4'
        ];

        videoPlayer.src = videos[index];
        videoPlayer.load();
        videoPlayer.play();
    });
});


window.addEventListener("load", function () {
    const loader = document.querySelector('.fundoLoad')
    loader.style.display = "none";
});


const menuIcon = document.getElementById("menuIcon");
const menuContainer = document.querySelector(".menuMobile");

menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    menuContainer.classList.remove('closeMenu');
    menuContainer.classList.add('openMenu');
    menuContainer.style.display = "block";
});

document.body.addEventListener("click", function (event) {
    if (!menuContainer.contains(event.target)) {
        menuContainer.classList.remove('openMenu');
        menuContainer.classList.add('closeMenu');

        setTimeout(() => {
            menuContainer.style.display = "none";
        }, 200);
    }
});