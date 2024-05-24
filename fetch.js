
fetch('sales.xml')
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      const sales = data.querySelectorAll('sale');
      const tableBody = document.querySelector('#salesTable tbody');
      
      sales.forEach(sale => {
        const id = sale.querySelector('id').textContent;
        const date = sale.querySelector('date').textContent;
        const product = sale.querySelector('product').textContent;
        const price = sale.querySelector('price').textContent;
        const quantity = sale.querySelector('quantity').textContent;
      
        
        
        const row = `<tr><td>${id}</td><td>${date}</td><td>${product}</td><td>${price}</td><td>${quantity}`;
        tableBody.insertAdjacentHTML('beforeend', row);
      });
    });