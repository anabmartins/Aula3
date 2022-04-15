function converter() {
    celsius = document.getElementById('celsius').value

     resultado = (parseFloat(celsius)*9/5) + 32;  
     document.getElementById('resultado').value = resultado
 }
