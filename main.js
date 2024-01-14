const computerHtml = document.getElementById( "computer" )
const numeroMioHtml = document.getElementById("numeroMio")

// risultato none
const risultatoFinaleHtml = document.getElementById("risultatoFinale" )
risultatoFinaleHtml.style.display = "none"

// bottone
const bottoneGeneraHtml = document.getElementById("bottoneGenera")
bottoneGeneraHtml.addEventListener('click', function() {

    // risultato block
    risultatoFinaleHtml.style.display = "block"


    const player = prompt ("Salve Player! Inserisci un numero:");

    function RandomNumber( min,max ){
        return Math.floor( Math.random()*(max-min + 1) + min)
    }
    let computer = RandomNumber ( 1,6 )

    // scrive nel HTML
    const risultatoHtml = document.getElementById("risultato")
    
    // vince il player
    if(player < computer){
        risultatoHtml.innerHTML = `<p><strong>Computer</strong> <span>${player}</span> <strong>Hai perso</strong> <span>${computer}</span> <strong>Player</strong></p>`
    
    // vince il computer
    }else if(player > computer){
        risultatoHtml.innerHTML = `<p><strong>Player</strong> <span>${player}</span> Hai vinto <span>${computer}</span> <strong>Computer</strong></p>`
    
    // non vince nessuno
    }else{
        risultatoHtml.innerHTML = '<p>Parità</p>'
    }

    console.log(player, computer)

})


/// EMAIL ///

//email esistenti
let emailRegistrate = ["matteo@email.com", "giada@email.com", "elena@email.com", "emanuele@email.com", "Lorenzo@email.com"];
let inserireEmail = prompt("Inserisci la tua Email:");
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