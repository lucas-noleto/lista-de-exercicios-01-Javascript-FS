function soma(numA, numB) {
    return numA + numB
}
function menos(numA, numB) {
    return numA - numB
}
function multi(numA, numB) {
    return numA*numB
}
function div(numA, numB) {
    return numA/numB
}

function helloWorld(){
    console.log("Hello World on click!")
}

// document.getElementById("quest-1").addEventListener("On click",helloWorld())


document.getElementById("btn-soma").addEventListener("click",function(){
    const inputNumA = document.getElementById("numA").value
    const inputNumB = document.getElementById("numB").value
    const resultado = soma(parseFloat(inputNumA),parseFloat(inputNumB))
    document.getElementById("resultado").innerText="O resultado da soma eh:" + resultado


})

document.getElementById("btn-q3").addEventListener("click",function(){
    const inputNumA = document.getElementById("q3-numA").value
    const inputNumB = document.getElementById("q3-numB").value
    const resultado_soma = soma(parseFloat(inputNumA),parseFloat(inputNumB))
    const resultado_menos = menos(parseFloat(inputNumA),parseFloat(inputNumB))
    const resultado_multi = multi(parseFloat(inputNumA),parseFloat(inputNumB))
    const resultado_div = div(parseFloat(inputNumA),parseFloat(inputNumB))
    document.getElementById("resultado_soma").innerText="O resultado da soma eh:" + resultado_soma
    document.getElementById("resultado_menos").innerText="O resultado da subtração eh:" + resultado_menos
    document.getElementById("resultado_multi").innerText="O resultado da multiplicação eh:" + resultado_multi
    document.getElementById("resultado_div").innerText="O resultado da divisão eh:" + resultado_div
})

document.getElementById("btn-q4").addEventListener("click",function(){
    const q4_dist = document.getElementById("q4-dist").value
    const q4_comb = document.getElementById("q4-comb").value
    const q4resultado_div = div(parseFloat(q4_dist),parseFloat(q4_comb))
    document.getElementById("consumo_medio").innerText="Este carro tem autonomia de " + q4resultado_div +"km/litro  "
})

document.getElementById("btn-q5").addEventListener("click",function(){
    const q5_nome = document.getElementById("q5-nome").value
    const q5_fixo = document.getElementById("q5-fixo").value
    const q5_total = document.getElementById("q5-total").value
    const q5_comissao = parseFloat(q5_fixo) + parseFloat(q5_total*1.15)
    document.getElementById("nome_vendedor").innerText="Vendedor em questao: " + q5_nome
    document.getElementById("comissao_fixa").innerText="Salario fixo:" + q5_fixo
    document.getElementById("comissao_total").innerText="Salario total:" + q5_comissao
})

document.getElementById("btn-q6").addEventListener("click",function(){
    const q6_nome = document.getElementById("q6-nome").value
    const q6_ap1 = document.getElementById("q6-ap1").value
    const q6_ap2 = document.getElementById("q6-ap2").value
    const q6_ap3 = document.getElementById("q6-ap3").value
    const q6_media = parseFloat((parseFloat(q6_ap1) + parseFloat(q6_ap2)+ parseFloat(q6_ap3))/3)
    document.getElementById("nome_aluno").innerText="Aluno em questao: " + q6_nome
    document.getElementById("media_ap").innerText="Media:" + q6_media
})

document.getElementById("btn-q7").addEventListener("click",function(){
    let q7_varA = document.getElementById("q7-varA").value
    let q7_varB = document.getElementById("q7-varB").value
    let aux = q7_varA
    q7_varA=q7_varB
    q7_varB=aux
    document.getElementById("varA").innerText="Variavel A: " + q7_varA
    document.getElementById("varB").innerText="Variavel B:" + q7_varB
})

document.getElementById("btn-q8").addEventListener("click",function(){
    const q8_tempC = document.getElementById("q8-temperaturaC").value
    const q8_tempF = parseFloat(((parseFloat(q8_tempC) * 9) + 160)/5)
    
    
    document.getElementById("tempF").innerText="Temperatura em F: " + q8_tempF
})

document.getElementById("btn-q9").addEventListener("click",function(){
    const q9_cotacao = document.getElementById("q9-cotacao").value
    const q9_qtd = document.getElementById("q9-qtd").value
    
    const q9_total = parseFloat((parseFloat(q9_qtd) * (parseFloat(q9_cotacao))))
    
    
    document.getElementById("cotacao").innerText="Cotacao em dolar da quantia: " + q9_total
})


document.getElementById("btn-q10").addEventListener("click",function(){
    const q10_compra = document.getElementById("q10-compra").value
    const q10_prest = parseFloat(parseFloat(q10_compra)/5)
    
    
    document.getElementById("prestacoes").innerText="Valor das parcelas: " + q10_prest
})

document.getElementById("btn-q11").addEventListener("click",function(){
    const q11_nome = document.getElementById("q11-nome").value
    const q11_ap1 = document.getElementById("q11-ap1").value
    const q11_ap2 = document.getElementById("q11-ap2").value
    const q11_ap3 = document.getElementById("q11-ap3").value
    const q11_media = parseFloat((parseFloat(q11_ap1) + parseFloat(q11_ap2)+ parseFloat(q11_ap3))/3)
    
    
    if(q11_media >=7){
        var msg = "Aprovado"
    }
    else if(q11_media <=6.9  && q11_media>=5.1){
        var msg = "Recuperação"
    }
    else{
        var msg= "Reprovado"
    }
    document.getElementById("nome_aluno").innerText="Aluno em questao: " + q11_nome
    document.getElementById("media_ap").innerText="Media:" + q11_media
    document.getElementById("resultado").innerText= "Seu resultado eh: " + msg
})

document.getElementById("btn-q12").addEventListener("click",function(){
    const q12_mes = document.getElementById("q12-mes").value
    
    if(q12_mes == "1"){
        var msg = "Janeiro"
    }
    else if(q12_mes == "2"){
        var msg = "Fevereiro"
    }
    else if(q12_mes == 3){
        var msg = "Março"
    }
    else if(q12_mes == 4){
        var msg = "Abril"
    }
    else if(q12_mes == 5){
        var msg = "Maio"
    }
    else if(q12_mes == 6){
        var msg = "Junho"
    }
    else if(q12_mes == 7){
        var msg = "Julho"
    }
    else if(q12_mes == 8){
        var msg = "Agosto"
    }
    else if(q12_mes == 9){
        var msg = "Setembro"
    }
    else if(q12_mes == 10){
        var msg = "Outubro"
    }
    else if(q12_mes == 11){
        var msg = "Novembro"
    }
    else if(q12_mes == 12){
        var msg = "Dezembro"
    }
    else{
        var msg = "Valor inserido não corresponde a um mês válido."
    }
    document.getElementById("q12-resultado").innerText= msg

})


document.getElementById("btn-q13").addEventListener("click",function(){
    const q13_tipo = document.getElementById("q13-tipo").value
    const q13_consumo = document.getElementById("q13-consumo_mensal").value
    var msg = "Segue valor do consumo"
    if(q13_tipo == "1"){
        var beta = 0.6
    }
    else if(q13_tipo == "2"){
        var beta = 0.48
    }
    else if(q13_tipo == "3"){
        var beta = 1.29
    }
    else{
        var beta = 0
        var msg = "Valor inserido não corresponde a tipo válido."
        alert(msg)
    }
    const total = q13_consumo*beta 

    document.getElementById("q13-total").innerText="Seu consumo total eh: " + total

})