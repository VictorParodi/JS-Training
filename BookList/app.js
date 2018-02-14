// Book Constructor
function Book(title, author, isbn) {
 this.title = title;
 this.author = author;
 this.isbn = isbn;
};
 // UI constructor
function UI() {};

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

UI.prototype.clearForm = function() {
 document.querySelector('#title').value = '';
 document.querySelector('#author').value = '';
 document.querySelector('#isbn').value = '';
}

UI.prototype.deleteBooks = function(target, callback) {
 target.parentElement.parentElement.remove();
 callback();
}

UI.prototype.showAlert = function(message, className) {
 const div = document.createElement('div');
 div.setAttribute('class', `alert ${className}`);
 div.appendChild(document.createTextNode(message));

 const container = document.querySelector('.container');
 const form = document.querySelector('#book-form');

 container.insertBefore(div, form);

 setTimeout(function() {
  div.remove();
 }, 3000);
}

// Select book form 
const form = document.querySelector('#book-form');

form.addEventListener('submit', function(event) {
 const title = document.querySelector('#title').value;
 const author = document.querySelector('#author').value;
 const isbn = document.querySelector('#isbn').value;

 const book = new Book(title, author, isbn);

 const ui = new UI();

 if(title && author && isbn) {
  ui.addBookToList(book);
  ui.clearForm();
  ui.showAlert('Book added!', 'success');
 } else {
  ui.showAlert('Fill out all fields', 'error');
 }

 event.preventDefault();
});

// Delete book
const bookList = document.querySelector('#book-list');

bookList.addEventListener('click', function(event) {

 if(event.target.className === 'delete') {
  const ui = new UI();
  ui.deleteBooks(event.target, function() {
   ui.showAlert('Book deleted', 'success');
  });
 }
});