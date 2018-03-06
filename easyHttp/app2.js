const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/postsx', function(err, posts) {
  err? console.log(err) : console.log(posts);
});

