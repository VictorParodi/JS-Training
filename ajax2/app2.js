const btn = document.getElementById('button1');

btn.addEventListener('click', loadCustomer);

function loadCustomer(event) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      let customer = JSON.parse(this.responseText);
      let content = `
        <ul>
          <li> ${customer.id} </li>
          <li> ${customer.name} </li>
          <li> ${customer.company} </li>
          <li> ${customer.phone} </li>
        </ul>
      `;

      let out = document.querySelector('#customer');
      out.innerHTML = content;
    }
  }

  xhr.send();
}