function calcular() {
    horas = document.getElementById('horas').value
    valor = document.getElementById('valor').value

    salario = parseFloat(horas) * parseFloat(valor)
    document.getElementById('salario').value = salario
}
