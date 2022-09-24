const body = document.querySelector('body');
const btnSave = document.querySelector('.btn-save');
const btnClose = document.querySelector('.btn-close');
const overlayNotify = document.querySelector('.overlay-notify');

const title = document.querySelector('#title');
const text = document.querySelector('#text')

body.hidden = true;

window.addEventListener('message', function(event) {
  // On close
  if (event.data.hidden != undefined) {
    body.hidden = event.data.hidden
    return true;
  };

  // On save
  if (event.data.done != undefined) {
    showOverlayNotify(() => {
      title.value = '';
      text.value = '';
    });

    return true;
  }
});

btnSave.addEventListener('click', handleButtonSave);
btnClose.addEventListener('click', handleButtonClose);

function handleButtonSave(event) {
  fetch(`https://${GetParentResourceName()}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: title.value,
      text: text.value
    })
  }).then(resp => resp.json()).then(resp => console.log(resp));
}

function handleButtonClose(event) {
  fetch(`https://${GetParentResourceName()}/close`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  });
}

// Show out overlay notify
function showOverlayNotify(callback) {
  overlayNotify.style.display = 'flex';
  setTimeout(function() {
    overlayNotify.style.animationDirection = 'reverse';
    overlayNotify.style.display = 'none';

    callback()
  }, 5000);
}