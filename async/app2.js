const btn = document.getElementById('button1');

btn.addEventListener('click', loadCustomer);

// function loadCustomer(event) {
//   function Customer(name) {
//     this.name = name;

//     this.showName = function() {
//       const div = document.querySelector('#customer');
//       div.innerHTML = `
//         <ul>
//           <li> ${this.name} </li>
//         </ul>
//       `;
//     }
//   }

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', './customer.json', true);

//   xhr.onload = function() {
//     const customer = JSON.parse(xhr.responseText);
//     const cust1 = new Customer(customer.name);
//     cust1.showName();
//   }

//   xhr.send();
// }


function loadCustomer() {
  class Customer {
    constructor(name) {
      this.name = name;
    }

    showName() {
      const div = document.querySelector('#customer');
      div.innerHTML = `
        <ul>
          <li> ${this.name} </li>
        </ul>
      `;
    }
  }

  const xhr = new XMLHttpRequest();

  xhr.open('GET', './customer.json', true);

  xhr.onload = function() {
    const customer = JSON.parse(xhr.responseText);
    const cust = new Customer(customer.name);
    cust.showName();
  }

  xhr.send();
}