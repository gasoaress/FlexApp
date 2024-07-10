/**
*    SCRIPT PARA CÁLCULO DE VANTAGEM DE COMBUSTÍVEL
*    @author Gabriel Leite Soares Ramos
*/

var etanol, gasolina, gasolinaSetentaPorcento;


document.getElementById('etanol').addEventListener("input", function (event) {
    etanol = parseFloat(event.target.value)
    console.log("valor etanol", etanol);
});

document.getElementById('gasolina').addEventListener("input", function (event) {
    gasolina = parseFloat(event.target.value)
    console.log("valor gasolina", gasolina);
});
//document.getElementById('gasolina');


function CalcularSetentaPorcentoPrecoGasolina() {
    gasolinaSetentaPorcento = gasolina * 0.7;
    console.log(gasolinaSetentaPorcento)

    CalcularVantagem();
}

function CalcularVantagem() {
    if (etanol < gasolinaSetentaPorcento) {
        console.log("Etanol");
    } else {
        console.log("Gasolina");
    }
}