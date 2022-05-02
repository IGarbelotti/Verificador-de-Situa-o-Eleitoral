var i = document.getElementById("idade")
var r = document.getElementById("resultado")

function verificar(){
    var iValor = i.value 

    if(iValor>=18 && iValor<=70){
        r.innerText = "Voce se encontra dentro da faixa etária requerida para votar."
    }
    else if(iValor>=16){
        r.innerText = "Voce se encontra em idade de voto facultativo."

    }
    else{
        r.innerText = "Voce não se encontra em idade apta para votar."
    }
}