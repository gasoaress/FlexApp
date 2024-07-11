/**
*    SCRIPT PARA CÁLCULO DE VANTAGEM DE COMBUSTÍVEL
*    @author Gabriel Leite Soares Ramos
*/

var etanol, gasolina, gasolinaSetentaPorcento;

document.getElementById('etanol').addEventListener("input", function (event) {
    etanol = parseFloat(event.target.value.replace(",","."))
    console.log("valor etanol", etanol);
});

document.getElementById('gasolina').addEventListener("input", function (event) {
    gasolina = parseFloat(event.target.value.replace(",","."))
    console.log("valor gasolina", gasolina);
});


function CalcularSetentaPorcentoPrecoGasolina() {
    gasolinaSetentaPorcento = gasolina * 0.7;
    console.log(gasolinaSetentaPorcento)

    CalcularVantagem();
}

function CalcularVantagem() {
    var status = document.getElementById("status");
    if (!etanol || !gasolinaSetentaPorcento) {
        alert("Entrada não aceita. Por favor, preencha ambos os campos.");
        return;
    }

    status.classList.add("transition");
    setTimeout(function () {
        if (etanol < gasolinaSetentaPorcento) {
            status.src = "assets/etanol.png";
            console.log("Etanol");
        } else {
            status.src = "assets/gasolina.png";
            console.log("Gasolina");
        }
        status.classList.remove("transition");
    }, 500);
}

function Reset() {
    var status = document.getElementById("status");
    status.classList.add("transition");

    setTimeout(function () {
        status.src = "assets/neutro.png";
        document.getElementById("etanol").value = "";
        document.getElementById("gasolina").value = "";
        status.classList.remove("transition");
    }, 500);
}