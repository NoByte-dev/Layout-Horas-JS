function load() {
  var msg = document.querySelector('p#msg')
  var img = document.querySelector('img#landscape')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora <=12) {
    // bom dia
    img.src = 'images/morning.jpeg'
    document.body.style.background = "linear-gradient(180deg, rgba(255,246,176,1) 0%, rgba(130,255,204,1) 30%, rgba(29,141,171,1) 100%)"
  } else if (hora > 12 && hora <=18) {
    // boa tarde
    img.src = 'images/md-night.jpeg'
    document.body.style.background = "linear-gradient(180deg, rgba(255,214,141,1) 0%, rgba(255,148,76,1) 30%, rgba(185,92,0,1) 100%)"
  } else {
    // boa noite
    img.src = 'images/night.jpeg'
    document.body.style.background = "linear-gradient(180deg, rgba(40,140,135,1) 0%, rgba(39,105,101,1) 30%, rgba(8,48,48,1) 100%)"
  }
}

function set_morning() {
  var msg = document.querySelector('p#msg')
  var img = document.querySelector('img#landscape')
  img.src = 'images/morning.jpeg'
  document.body.style.background = "linear-gradient(180deg, rgba(255,246,176,1) 0%, rgba(130,255,204,1) 30%, rgba(29,141,171,1) 100%)"
  msg.innerHTML = `Estilo <strong>Manhã</strong> selecionado =)`
}
function set_md_night() {
  var msg = document.querySelector('p#msg')
  var img = document.querySelector('img#landscape')
  img.src = 'images/md-night.jpeg'
  document.body.style.background = "linear-gradient(180deg, rgba(255,214,141,1) 0%, rgba(255,148,76,1) 30%, rgba(185,92,0,1) 100%)"
  msg.innerHTML = `Estilo <strong>Tarde</strong> selecionado =)`
}
function set_night() {
  var msg = document.querySelector('p#msg')
  var img = document.querySelector('img#landscape')
  img.src = 'images/night.jpeg'
  document.body.style.background = "linear-gradient(180deg, rgba(40,140,135,1) 0%, rgba(39,105,101,1) 30%, rgba(8,48,48,1) 100%)"
  msg.innerHTML = `Estilo <strong>Noite</strong> selecionado =)`
}
function reload() {
  location.reload()
}
