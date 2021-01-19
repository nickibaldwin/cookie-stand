'use strict'

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
var Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  CookieSale: 6.3,
numOfCustomers: function (){
  var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  return randomCustomers
  },
  cookiesPerHour: [], 
}


var Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 6.3,
numOfCustomers: function (){
  var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  return randomCustomers
    },
    cookiesPerHour: [], 
  }


var Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
numOfCustomers: function (){
  var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  return randomCustomers
    },
    cookiesPerHour: [],   
}


var Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
 numOfCustomers: function (){
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomers
    },
    cookiesPerHour: [], 
}


var Lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
numOfCustomers: function (){
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomers
    },
    cookiesPerHour: [], 
}


var locations = [Seattle, Tokyo, Dubai, Paris, Lima]
for (var j = 0; j < locations.length; j++){
  for (var i = 0; i < hoursOfOperation.length; i++){
    var customers = locations[j].numOfCustomers();
    var cookiesThisHour = Math.floor(customers * locations[j].CookieSale)
    var cookieString = `${hoursOfOperation[i]}: ${cookiesThisHour} cookies`
    locations[j].cookiesPerHour.push(cookieString)
  }
}
console.log(Seattle.cookiesPerHour)

document.addEventListener('DOMContentLoaded', (event) => {
  var cookieList = document.getElementById("enter");
  cookieList.innerHTML = "<li> additional HTML code</li>";
})
