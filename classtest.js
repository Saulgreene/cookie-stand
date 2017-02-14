'use strict';

var timeSlot = ['6 am: ', '7 am: ', '8 am: ', '9 am: ', '10 am: ', '11 am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: ', '8 pm: '];
// var pikeEl = document.getElementById('first-and-pike');
// var seatacEl = document.getElementById('seatac-airport');
// var seattleCenterEl = document.getElementById('seattle-center');
// var capHillEl = document.getElementById('capitol-hill');
// var alkiEl = document.getElementById('alki');
// var elements = [pikeEl, seatacEl, seattleCenterEl, capHillEl, alkiEl];

// STORES-------------------------------------------------------------
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

for(var i = 0; i < stores.length; i++){
  var currentStore = stores[i];

  var rowEl = document.createElement('tr');

  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

  for(var j = 0; j < timeSlot.length; j++){
    var timeEl = document.createElement('td');
    timeEl.textContent = cph();
    rowEl.appendChild(timeEl);
  }
  // var minCustEl = document.createElement('td');
  // minCustEl.textContent = currentStore.minCustomers;
  // rowEl.appendChild(minCustEl);
  //
  // var maxCustEl = document.createElement('td');
  // maxCustEl.textContent = currentStore.maxCustomers;
  // rowEl.appendChild(maxCustEl);
  //
  // var avgCookiesEl = document.createElement('td');
  // avgCookiesEl.textContent = currentStore.avgCookies;
  // rowEl.appendChild(avgCookiesEl);

  tableEl.appendChild(rowEl);
};

document.body.appendChild(tableEl);

//---------------------------------------------------------------------
function cph(){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( currentStore.maxCustomers - currentStore.minCustomers + 1) + currentStore.minCustomers)) * currentStore.avgCookies);
  return avgCookiesPerHour;
};
function displayCookies(){
  for (var j = 0; j < timeSlot.length ; j++) {
    if (j === 0){
      console.log(this.name);
    };
    var userElement = document.createElement('li');
    var displayHourAndAvg = timeSlot[j] + cph();
    console.log(displayHourAndAvg);
    userElement.textContent += displayHourAndAvg;// when i comment out these two lines it logs to the console
    elements[0].appendChild(userElement);// replace 0 with 'index' and put a for loop in?
  }
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
  this.cph = function (){
    var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( this.max - this.min + 1) + this.min)) * this.avg);
    return avgCookiesPerHour;
  };
  this.displayCookies = function(){
    for (var j = 0; j < timeSlot.length ; j++) {
      if (j === 0){
        console.log(this.name);
      };
      var userElement = document.createElement('li');
      var displayHourAndAvg = timeSlot[j] + this.cph();
      console.log(displayHourAndAvg);
      userElement.textContent += displayHourAndAvg;// when i comment out these two lines it logs to the console
      elements[0].appendChild(userElement);// replace 0 with 'index' and put a for loop in?
    }
  };
};

// console.log(pikePlace.getAvgCookieCount());
