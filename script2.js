


// let numero = 0;

// function teste (){
//     let numero = 10;
//     console.log('Valor' + numero);
// }

// function casa(){
//     let luminaria = "Vermelha";

//     function quarto(){
//         let cama = "mola";

//         console.log(luminaria);
//     }
// }

// let numero1 = 10;
// let numero2 = 20;

// function escolherMaior(numero1, numero2){


//     if(numero1 > numero2){
//         return numero1;
//     }

//      return  numero2;  
// }



let palavras = ['casa','carro','cocada'];
let palavraBuscada = 'batata';
function verificarPalavra(palavras, palavraBuscada){
    for(let coisa of palavras){
        
        if(coisa === palavraBuscada){
            return true;
        }
        
        return false;
    }
}