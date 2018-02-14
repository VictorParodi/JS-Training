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

// Select book form 
const form = document.querySelector('#book-form');

form.addEventListener('submit', function(event) {
 const title = document.querySelector('#title').value;
 const author = document.querySelector('#author').value;
 const isbn = document.querySelector('#isbn').value;

 const book = new Book(title, author, isbn);

 const ui = new UI();

 ui.addBookToList(book);
 ui.clearForm();

 event.preventDefault();
});