let rei = "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.";
let rainha = "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
let torre = "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.";
let bispo = "O bispo move-se ao longo da diagonal. Não pode pular outras peças.";
let cavalo = "É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.";
let peao = "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.";

let input = prompt("Digite o nome da peça:");
let pecaLower = input.toLowerCase();
console.log(pecaLower);


if (pecaLower === "rei"){
    console.log(rei);
}
else if(pecaLower === "rainha"){
    console.log(rainha);
}
else if(pecaLower === "torre"){
    console.log(torre);
}
else if(pecaLower === "bispo"){
    console.log(bispo);
}
else if(pecaLower === "cavalo"){
    console.log(cavalo);
}
else if(pecaLower === "peao"){
    console.log(peao);
}
else {
    console.log("invalido");
}
