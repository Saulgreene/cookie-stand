'use strict';

//-------------------------VARIABLES-------------------------
var timeSlot = {
  label: 'Times: ',
  times: ['6 am: ', '7 am: ', '8 am: ', '9 am: ', '10 am: ', '11 am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: ']
};
var pikePlace = new CookieStore ('First and Pike', 23, 65, 6.3);
// console.log(pikePlace.displayCookies());
var seaTac = new CookieStore ('SeaTac', 3, 24, 1.2);
// console.log(seaTac.displayCookies());
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
// console.log(seattleCenter.displayCookies());
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
// console.log(capHill.displayCookies());
var alki = new CookieStore('Alki', 2, 16, 4.6);
// console.log(alki.displayCookies());
var tableEl = document.createElement('table');
var stores = [pikePlace, seaTac, seattleCenter, capHill, alki];
var total = [];
//----------------------For Loop to run through the times------------

var rowOneEl = document.createElement('tr');
var anything = document.createElement('th');
anything.textContent = timeSlot.label;
rowOneEl.appendChild(anything);

for (var k = 0; k < timeSlot.times.length ; k++){
  var timeLabelEl = document.createElement('th');
  var currentTime = timeSlot.times;
  timeLabelEl.textContent = currentTime[k];
  rowOneEl.appendChild(timeLabelEl);
};

tableEl.appendChild(rowOneEl);

document.body.appendChild(tableEl);

for(var i = 0; i < stores.length; i++){
  var currentStore = stores[i];

  var rowEl = document.createElement('tr');

  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);


  for(var j = 0; j < timeSlot.times.length ; j++){
    var timeEl = document.createElement('td');
    timeEl.textContent = cph();
    rowEl.appendChild(timeEl);
    total.push(this.cph());
  }

  tableEl.appendChild(rowEl);
};

document.body.appendChild(tableEl);

//------------------------FUNCTIONS----------------------------
function cph(){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( currentStore.maxCustomers - currentStore.minCustomers + 1) + currentStore.minCustomers)) * currentStore.avgCookies);
  return avgCookiesPerHour;
};

CookieStore.prototype.getAvgCookieCount = function (){
  var range = this.maxCustomers - this.minCustomers;
  return Math.floor(Math.random() * range + this.minCustomers);
};

function CookieStore(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
}
console.log(total);
