const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


//laço de repetição

for(let i=0; i<botoes.length;i++){
   botoes.onclick = function(){
    for (let j = 0 j < botoes.length; j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");

    }
        botoes[j].classList.add("ativo");
        textos[j].classList.add("ativo");
   }
}








