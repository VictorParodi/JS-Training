const btn = document.getElementById('button');

btn.addEventListener('click', onLoadData);

function onLoadData(event) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.onprogress = function() {
    console.log('-------------------- Ready State Property Value:', this.readyState);
  }

  xhr.onload = function() {
    if(this.status === 200) {
      let out = document.querySelector('#output');
      out.innerHTML = `<h1> ${this.responseText} </h1>`;
    }
  }

  xhr.send();
}