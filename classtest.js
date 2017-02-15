'use strict';

//-------------------------VARIABLES-------------------------//
var timeSlot = {
  label: 'Times: ',
  times: ['6am|', '7am|', '8am|', '9am|', '10am|', '11am|', '12pm|', '1pm|', '2pm|', '3pm|', '4pm|', '5pm|', '6pm|', '7pm|'],
  totalLabel: 'Total|'};
var pikePlace = new CookieStore ('First and Pike:', 23, 65, 6.3);
var seaTac = new CookieStore ('SeaTac:', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center:', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill:', 20, 38, 2.3);
var alki = new CookieStore('Alki:', 2, 16, 4.6);
var tableEl = document.createElement('table');
var stores = [pikePlace, seaTac, seattleCenter, capHill, alki];
var total = 0;

//------creating a row item that ends up being labled 'times' on the table-------//
var rowOneEl = document.createElement('tr');
var anything = document.createElement('th');
anything.textContent = timeSlot.label;
rowOneEl.appendChild(anything);

//-------for loop to run through the time label-----------???????????????????
for (var k = 0; k < timeSlot.times.length ; k++){
  var timeLabelEl = document.createElement('th');
  var currentTime = timeSlot.times;
  timeLabelEl.textContent = currentTime[k];
  rowOneEl.appendChild(timeLabelEl);
};


var totalHead = document.createElement('th');
totalHead.textContent = timeSlot.totalLabel;
rowOneEl.appendChild(totalHead);

tableEl.appendChild(rowOneEl);

document.body.appendChild(tableEl);

//---------for loop to get through the different stores--------------//
for(var i = 0; i < stores.length; i++){
  var currentStore = stores[i];

  var rowEl = document.createElement('tr');

  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

//--for loop to produce cph stats for each time slot for this row (it is inside the store loop so it will go 16 times five different times....)
  for(var j = 0; j < timeSlot.times.length ; j++){
    var timeEl = document.createElement('td');
    timeEl.textContent = cph();
    rowEl.appendChild(timeEl);
    total += cph();
  }
  //log to dom the total in a column
  console.log(currentStore.name + ' ' + total);
  tableEl.appendChild(rowEl);
  var totalEl = document.createElement('td');
  totalEl.textContent = total;
  rowEl.appendChild(totalEl);
  total = 0;
};

document.body.appendChild(tableEl);

//------------------------FUNCTIONS----------------------------
//---------------function to calculate total cookies per hour for each store------
function cph(){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( currentStore.maxCustomers - currentStore.minCustomers + 1) + currentStore.minCustomers)) * currentStore.avgCookies);
  return avgCookiesPerHour;
};
//------------???? what is this again ?????--------------------------------//
CookieStore.prototype.getAvgCookieCount = function (){
  var range = this.maxCustomers - this.minCustomers;
  return Math.floor(Math.random() * range + this.minCustomers);
};
// -----------------function to create new cookie store objects.(use of the .this method here)-------//
function CookieStore(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
}
console.log(total);
