//exercício 1
    //window.alert('eae parça')
    //window.confirm('salve cria')
    //window.prompt('eita mds')

    //exercício 2
    //var n1 = Number.parseFloat(window.prompt ('número 1'))
    //var n2 = Number.parseFloat(window.prompt ('número 2'))
    //var s = n1 + n2 
    //window.alert('a soma dos valores é ' + s)

    //exercício 3 - formatando strings
    //var nome = window.prompt('Seu nome')
    //document.write(`Seu nome é ${nome}`)
    //document.write(`Seu nome tem ${nome.length} letras`)
    //document.write(`Seu nome em maíuscula é ${nome.toUpperCase()}`)

//exercício 4 - Funções
function clicar(){
    var a = window.document.getElementById('blocot')
     a.innerText = 'clicou!'
}

function clicar2(){
    var a = window.document.getElementById('area')
     a.innerText = 'clicou!'
}

//exercício 5- Interações com usuários
function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML= `a soma final é ${s}`
}


//exercício 6- Condições
// var vel = 59 
// if (vel > 60) {
//     console.log('Você foi multado!')
// }
// else{
//     console.log('Não foi multado!')
// }

//exercício 7- Sistema de Multas por Condições
function clickmult(){
    var mult = document.getElementById('txtmult')
    var resmult = document.getElementById('resmult')
    var velomult = Number(mult.value)

    resmult.innerHTML = ` Sua velocidade é ${velomult}km/h.`

    if (velomult > 60){
        resmult.innerHTML = `você está multado`
    }
}

//exercício 8- Condições Aninhadas
var idade8 = 78
if(idade8 < 16){
    console.log('Não vota')
} else if (idade8 < 18 || idade8 > 65) {
        console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório')
}

//exercício 9- Switch
var agora9 = new Date()
var diaSem9 = agora9.getDay()

switch(diaSem9){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break    
}

//exercício 10- Repetição
var c10 = 0
while(c10 <= 6){
    console.log(`Passo ${c10}`)
    c10 += 2
}

//exercício 11- Repetição inversa
var c11 = 0
do{
    console.log(`Passo ${c11}`)
    c11 +=1
} while(c11 <= 6)

//exercício 12- Repetição com variável de controle
for(var c12 = 1; c12 <=10; c12++){
    console.log(c12)
}

//exercício 13- Variáveis Compostas
//let valores13 = [8, 1, 7, 4, 2, 9]
    for(let pos13=0; pos13 < valores13.length; pos13++){
        console.log(`posição ${pos13} tem valor ${valores13[pos13]}`)
}
let valores13 = [8, 1, 7, 4, 2, 9]
for(let pos13 in valores13){
    console.log(`A posição de ${pos13} tem o valor ${valores13[pos13]}`)
}