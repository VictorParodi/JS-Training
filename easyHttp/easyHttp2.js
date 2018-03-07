function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Get request
// easyHTTP.prototype.get = function(url, callback) {
//   this.http.open('GET', url, true);

//   let self = this;

//   this.http.onload = function() {
//     if(self.http.status === 200) {
//       callback(null, self.http.responseText);
//     } else {
//       callback(`There is an error: ${self.http.status}`);
//     }
//   }

//   this.http.send();
// }

// Post request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this.http;

  this.http.onload = function() {
    callback(null, self.responseText);
  }

  this.http.send(JSON.stringify(data));
}