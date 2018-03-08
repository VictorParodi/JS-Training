const btn_0 = document.getElementById('button1');

btn_0.addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });
}