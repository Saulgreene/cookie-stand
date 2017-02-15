'use strict';

var pikeEl = document.getElementById('first-and-pike');
var seatacEl = document.getElementById('seatac-airport');
var seattleCenterEl = document.getElementById('seattle-center');
var capHillEl = document.getElementById('capitol-hill');
var alkiEl = document.getElementById('alki');

var elements = [pikeEl, seatacEl, seattleCenterEl, capHillEl, alkiEl];
var store = [firstAndPike, seaTac, seattleCenter, capHill, alki];

// this function should loop through the stores... i think i need to put all the objects into an array so i can call each one at .displaycookies rather than having to make the function for each one
function showMeTheTimes (){
  for (var i = 0; i < store.length; i++){
    console.log(store[i].displayCookies);
  }
}
var timeSlot = ['6 am: ', '7 am: ', '8 am: ', '9 am: ', '10 am: ', '11 am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ', '6 pm: ', '7 pm: ', '8 pm: '];

//----------------First and Pike ---------------------
var firstAndPike = new Object();
firstAndPike.name = 'First and Pike';
firstAndPike.min = 23;
firstAndPike.max = 65;
firstAndPike.avg = 6.3;
firstAndPike.cph = function (){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( firstAndPike.max - firstAndPike.min + 1) + firstAndPike.min)) * firstAndPike.avg);
  return avgCookiesPerHour;
};
firstAndPike.displayCookies = function(){
  for (var j = 0; j < timeSlot.length ; j++) {
    if (j === 0){
      console.log(firstAndPike.name);
    };
    var userElement = document.createElement('li');
    var displayHourAndAvg = timeSlot[j] + firstAndPike.cph();
    console.log(displayHourAndAvg);
    userElement.textContent += displayHourAndAvg;// when i comment out these two lines it logs to the console
    pikeEl.appendChild(userElement);
  }
};
//logs to test that its working
console.log(firstAndPike.displayCookies());

//---------------SeaTac------------------------------------

var seaTac = new Object();
seaTac.name = 'SeaTac';
seaTac.min = 3;
seaTac.max = 24;
seaTac.avg = 1.2;
seaTac.cph = function (){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( seaTac.max - seaTac.min + 1) + seaTac.min)) * seaTac.avg);
  return avgCookiesPerHour;
};
seaTac.displayCookies = function(){
  for (var j = 0; j < timeSlot.length ; j++) {
    if (j === 0){
      console.log(seaTac.name);
    };
    var userElement = document.createElement('li');
    var displayHourAndAvg = timeSlot[j] + seaTac.cph();
    console.log(displayHourAndAvg);
    userElement.textContent += displayHourAndAvg;
    seatacEl.appendChild(userElement);
  }
};
//logs to test that its working
console.log(seaTac.displayCookies());
//logs to test that its working
// console.log(seaTac.name); console.log(seaTac.min); console.log(seaTac.max); console.log(seaTac.avg); console.log(seaTac.cph());

//---------------------Seattle Center-----------------------

var seattleCenter = new Object();
seattleCenter.name = 'Seattle Center';
seattleCenter.min = 3;
seattleCenter.max = 24;
seattleCenter.avg = 1.2;
seattleCenter.cph = function (){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( seattleCenter.max - seattleCenter.min + 1) + seattleCenter.min)) * seattleCenter.avg);
  return avgCookiesPerHour;
};
seattleCenter.displayCookies = function(){
  for (var j = 0; j < timeSlot.length ; j++) {
    if (j === 0){
      console.log(firstAndPike.name);
    }
    var userElement = document.createElement('li');
    var displayHourAndAvg = timeSlot[j] + seattleCenter.cph();
    console.log(displayHourAndAvg);
    userElement.textContent += displayHourAndAvg;
    seattleCenterEl.appendChild(userElement);
  }
};
//logs to test that its working
console.log(seattleCenter.displayCookies());

//----------------Capitol Hill------------------------------

var capHill = new Object();
capHill.name = 'Capitol Hill';
capHill.min = 3;
capHill.max = 24;
capHill.avg = 1.2;
capHill.cph = function (){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( capHill.max - capHill.min + 1) + capHill.min)) * capHill.avg);
  return avgCookiesPerHour;
};
capHill.displayCookies = function(){
  for (var j = 0; j < timeSlot.length ; j++) {
    var userElement = document.createElement('li');
    var displayHourAndAvg = timeSlot[j] + capHill.cph();
    console.log(displayHourAndAvg);
    userElement.textContent += displayHourAndAvg;
    capHillEl.appendChild(userElement);
  }
};
//logs to test that its working
console.log(capHill.displayCookies());
//logs to test that its working
// console.log(capHill.name); console.log(capHill.min); console.log(capHill.max); console.log(capHill.avg); console.log(capHill.cph());

//-------------------Alki-----------------------------------

var alki = new Object();
alki.name = 'Alki';
alki.min = 3;
alki.max = 24;
alki.avg = 1.2;
alki.cph = function (){
  var avgCookiesPerHour = Math.ceil((Math.floor(Math.random() * ( alki.max - alki.min + 1) + alki.min)) * alki.avg);
  return avgCookiesPerHour;
};
alki.displayCookies = function(){
  for (var j = 0; j < timeSlot.length ; j++) {
    var userElement = document.createElement('li');
    var displayHourAndAvg = timeSlot[j] + alki.cph();
    console.log(displayHourAndAvg);
    userElement.textContent += displayHourAndAvg;
    alkiEl.appendChild(userElement);
  }
};
//logs to test that its working
console.log(alki.displayCookies());
//logs to test that its working
// console.log(alki.name); console.log(alki.min); console.log(alki.max); console.log(alki.avg); console.log(alki.cph());
