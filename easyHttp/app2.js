const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  err? console.log(err) : console.log(posts);
});

