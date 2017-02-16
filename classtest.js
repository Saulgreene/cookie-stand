'use strict';
var timeSlot = {
  label: 'Times: ',
  times: ['6am|', '7am|', '8am|', '9am|', '10am|', '11am|', '12pm|', '1pm|', '2pm|', '3pm|', '4pm|', '5pm|', '6pm|', '7pm|'],
  totalLabel: 'Total|'
};
var pikePlace = new CookieStore ('First and Pike', 23, 65, 6.3);
var seaTac = new CookieStore ('SeaTac', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);
  //-- array of the stores for easy access and pulling the info---//
var stores = [pikePlace, seaTac, seattleCenter, capHill, alki];
var colTotals = [];
var totalName = 'Total: ';
  //---starts the total at zero so that we can calculate totals within the for loops. resetting to zero allows us to differentiate different rows---//
var total = 0;
  //---Creates the table element in the html that we insert into-----//
var tableEl = document.createElement('table');
document.body.appendChild(tableEl);

//------------------------FUNCTIONS----------------------------//
//---------------function to calculate total cookies per hour for each store------

//------------???? what is this again ?????-------------//

// -----------------function/constructor to create new cookie store objects.(use of the .this method here)-------//
function CookieStore(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
}
//--------prototype adding the ability to get the average cookies per hour for the constructor
CookieStore.prototype.getAvgCookieCount = function (){
  var range = this.maxCustomers - this.minCustomers;
  return Math.floor(Math.random() * range + this.minCustomers);
};
CookieStore.prototype.renderRow = function() {
  var rowEl = document.createElement('tr');
  var nameEl = document.createElement('th');
  nameEl.textContent = this.name + ':';
  rowEl.appendChild(nameEl);

//--for loop to produce cph stats for each time slot for this row (it is inside the store loop so it will go 16 times five different times....)
  for(var j = 0; j < timeSlot.times.length ; j++){
    var storeRandomCPH = this.getAvgCookieCount();
    var timeEl = document.createElement('td');
    timeEl.textContent = storeRandomCPH;
    rowEl.appendChild(timeEl);
    total += storeRandomCPH;
    this.hourlySales.push(storeRandomCPH);
    console.log(this.hourlySales);
  }
  //---render to dom the total in a column---//
  tableEl.appendChild(rowEl);
  var totalEl = document.createElement('td');
  totalEl.textContent = total;
  rowEl.appendChild(totalEl);
  total = 0;
};
var colTotalAdded = document.createElement('tr');
colTotalAdded.textContent = colTotals;
tableEl.appendChild(colTotalAdded);


function columnTotals(){
  colTotals = [];
  for (var ii = 0; ii < timeSlot.times.length ; ii++){
    var allStoreHourlyTotal = 0;
    for(var jj = 0; jj < stores.length; jj++){
      allStoreHourlyTotal += stores[jj].hourlySales[ii];
    }
    colTotals.push(allStoreHourlyTotal);
  };
  console.log(colTotals);
  var totalTotal = 0;
  for (var v = 0; v < colTotals.length; v++){
    totalTotal += colTotals[v];
  }
  colTotals.push(totalTotal);
}

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
  // store.renderRow();
  console.log(stores);
  console.log(store);
  console.log('store.getAvgCookieCount: ', store.getAvgCookieCount());
  removeTotalsRow();
  drawTable();
};


//-------------------------VARIABLES-------------------------//
//---timeslot to loop through for rendering to dom and the length of calculations--//

//------creating a row item that ends up being labled 'times' on the table-------//
function tableHeader() {
  var rowOneEl = document.createElement('tr');
  tableEl.appendChild(rowOneEl);
  var labelTotalOnTable = document.createElement('th');
  labelTotalOnTable.textContent = timeSlot.label;
  rowOneEl.appendChild(labelTotalOnTable);
  //-----------for loop to run through the time label-----------???????????????????
  for (var k = 0; k < timeSlot.times.length ; k++){
    var timeLabelEl = document.createElement('th');
    var currentTime = timeSlot.times;
    timeLabelEl.textContent = currentTime[k];
    rowOneEl.appendChild(timeLabelEl);
  };
  var totalHead = document.createElement('th');
  totalHead.textContent = timeSlot.totalLabel;
  rowOneEl.appendChild(totalHead);
}



//---------for loop to get through the different stores--------------//
function drawAllStoreRows(){
  for(var i = 0; i < stores.length; i++){
    stores[i].renderRow();
  };
}
function drawColumnTotals(){
  var tableRow = document.createElement('tr');
  tableRow.setAttribute('id', 'totalRow');
  var tableHead = document.createElement('th');
  tableHead.textContent = totalName;
  tableRow.appendChild(tableHead);
  for (var m = 0; m < colTotals.length; m++){
    var tableData = document.createElement('td');
    tableData.textContent = colTotals[m];
    tableRow.appendChild(tableData);
  }
  tableEl.appendChild(tableRow);
}
function removeTotalsRow(){
  var remover = document.getElementById('totalRow');
  remover.remove();
}

var totalRowEl = document.createElement('td');
totalRowEl.textContent = colTotals;
tableEl.appendChild(totalRowEl);
function totalStoresHour(){
  var footerEl = document.createElement('tr');
  var totalStoresHourAdded = document.createElement('th');
  totalStoresHourAdded.textContent = totalName;
  footerEl.appendChild(totalStoresHourAdded);
}
function drawTable(){
  tableEl.textContent = '';
  tableHeader();
  drawAllStoreRows();
  columnTotals();
  drawColumnTotals();
  totalStoresHour();
  // removeTotalsRow();

}
drawTable();


//--------NOTES------------//
// var userElement = document.createElement('h1'); //Step 1 (create element), userElement = <h1></h1> now
// userElement.setAttribute('id', 'first-user-heading'); //Step 2 (assign attributes), now userElement = <h1 id="first-user-heading"></h1>
// userElement.textContent = myUser.FullName;
// var sectionEl = document.getElementById('main-content'); // (get a reference to the parent), now, <section id = "main-content"></section>
// sectionEl.appendChild(userElement); //Step 3 (hand it to the DOM), now
//---VV supposed easier way VV---//
// var userHeadingEl = document.getElementById('first-user-heading');
// userHeadingEl.textContent = myUser.FullName;
