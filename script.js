const rows = [
  {
    id: 1,
    customer: 'John',
    product: 'apple',
    bill:1500,
    date: new Date('2020-01-01'),
  },

  {
    id: 2,
    customer: 'Smith',
    product: 'mango',
    bill:1100,
    date: new Date('2020-02-01'),
  },
  {
    id: 3,
    customer: 'Mitu',
    product: 'lichy',
    bill:100,
    date: new Date('2020-01-3'),
  },
  {
    id: 4,
    customer: 'Tamim',
    product: 'banana',
    bill:1500,
    date: new Date('2020-01-20'),
  },
  {
    id: 5,
    customer: 'Taha',
    product: 'pineapple',
    bill:4570,
    date: new Date('2020-01-2'),
  },
];

const tbody = document.querySelector('tbody');

function renderRows(rows) {
  tbody.innerHTML = '';

  rows.forEach((row) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.customer}</td>
        <td>${row.product}</td>
        <td>${row.bill}</td>
        <td>${row.date.toLocaleDateString()}</td>
        <td><button class="delete-btn">Delete</button></td>
       
    `;

    tbody.appendChild(tr);
  });
}

renderRows(rows);

const searchBox = document.querySelector('input');

searchBox.addEventListener('input', (e) => {
  var searhText = e.target.value.toLowerCase();

  var filteredRows = rows.filter((row) => {
    return (
      row.customer.toLowerCase().includes(searhText) ||
      row.id.toString().toLowerCase().includes(searhText) ||
      row.product.toLowerCase().includes(searhText)
    );
  });

  renderRows(filteredRows);
});
var timeHeaderCell = document.getElementById('timeHeader');

var isascending=true;
timeHeaderCell.addEventListener('click', function() {

if(isascending===false){
  const ascendingSortedRows = rows.slice().sort((a, b) => a.date - b.date);
  renderRows(ascendingSortedRows);
   isascending=true;
}else{
  const descendingSortedRows = rows.slice().sort((a, b) => b.date - a.date);
  renderRows(descendingSortedRows);
   isascending=false;
  
}

 
});
var billHeaderCell = document.getElementById('billHeader');

var isascending=true;
billHeaderCell.addEventListener('click', function() {

if(isascending===false){
  const ascendingSortedRows = rows.slice().sort((a, b) => a.bill - b.bill);
  renderRows(ascendingSortedRows);
   isascending=true;
}else{
  const descendingSortedRows = rows.slice().sort((a, b) => b.bill - a.bill);
  renderRows(descendingSortedRows);
   isascending=false;
  
}

 
});
var actionHeaderElement = document.getElementById("actionHeader");

tbody.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const row = event.target.closest('tr');
    if (row) {
      const rowIndex = Array.from(tbody.children).indexOf(row);
      rows.splice(rowIndex, 1); 
      renderRows(rows);
    }
  }
});


