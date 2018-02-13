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

// Selecting the form
const form = document.querySelector('#book-form');

// Handling the submit event
form.addEventListener('submit', function(e) {
 const title = document.getElementById('title').value;
 const author = document.getElementById('author').value;
 const isbn = document.getElementById('isbn').value;

 const book = new Book(title, author, isbn);

 const ui = new UI();

 ui.addBookToList(book);

 ui.clearFields();

 e.preventDefault();
});