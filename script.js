let titulo = document.querySelector("h1");
let subtitulo = document.querySelector("h2");
let resposta = document.querySelector("input");
let start = document.getElementById("start");
let tentar = document.getElementById("tentar");
let imagem = document.querySelector("img");
let placar = document.querySelector("h4");
let pontuação = document.querySelector("h3");
let contador = 0;


gerarPersonagem = () => {
    let aleatório = Math.ceil(Math.random()*493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatório}`)
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            console.log (data.name)
            imagem.src = data.image;    
            let nomePersonagem = data.name.toUpperCase().toString();

            if (contador < 0){
                pontuação.innerHTML = `Você Perdeu!!`
                setTimeout(() => {
                    contador=0;
                    pontuação.innerHTML="";
                    resposta.value = "";
                    placar.innerHTML = "";

                }, 2500);
            }else
                tentar.onclick= function(){
                    let input = resposta.value.toUpperCase().toString();
                    if(input == nomePersonagem){
                        placar.innerHTML = `certo`;
                        contador ++;
                        pontuação.innerHTML = `pontuação: ${contador}`;
                        resposta.value = ""

                    }
                    else {
                        placar.innerHTML = `ERROU`;
                        contador --;
                        pontuação.innerHTML = `pontuação: ${contador}`;
                        resposta.value = ""
                    }
                    gerarPersonagem();
                }
            
        })
}






start.onclick = gerarPersonagem;
