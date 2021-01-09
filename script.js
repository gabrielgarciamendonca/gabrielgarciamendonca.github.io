window.onload = function () {
  events();
}

function events() {
  const downButton = document.querySelector('.fas');
  downButton.addEventListener('click', downButtonClicked);
}

function downButtonClicked() {
  const showThis = document.querySelector('#div-hide-or-show');
  if (showThis.className === 'show-informations') {
    showThis.className = showThis.className.replace('show-informations', 'hidden-informations');
  }else{ 
    showThis.className = showThis.className.replace('hidden-informations', 'show-informations');
  }
}