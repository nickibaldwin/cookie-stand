'use strict'

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//store building function
function StoreBuilder(storeName, minCust, maxCust, avgCookiesold) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesold = avgCookiesold;
}

var seattle = new StoreBuilder('Seattle', 23, 65, 6.3)
console.log(seattle)

// store results calculator
StoreBuilder.prototype.salesResults = function(){
var grabbingTable = document.getElementById('list'); //step 1, links to DOM
var createRow = document.createElement('tr'); //step 2, created thing we wanted to append

grabbingTable.appendChild(createRow); //step 3, append the row to the table

var cityNameCell = document.createElement('td') // step 4, creating cell to give content

cityNameCell.textContent = this.storeName; // step 5, give content to what I've created

createRow.appendChild(cityNameCell); // step 6, append cell to row

// repeat steps 4-6 for each cell for the hour
// for the math- need to create an array of the city data. once complete, I need a loop to repeat step 4-6




  // var randomAmount = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
}

seattle.salesResults();







// // this does the math for the store
// BuildStore.prototype.salesResults = function() {
//   var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

// }
// // this displays the results of math ^



// var test = new BuildStore('testStore', 5, 10, 2);
// var testTotal = test.salesResults();
// console.log(testTotal);


// test.salesResults();
// console.log(test);






// var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// // numOfCustomers: function (){
// //   var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   return randomCustomers
// //   },
// //   cookiesPerHour: [], 
// // }


// var Tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 6.3,
// numOfCustomers: function (){
//   var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   return randomCustomers
//     },
//     cookiesPerHour: [], 
//   }


// var Dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
// numOfCustomers: function (){
//   var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   return randomCustomers
//     },
//     cookiesPerHour: [],   
// }


// var Paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//  numOfCustomers: function (){
//     var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return randomCustomers
//     },
//     cookiesPerHour: [], 
// }


// var Lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
// numOfCustomers: function (){
//     var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return randomCustomers
//     },
//     cookiesPerHour: [], 
// }


// var locations = [Seattle, Tokyo, Dubai, Paris, Lima]
// for (var j = 0; j < locations.length; j++){
//   for (var i = 0; i < hoursOfOperation.length; i++){
//     var customers = locations[j].numOfCustomers();
//     var cookiesThisHour = Math.floor(customers * locations[j].CookieSale)
//     var cookieString = `${hoursOfOperation[i]}: ${cookiesThisHour} cookies`
//     locations[j].cookiesPerHour.push(cookieString)
//   }
// }
// console.log(Seattle.cookiesPerHour)

// document.addEventListener('DOMContentLoaded', (event) => {
//   var cookieList = document.getElementById("enter");
//   cookieList.innerHTML = "<li> additional HTML code</li>";
// })
