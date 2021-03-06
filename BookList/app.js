// The Book constructor
function Book(title, author, isbn) {
 this.title = title;
 this.author = author;
 this.isbn = isbn;
};

// The UI constructor
const UI = function() {};

UI.prototype.addBookToList = function(book) {
 const list = document.querySelector('#book-list');
 const row = document.createElement('tr');

 row.innerHTML = `
  <td> ${book.title} </td>
  <td> ${book.author} </td>
  <td> ${book.isbn} </td>
  <td> <a href="#" class="delete">x</a> </td>
 `;

 list.appendChild(row);
}

UI.prototype.clearFields = function() {
 document.getElementById('title').value = '';
 document.getElementById('author').value = '';
 document.getElementById('isbn').value = '';
}

UI.prototype.deleteBooks = function(target, callback) {
 if(target.className === 'delete') {
  target.parentElement.parentElement.remove();
  callback();
 }
}

UI.prototype.showAlert = function(message, className) {
 const div = document.createElement('div');
 div.className = `alert ${className}`;
 div.appendChild(document.createTextNode(message));
 
 const container = document.querySelector('.container');
 const form = document.querySelector('#book-form');

 container.insertBefore(div, form);

 setTimeout(function() {
  div.remove();
 }, 3000);
}

// Selecting the form
const form = document.querySelector('#book-form');

// Handling the submit event
form.addEventListener('submit', function(e) {
 const title = document.getElementById('title').value;
 const author = document.getElementById('author').value;
 const isbn = document.getElementById('isbn').value;

 const book = new Book(title, author, isbn);

 const ui = new UI();

 if(title && author && isbn) {
  ui.addBookToList(book);
  ui.showAlert('Book added!', 'success');
  ui.clearFields();
 } else {
  ui.showAlert('Fill out all fields', 'error');
 }

 e.preventDefault();
});

// Delete books
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', function(event) {
 const ui = new UI();

 ui.deleteBooks(event.target, function() {
  ui.showAlert('Book deleted', 'success');
 });

 event.preventDefault();
});