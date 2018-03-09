const http = new easyHTTP;

// GET
// http.get('http://jsonplaceholder.typicode.com/users')
//   .then(res => console.log(res))
//   .catch(err => console.log('CUSTOM ERROR:', err));

// POST
// const data = {
//   name: 'John Doe',
//   username: 'johndoe',
//   email: 'jdoe@gmail.com'
// }

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(res => console.log(res))
//   .catch(err => console.log('CUSTOM ERROR:', err));

// Para el método PUT, se escribe el mismo código utilizado para POST. Solo cambia el método

// DELETE
http.delete('https://jsonplaceholder.typicode.com/users/3')
  .then(res => console.log(res))
  .catch(error => console.log(error));