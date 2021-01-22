'use strict'

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var table = document.getElementById('list')
var allStores = []
var allStoresTotal = 0

//store building constructor function
function StoreBuilder(storeName, minCust, maxCust, avgCookiesold) {
  this.storeName = storeName; // assigning parameters to
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesold = avgCookiesold;
  this.avgCookiesPerHourTotalarray = [];
  this.dailyTotals = 0;
  allStores.push(this)
  this.avgCookiesPerHourTotal();
  this.renderShopRows();
}

function randomAmount(min, max){
  return (Math.floor(Math.random() * (max - min) + min))
}

// store results calculator
StoreBuilder.prototype.avgCookiesPerHourTotal = function(){
  for(var i = 0; i < hoursOfOperation.length; i++){
  var avgCookie = Math.ceil(randomAmount(this.minCust, this.maxCust) * this.avgCookiesold)
  this.avgCookiesPerHourTotalarray.push(avgCookie);
  this.dailyTotals = this.dailyTotals + avgCookie; // re-assigning value to this.dailyTotals, basically incremetilly increading with each hour
  allStoresTotal += avgCookie;
  }
}

function headerRow(){
  //create table row
  var headerRow = document.createElement('tr');
  //create cell header 'th' or cell data 'td'
  var locationEl = document.createElement('th');
  //add text content to cell
  locationEl.textContent = 'Location';
  //append cell to table row
  headerRow.appendChild(locationEl);
  for(var i = 0; i < hoursOfOperation.length; i++){
    var hours = document.createElement('th');
  hours.textContent = hoursOfOperation[i];
  headerRow.appendChild(hours);
  }
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';
  headerRow.appendChild(totalEl);
  
  //append row to table
  table.appendChild(headerRow);
}
headerRow();

//this function renders the shop row every time a new store is created, this deals with one specific store at a time
StoreBuilder.prototype.renderShopRows = function(){
  var shopRow = document.createElement('tr');
  var storeName = document.createElement('td');
  storeName.textContent = this.storeName;
  shopRow.appendChild(storeName);

  for(var i = 0; i < this.avgCookiesPerHourTotalarray.length; i++){
    var hourlyTotal = document.createElement('td');
    hourlyTotal.textContent = this.avgCookiesPerHourTotalarray[i];
    shopRow.appendChild(hourlyTotal);
  }
  var dayTotal = document.createElement('td');
  dayTotal.textContent = this.dailyTotals;
  shopRow.appendChild(dayTotal);
  table.appendChild(shopRow);
}

function footerRow(){
  var footerRow = document.createElement('tr');
  var hourlyTotal = document.createElement('th');
  hourlyTotal.textContent = 'Totals';
  footerRow.appendChild(hourlyTotal);
  for(var i = 0; i < hoursOfOperation.length; i++){
    var storeHoursTotal = 0;
    var storeHoursEl = document.createElement('td');
      for (var j = 0; j < allStores.length; j++){
        storeHoursTotal += allStores[j].avgCookiesPerHourTotalarray[i]
        console.log(allStores[j].avgCookiesPerHourTotalarray[i])
        console.log(allStores)
      }
  storeHoursEl.textContent = storeHoursTotal;
  footerRow.appendChild(storeHoursEl);
  }
  var allStoresTotalEl = document.createElement('td');
  allStoresTotalEl.textContent = allStoresTotal;
  footerRow.appendChild(allStoresTotalEl);
  table.appendChild(footerRow);
}

var seattle = new StoreBuilder('Seattle', 23, 65, 6.3)
// console.log(seattle)

var tokyo = new StoreBuilder('Tokyo', 3, 24, 1.2)
// console.log(tokyo)

var dubai = new StoreBuilder('Dubai', 11, 38, 3.7)
// console.log(dubai)

var paris = new StoreBuilder('Paris', 20, 38, 2.3)
// console.log(paris)

var lima = new StoreBuilder('Lima', 2, 16, 4.6)
// console.log(lima)

footerRow();


var formElement = document.getElementById('cookie-shop-form');

formElement.addEventListener('submit', function (event) {
  event.preventDefault(); 
  console.log(event.target.location.value);
  console.log(event.target.minCust.value);
  console.log(event.target.maxCust.value);
  console.log(event.target.avgCookiesold.value);

var location = event.target.location.value;
var minCust = event.target.minCust.value;
var maxCust = event.target.maxCust.value;
var avgCookiesold = event.target.avgCookiesold.value;

}