const uscita = document.getElementById("uscita_ctf");

var punti_tot;
function cambio_colore(elemento){
    elemento.style.backgroundColor = "green";
}
document.addEventListener("DOMContentLoaded", function(){
    punti_tot = 0; 
    document.getElementById("punti_tot").innerText= punti_tot;
    document.getElementById("prova").style.display="none";
    
    if(localStorage.getItem("punti_ctf1") === null){
        localStorage.setItem("punti_ctf1", "0")
    }
    if(localStorage.getItem("ctf1")=="correct"){
        punti_tot=punti_tot+parseInt(localStorage.getItem("punti_ctf1"));
        document.getElementById("punti_tot").innerText= punti_tot;
        cambio_colore(document.getElementById("button_ctf1"));
    }
});

function prova() {
}

function controllo_ctf1() {
    if(localStorage.getItem("ctf1") === null)
    {   var rispostaUtente = document.getElementById("messaggio").value;
        if(rispostaUtente=="flag{caesar3_1s_your_f4th3r}"){
            document.getElementById("risultato").innerText="CORRETTO";
            localStorage.setItem("ctf1", "correct");
            localStorage.setItem("punti_ctf1", "150");
            punti_tot=punti_tot+parseInt(localStorage.getItem("punti_ctf1"));
            document.getElementById("punti_tot").innerText= punti_tot;
            cambio_colore(document.getElementById("button_ctf1"));
        }else document.getElementById("risultato").innerText="SBAGLIATO";
    }
}

uscita.addEventListener("click", function(){
    document.getElementById("prova").style.display = "none";
});