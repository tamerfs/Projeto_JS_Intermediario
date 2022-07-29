const botaoMode = document.getElementById("mode");
botaoMode.addEventListener("click", darkMode);


function patitos(){
    let inputs = parseInt(prompt("Insira a quatidade de patinhos qur foram passear.\nA mamãe Pata foi la buscar"));
    while(inputs != -1 || inputs != null || inputs != NaN || inputs != ""){ 
        if (inputs == 0){
            console.log(inputs);
        inputs = parseInt(gets());
        }else{
        inputs--
        console.log(inputs);
        inputs = parseInt(gets()); 
        }
    }
    return alert('Encontraram todos')
}

function atakAereo(){

    let N = parseInt(prompt("Insira a quantidade de partidas"));
    let jogadorIn1, jogadorIn2, jogador1, jogador2;
    for (let i = 0; i < N; i++) {
        jogador1 = prompt("Jogador 1 Escolha entre:\n PEDRA\n PAPEL \n ATAQUE (para ataque aereo)").toUpperCase();
        jogador2 = prompt("Jogador 2 Escolha entre:\n PEDRA\n PAPEL \n ATAQUE (para ataque aereo)").toUpperCase();
                 
    //TODO: Complete os espaços em branco com uma possível solução para o desafio
        
    if(jogador1 === "ATAQUE" && jogador2 === "ATAQUE"){
        console.log("Aniquilacao mutua");
      }else if(jogador1 === "PAPEL" && jogador2 === "PAPEL"){
          console.log("Ambos venceram");
      }else if(jogador1 === "ATAQUE"){
        console.log("Jogador 1 venceu");
      }else if(jogador2 === "ATAQUE"){
        console.log("Jogador 2 venceu");
      }else if(jogador1 === "PEDRA" && jogador2 === "PAPEL"){
        console.log("Jogador 1 venceu");
      }else if(jogador1 === "PAPEL" && jogador2 === "PEDRA"){
        console.log("Jogador 2 venceu");
      }else{
        console.log("Sem ganhador");
      }
  }
}

function parImpar(){ 
var array = prompt("Insira uma serie de numeros para Validar entre Pares e impares").split(" ");//[ 2, 3, 5, 7, 11, 13, 18, 34 ];
let AcumuloPar= [];
let AcumuloImpar = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            AcumuloPar.push(array[i]);console.log(array[i]);
        }else{
            AcumuloImpar.push(array[i]);
        }          
    }
alert(`Os pares foram : ${AcumuloPar}\nOs Impares foram: ${AcumuloImpar}`)
}

function copacabanaParty(){
    var input = []
    input = prompt("Digite primeiro o numero de entradas\n depois insira a quantidade de pessoas\n depois 0 para finalizar \n exemplo: 5(5 mesas) 4 6 8 10 12 0( 0 para finalizar)\n assim na 1° mesa entra 4, 2°=6, 3°=8, 4°=10, 5°= 12").split(" ");
    // esperado = [6,10,14,18,22]  5 entradas setadas no [0] e finaliza no [6] com o 0
    let Teste = input[0];
    let Pedidos;
    let Pessoas;
    let Acumulo = [];
    console.log('entrada foi de ',input);
    console.log('numeros de teste ',Teste);
    
    for (let i = 1; i <= Teste; i++) {
        console.log('ciclo do for ',i);
        Pessoas = input[i];
        console.log(input[i])
        console.log('Numero de pessoas do ciclo ',Pessoas);

        if (Pessoas % 2 !== 0){
            Pedidos = (Pessoas*2)-1
            console.log('resultado pedidos Impar  ',Pedidos);
        }else{
            Pedidos = (Pessoas-1)*2
            console.log('resultado pedidos par ',Pedidos)
            }
        Acumulo.push(Pedidos);
        indexFinal = i+1
        if (input[indexFinal] == 0){
            alert(`o Total de pedidos foi de  ${Acumulo}`)
        }
    }
} 


function parkMMDragao(){

var [Testes,hMin,hMax] = prompt("Entrada de dados...\nInsira primeiro a quantidade de pessoas na fila do Park\nInsira tambem a Altura Minima e a Altura Maxima\ninsira os dados em cm ex: 5 50 250 => 5 pessoas|50 cm min|250 max").split(" ");
// let Testes = systemIn[0]); // 5
// let hMin = parseInt(systemIn[1]); // 50
// let hMax= parseInt(systemIn[2]); // 250
let altura = prompt("Insira agora a altura das pessoas na fila em centimetros.\nExemplo = 163").split(" ");
let conta = 0;
let Acumulo = [];

		for (let i=0 ; i<Testes ; i++) {
  		    if(altura[i]>= hMin && altura[i]<= hMax){
    			conta++;
                Acumulo.push(altura[i]);
    		}
    }
    alert(`O numero de pessoas que podem ir na Montanha Dragão é de ${conta} os de altura = ${Acumulo}`);	

}

function darkMode(){
    document.body.classList.toggle("dark-mode") 

    let buttonText = document.getElementById("mode");

    (buttonText.textContent == 'Green Mode')? buttonText.innerHTML = 'Red Mode':
    buttonText.innerHTML = 'Green Mode';
}
