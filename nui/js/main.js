const body = document.querySelector('body');
const btnSave = document.querySelector('.btn-save');
const btnClose = document.querySelector('.btn-close');

const title = document.querySelector('#title');
const text = document.querySelector('#text')

body.hidden = true;

window.addEventListener('message', function(event) {
  if (event.data.hidden != undefined) {
    body.hidden = event.data.hidden
    return true;
  };

  if (event.data.done != undefined) {
    title.value = '';
    text.value = '';
    
    // TODO: add visual feedback

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