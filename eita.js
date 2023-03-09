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

    resmult.innerHTML = ` Sua velocidade é ${velomult}.`

    if (velomult > 60){
        resmult.innerHTML = `você está multado`
    }
}