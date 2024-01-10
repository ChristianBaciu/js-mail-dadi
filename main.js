const nomeUserHtml = document.getElementById( "nomeUser" )
const mettiNumeroHtml = document.getElementById( "mettiNumero" )
const bottoneGeneraHtml = document.getElementById( "bottoneGenera" )
const risultatoNascostoHtml = document.getElementById( "risultatoNascosto" )
const computerNumeroHtml = document.getElementById( "computerNumero" )

const risultatoNomeUserHtml = document.getElementById( 'risultatoNomeUser' )
const numeroMioHtml = document.getElementById( 'numeroMio' )

//numero casuale
function RandomNumber( min,max ){
    return Math.floor( Math.random()*(max-min + 1) + min)
}

bottoneGeneraHtml.addEventListener( 'click', function() {

    //numero casuale
    let computerNumero = RandomNumber ( 1,6 )
    computerNumeroHtml.innerHTML = computerNumero

    // per mettere il nome e numero
    risultatoNomeUserHtml.innerHTML = nomeUserHtml.value
    numeroMioHtml.innerHTML = mettiNumeroHtml.value

})


/// EMAIL ///

//email esistenti
let emailRegistrate = [ "matteo@email.com", "giada@email.com", "elena@email.com", "emanuele@email.com", "Lorenzo@email.com" ];
let inserireEmail = prompt( "Inserisci la tua Email:" );


let emailEsistente = false;

for (let i = 0; i < emailRegistrate.length; i++){

    if(emailRegistrate[i] === inserireEmail){
        emailEsistente = true;
    }

}

//risposte nelal console
if(emailEsistente) {
    console.log("l'email inserita è già in uso");
}else{
    console.log("Impossibile trovare l'email inserita");
}
