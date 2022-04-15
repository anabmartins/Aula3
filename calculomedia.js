    function calcular() {
            nota1 = document.getElementById('nota1').value
            nota2 = document.getElementById('nota2').value
            nota3 = document.getElementById('nota3').value

            resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
            document.getElementById('resultado').value = resultado
            alert ('Cálculo realizado com sucesso!')
        }
