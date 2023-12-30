function load() {
  const now = document.querySelector('#now-btn');
  const msg = document.querySelector('p#msg');
  const img = document.querySelector('img#landscape');
  const data = new Date();
  const hora = data.getHours();
  const minutos = data.getMinutes().toString().padStart(2, '0');
  const segundosRestantes = 60 - new Date().getSeconds();
  msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong> horas`;

  setTimeout(() => setInterval(load, 60000), segundosRestantes * 1000);

  let layoutName;

  if (hora >= 0 && hora <= 12) {
    img.src = 'images/morning.jpeg';
    layoutName = 'morning';
  } else if (hora > 12 && hora <= 18) {
    img.src = 'images/md-night.jpeg';
    layoutName = 'md-night';
  } else {
    img.src = 'images/night.jpeg';
    layoutName = 'night';
  }

  document.body.style.background = getBackgroundGradient(layoutName);
  resetEstilosBtns();
  aplicarEstilosBtn(now);
}

function getBackgroundGradient(layout_name) {
  switch (layout_name) {
    case 'morning':
      return "linear-gradient(180deg, rgba(255,246,176,1) 0%, rgba(130,255,204,1) 30%, rgba(29,141,171,1) 100%)";
    case 'md-night':
      return "linear-gradient(180deg, rgba(255,214,141,1) 0%, rgba(255,148,76,1) 30%, rgba(185,92,0,1) 100%)";
    case 'night':
      return "linear-gradient(180deg, rgba(40,140,135,1) 0%, rgba(39,105,101,1) 30%, rgba(8,48,48,1) 100%)";
    default:
      return "";
  }
}

function resetEstilosBtns() {
  const morning = document.querySelector('#morning-btn');
  const md_night = document.querySelector('#md-night-btn');
  const night = document.querySelector('#night-btn');
  const now = document.querySelector('#now-btn');

  removeEstilosBtn(morning);
  removeEstilosBtn(md_night);
  removeEstilosBtn(night);
  removeEstilosBtn(now);
}

function removeEstilosBtn(elemento) {
  elemento.style.filter = '';
  elemento.style.background = 'rgba(255, 255, 255, 0.5)';
}

function set_layout(layout_name) {
  var img = document.querySelector('img#landscape')
  img.src = `images/${layout_name}.jpeg`
  set_bg_style(layout_name)
}

function aplicarEstilosBtn(elemento) {
  elemento.style.filter = 'grayscale(0%)';
  elemento.style.background = 'rgba(0, 0, 0, 0.1)';
}

function set_bg_style(layout_name) {
  resetEstilosBtns();

  const morning = document.querySelector('#morning-btn');
  const md_night = document.querySelector('#md-night-btn');
  const night = document.querySelector('#night-btn');

  switch (layout_name) {
    case 'morning':
      aplicarEstilosBtn(morning);
      break;
    case 'md-night':
      aplicarEstilosBtn(md_night);
      break;
    case 'night':
      aplicarEstilosBtn(night);
      break;
    default:
      break;
  }

  document.body.style.background = getBackgroundGradient(layout_name);
}
