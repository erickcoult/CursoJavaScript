function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
if(hora >=0 && hora <12){
    img.src = 'imgs/manha.png'
    document.body.style.background = '#fba279'
} else if (hora >= 12 && hora < 18){
    img.src = 'imgs/tarde.png'
    document.body.style.background ='#d5a76c'
} else {
    img.src = 'imgs/noite.png'
    document.body.style.background ='#3e2e3e'
}
}