function carregar(){
var img = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom dia!
    img.src = 'fotomanha.png'
    document.body.style.background = '#F0E68C'
} else if (hora >= 12 && hora < 18){
    //Boa tarde!
    img.src = 'fototarde.png'
    document.body.style.background = '#BC8F8F'
} else{
    //Boa noite!
    img.src = 'fotonoite.png'
    document.body.style.background = '#4682B4'
   }
}