let renato01 = parseFloat(prompt('vendas 1'))
let renato02 = parseFloat(prompt('vendas 2'))
let renato03 = parseFloat(prompt('vendas 3'))

vendas = renato01 + renato02 +renato03

let percentual = 0
if(vendas <= 100){
    percentual = 0.1
}else if(vendas > 100 && vendas <= 500){
    percentual = 0.2
}else if (vendas > 500){
}

comissao = percentual * vendas
alert('O total de suas vendas foi: ' + percentual + ' e sua comissão é: ' + comissao)