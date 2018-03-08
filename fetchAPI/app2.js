const btn_0 = document.getElementById('button1');

btn_0.addEventListener('click', getText);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      const output = document.querySelector('#output');
      output.innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get local json file data
const btn_1 = document.getElementById('button2');

btn_1.addEventListener('click', getJSON);

function getJSON() {
  fetch('posts.json')
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {
      let out = '';

      data.forEach(function(post) {
        out += `<li> ${post.title} </li>`;
      });

      const output = document.querySelector('#output');
      output.innerHTML = out;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get external data from API
const btn_2 = document.getElementById('button3');

btn_2.addEventListener('click', getExternal);

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let out = '';

      data.forEach(function(user) {
        out += `<li> ${user.login} </li>`
      });

      const output = document.querySelector('#output');
      output.innerHTML = out;
    })
    .catch(function(err) {
      console.log('ERROR:', err);
    });
}