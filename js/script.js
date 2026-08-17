// Passos:
// 1. MENU QUE SOME AO ROLAR

//    - achar o menu no HTML
const menu = document.getElementById("menu");

//    - achar todos os elementos com a classe "aparecer"
const blocos = document.querySelectorAll(".aparecer");

// - achar o video da capa
const video = document.querySelector(".capa-video");

//    - escutar o evento de rolagem da janela
window.addEventListener("scroll",function () {
    // - se a página desceu mais de 50px, adicionar a classe "menu-rolado"
    if(window.scrollY > 50) {
        menu.classList.add("menu-rolado");
    } else{
        // - se voltou pro topo, remove a classe
        menu.classList.remove("menu-rolado");
    }

})

// 2. BLOCOS QUE APARECEM

//    - avisar quando cada um entrar na tela
const observador = new IntersectionObserver(function(entradas) {

    console.log("alguma coisa cruzou a tela");

    entradas.forEach(function(entrada) {
        if(entrada.isIntersecting) {
            //    - ao entrar, adicionar a classe "visivel"
            entrada.target.classList.add("visivel");
        }
    })
});

blocos.forEach(function(bloco) {
    observador.observe(bloco);
})

// 3. VÍDEO QUE ANDA COM O SCROLL
//    - prender a capa na tela enquanto a pessoa rola
//    - sumir com o conteúdo da capa e revelar o vídeo
//    - avançar o tempo do vídeo conforme o scroll
