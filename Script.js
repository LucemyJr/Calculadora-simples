function calcular(n1, n2){
    n1=Number(document.getElementById('n1').value)
    n2=Number(document.getElementById('n2').value)

    selector = document.getElementById('seletor').value

    switch(selector){
         case '+':
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML = 'O resultado é ' + calculo
            break
        case '-':
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML = 'O resultado é ' + calculo
            break
        case '*':
            calculo = (n1 * n2)
            document.getElementById('resultado').innerHTML = 'O resultado é ' + calculo
            break
        case '/':
            calculo = Math.round((n1 / n2))
            if(calculo == Infinity){
                document.getElementById('resultado').innerHTML = 'Insira um divisível valido.'
            } else {
            document.getElementById('resultado').innerHTML = 'O resultado é ' + calculo
            break
        }
    } 
}