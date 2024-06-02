function atualizarPotencia() {
    var select = document.getElementById("eletrodomestico");
    var potenciaInput = document.getElementById("potencia");
    var selectedOption = select.options[select.selectedIndex];
    potenciaInput.value = selectedOption.value;
}

function calcularConsumo() {
    var potencia = document.getElementById("potencia").value;
    var horas = document.getElementById("horas").value;
    var dias = document.getElementById("dias").value;

    var consumo = (potencia * horas * dias) / 1000;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "O consumo mensal é de " + consumo.toFixed(2) + " kWh.";

    var paragrafo = document.createElement("p");
    paragrafo.textContent = "Viu como vale a pena? Faça seu orçamento!";
    resultadoDiv.appendChild(paragrafo);

    var botao = document.createElement("button");
    botao.textContent = "Faça o Orçamento";
    resultadoDiv.appendChild(botao);
}
