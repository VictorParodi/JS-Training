const btn = document.querySelector('.get-jokes');
btn.addEventListener('click', getJokes);

function getJokes(event) {
  const number = document.querySelector('input[type="number"]').value;
  
  const xhr = new XMLHttpRequest();

  if(!number) {
    return alert('You need to fill out the text field');
  }

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.response);

      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li> ${joke.joke} </li>`;
        });
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  event.preventDefault();
}