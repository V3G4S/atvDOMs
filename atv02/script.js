document.getElementById("calcular").addEventListener("click", () => {
    let num01 = parseFloat(document.getElementById("num1").value);
    let num02 = parseFloat(document.getElementById("num2").value);

    const seleciona = document.getElementById("seleção").value;
    let calcular = document.getElementById("calcular");
    let calcula = document.getElementById("calcula");


    let resultado;
    switch (seleciona) {
        case 'bota':
            resultado = num01 + num02;
            break;
        case 'tira':
            resultado = num01 - num02;
            break;
        case 'multiplica':
            resultado = num01 * num02;
            break;
        case 'divide ae':
            if (num02 === 0) {
                calcular.textContent = 'Não é possível dividir por zero.';
                return;
            }
            resultado = num01 / num02;
            break;
            default:
                return;
};

calcula.textContent = resultado
})