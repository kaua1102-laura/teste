document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores de tensão e corrente
    const tensao = parseFloat(document.getElementById("tensao").value);
    const corrente = parseFloat(document.getElementById("corrente").value);

    // Verificar se os valores são válidos
    if (isNaN(tensao) || isNaN(corrente)) {
        alert("Por favor, insira valores válidos para tensão e corrente.");
        return;
    }

    // Calcular a potência (P = V * I)
    const potencia = tensao * corrente;

    // Exibir o resultado
    document.getElementById("resultadoPotencia").textContent = potencia.toFixed(2);
});
