const loader = document.getElementById('loader');
const itemContainer = document.getElementById('items');

function showLoader(){
    loader.classList.add('loader_active');
}

function hideLoader(){
    loader.classList.remove('loader_active');
}

function displayItems(data){
  itemContainer.innerHTML = '';

for (const currencyCode in data) {
    if(data.hasOwnProperty(currencyCode)){
        const currency = data[currencyCode];
        const item = document.createElement('div');
item.className = 'item';
item.innerHTML = `
<div class="item__code">${currency.CharCode} </div>
<div class="item__value">${currency.Value}</div>
<div class="item__currency">руб.</div>`;
      itemContainer.appendChild(item);
    }
}
}

function loadCurrency(){
showLoader();
 const cacheData = localStorage.getItem('currencyData');
   if(cacheData){
     const data = JSON.parse(cacheData);
     hideLoader();
     displayItems(data);
   }
 fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
 .then(response => response.json())
 .then(data => {
    localStorage.setItem('currencyData', JSON.stringify(data.response.Valute));
    hideLoader();
    displayItems(data.response.Valute);
 })
 .catch(error => console.error(error));
}

loadCurrency();