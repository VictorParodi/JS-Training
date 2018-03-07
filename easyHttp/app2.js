const http = new easyHTTP;

// Get request code
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   err? console.log(err) : console.log(posts);
// });

// Post request code
const data = {
  name: 'Allison Mack',
  username: 'Ali Mack',
  email: 'ali@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, user) {
  err? console.log(err) : console.log(user);
});

