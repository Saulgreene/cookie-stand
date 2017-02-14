'use strict';
var storeLocations = [
  {
    htmlId: 'first-and-pike',
    minCustomerPerHour: 23,
    maxCustomerPerHour: 65,
    avgCookiesPerCustomer: 6.3
  },
  {
    htmlId: 'seatacAirport',
    minCustomerPerHour: 3,
    maxCustomerPerHour: 24,
    avgCookiesPerCustomer: 1.2
  },
  { htmlId: 'seattleCenter',
    minCustomerPerHour: 11,
    maxCustomerPerHour: 38,
    avgCookiesPerCustomer: 3.7
  },
  { htmlId: 'capHill',
    minCustomerPerHour: 20,
    maxCustomerPerHour: 38,
    avgCookiesPerCustomer: 2.3
  },
  { htmlId: 'alki',
    minCustomerPerHour: 2,
    maxCustomerPerHour: 16,
    avgCookiesPerCustomer: 4.6
  }
];
var timeSlot = [
  '6 am: ',
  '7 am: ',
  '8 am: ',
  '9 am: ',
  '10 am: ',
  '11 am: ',
  '12 pm: ',
  '1 pm: ',
  '2 pm: ',
  '3 pm: ',
  '4 pm: ',
  '5 pm: ',
  '6 pm: ',
  '7 pm: ',
  '8 pm: ',


];
//this logs the min cust per hour to the page
// var minEl = document.createElement('h1');
// minEl.setAttribute('id', storeLocations[0].htmlId + '-min');
// minEl.textContent = 'Minimum Customers Per Hour: ' + storeLocations[0].minCustomerPerHour;
// var sectionEl = document.getElementById('main-content');
// sectionEl.appendChild(minEl);
//
// //this logs the max cust per hour to the page
// var maxEl = document.createElement('h1');
// maxEl.setAttribute('id', storeLocations[0].htmlId + '-max');
// maxEl.textContent = 'Maximum Customers Per Hour: ' + storeLocations[0].maxCustomerPerHour;
// var sectionEl = document.getElementById('main-content');
// sectionEl.appendChild(maxEl);
//
// //this logs the avg cookies per cust
// var avgEl = document.createElement('h1');
// avgEl.setAttribute('id', storeLocations[0].htmlId + '-avg');
// avgEl.textContent = 'Average Cookies Per Customer: ' + storeLocations[0].avgCookiesPerCustomer;
// var sectionEl = document.getElementById('main-content');
// sectionEl.appendChild(avgEl);

//now i need to make the equation for avgcookiesPerHour
function cookiesPerHour (index) {
  if (j === 0) {
    console.log('storeLocation: ' + storeLocations[index].htmlId);
  }
  var max = storeLocations[index].maxCustomerPerHour;
  var min = storeLocations[index].minCustomerPerHour;
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( max - min + 1) + min)) * storeLocations[index].avgCookiesPerCustomer);
  return avgCookiesPerHour;
}

var sectionEl = document.getElementById('test');
//now i need to make a for loop to display the random
for (var i = 0; i < storeLocations.length; i++){
  if (j === 0){
    var storeEl = document.getElementById('test');
    var storeName = document.createElement('li');
    storeName.textContent = storeLocations[index].htmlId;
    storeEl.appendChild(storeName);
  }
  for (var j = 0; j < timeSlot.length ; j++) {
    var userElement = document.createElement('li');
    var displayHourAndAvg = timeSlot[j] + cookiesPerHour(i);
    console.log(displayHourAndAvg);
    userElement.textContent += displayHourAndAvg;
    sectionEl.appendChild(userElement);
  }
}

// userElement.setAttribute('id', 'test');

// var userElement = document.createElement('h1'); //Step 1 (create element), userElement = <h1></h1> now
// userElement.setAttribute('id', 'first-user-heading'); //Step 2 (assign attributes), now userElement = <h1 id="first-user-heading"></h1>
// userElement.textContent = myUser.FullName;
// var sectionEl = document.getElementById('main-content'); // (get a reference to the parent), now, <section id = "main-content"></section>
// sectionEl.appendChild(userElement); //Step 3 (hand it to the DOM), now
//
// var userHeadingEl = document.getElementById('first-user-heading');
// userHeadingEl.textContent = myUser.FullName;
