
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
console.log(`O percentual é ${percentual * 100}% e a comissao é {comissao}`)

----------------------------------------------------------------------------------------
/*METEDO USANDO FOREACH E ARRAY*/

var vendas = [10, 15, 30]
var totalVendas = 0
var comissao = 0

vendas.forEach(function(value, index){
  totalVendas = totalVendas + value
})

  if(totalVendas <= 100){
    comissao = totalVendas * 0.1
  }else if (totalVendas > 100 && totalVendas <= 500){
    comissao = totalVendas * 0.2
  }else if(totalVendas > 500){
    comissao = totalVendas * 0.3
  }

alert('Total de suas vendas foi: ' + totalVendas)
alert('Sua comissão foi ' + comissao)
