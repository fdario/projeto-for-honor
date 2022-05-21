/*
Objetivo 1 - Ao passar o mouse:

 - colocar a classe selecionado no personagem pra colocar a animação

 -retirar a classe do personagem que já estava selecionado

Objetivo 2 - trocar a imagem e nome do personagem grande

 -alterar a imagem do jogador 1
 -alterar o nome do jogador 1
*/

/**
 * Objetivo 1 - Ao passar o mouse:

 - colocar a classe selecionado no personagem pra colocar a animação

 -retirar a classe do personagem que já estava selecionado

*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        if (idSelecionado === 'black-prior') return;
        /**
        * Objetivo 1 - Ao passar o mouse:

        - colocar a classe selecionado no personagem pra colocar a animação

        -retirar a classe do personagem que já estava selecionado

        */
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        /**
         * Objetivo 2 -  Ao passar o mouse, trocar a imagem e nome do personagem grande
        
         -alterar a imagem do jogador 1
         -alterar o nome do jogador 1
         */
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado
    });
});
