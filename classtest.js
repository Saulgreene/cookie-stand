'use strict';


//------------------------FUNCTIONS----------------------------//
//---------------function to calculate total cookies per hour for each store------

//------------???? what is this again ?????-------------//

// -----------------function to create new cookie store objects.(use of the .this method here)-------//
function CookieStore(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
}
CookieStore.prototype.getAvgCookieCount = function (){
  var range = this.maxCustomers - this.minCustomers;
  return Math.floor(Math.random() * range + this.minCustomers);
};
console.log('------- EVENT LISTENERS--------');
//---linking the js to the form tag and id on html---//
var storeFormEl = document.getElementById('new-store-form');
//---adding an event listener that when submit is executed it runs "handleSubmit" function
storeFormEl.addEventListener('submit', handleSubmit);
//---...---//
function handleSubmit(event){
  event.preventDefault();//---what does this do??---//
  event.stopPropagation();//---what does this do??---//
  var storeName = event.target.cookieStoreName.value;
  var minCust = parseInt(event.target.minCustomersPerHour.value);
  var maxCust = parseInt(event.target.maxCustomersPerHour.value);
  var avgCookies = parseFloat(event.target.avgCookiesPerCustomer.value);
  // console.log('User Pressed Submit Button on Form');
  var store = new CookieStore(storeName, minCust, maxCust, avgCookies);
  stores.push(store);
  console.log(stores);
  console.log(store);
  console.log('store.getAvgCookieCount: ', store.getAvgCookieCount());
}

//-------------------------VARIABLES-------------------------//
//---timeslot to loop through for rendering to dom and the length of calculations--//
var timeSlot = {
  label: 'Times: ',
  times: ['6am|', '7am|', '8am|', '9am|', '10am|', '11am|', '12pm|', '1pm|', '2pm|', '3pm|', '4pm|', '5pm|', '6pm|', '7pm|'],
  totalLabel: 'Total|'};
//---New store constructors--//
var pikePlace = new CookieStore ('First and Pike:', 23, 65, 6.3);
var seaTac = new CookieStore ('SeaTac:', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center:', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill:', 20, 38, 2.3);
var alki = new CookieStore('Alki:', 2, 16, 4.6);
//-- array of the stores for easy access and pulling the info---//
var stores = [pikePlace, seaTac, seattleCenter, capHill, alki];
//---starts the total at zero so that we can calculate totals within the for loops. resetting to zero allows us to differentiate different rows---//
var total = 0;
//---Creates the table element in the html that we insert into-----//
var tableEl = document.createElement('table');

//------creating a row item that ends up being labled 'times' on the table-------//
var rowOneEl = document.createElement('tr');
var anything = document.createElement('th');
anything.textContent = timeSlot.label;
rowOneEl.appendChild(anything);

//-----------for loop to run through the time label-----------???????????????????
for (var k = 0; k < timeSlot.times.length ; k++){
  var timeLabelEl = document.createElement('th');
  var currentTime = timeSlot.times;
  timeLabelEl.textContent = currentTime[k];
  rowOneEl.appendChild(timeLabelEl);
};

//--- creates a row item that is labled total:---//
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
    timeEl.textContent = currentStore.getAvgCookieCount();
    rowEl.appendChild(timeEl);
    total += currentStore.getAvgCookieCount();
  }
  //---render to dom the total in a column---//
  tableEl.appendChild(rowEl);
  var totalEl = document.createElement('td');
  totalEl.textContent = total;
  rowEl.appendChild(totalEl);
  total = 0;
};

document.body.appendChild(tableEl);

//--------NOTES------------//
// var userElement = document.createElement('h1'); //Step 1 (create element), userElement = <h1></h1> now
// userElement.setAttribute('id', 'first-user-heading'); //Step 2 (assign attributes), now userElement = <h1 id="first-user-heading"></h1>
// userElement.textContent = myUser.FullName;
// var sectionEl = document.getElementById('main-content'); // (get a reference to the parent), now, <section id = "main-content"></section>
// sectionEl.appendChild(userElement); //Step 3 (hand it to the DOM), now
//---VV supposed easier way VV---//
// var userHeadingEl = document.getElementById('first-user-heading');
// userHeadingEl.textContent = myUser.FullName;
