'use strict'

var firstandPike = {
  min:[23],
  max:[65],
  avgCookies:[6.3],
  numOfCookies:[]
  }

function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}
var hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12am:',
'1am:','2am:','3am:','4am:','5am:','6am:','7am:','8am:']

for (var i = 0; i < 15; i++) {
  var avgFirstandPike = getRandomInt(firstandPike.min,firstandPike.max);
  // console.log('Random number of customers,', avgFirstandPike);
  var pikeCookies = avgFirstandPike * firstandPike.avgCookies;
  // Math.ceil(pikeCookies)
  // console.log(i + 6,'am, ', 'Avg cookies per hour', pikeCookies);
  firstandPike.numOfCookies.push(pikeCookies);
}
var totalcookies = 0;
for (var i = 0; i< firstandPike.numOfCookies.length;i++){
  totalcookies = totalcookies + firstandPike.numOfCookies[i];
}

var cookiesUl = document.getElementById('cookies');
var cookiesLi;
for (var i = 0; i < firstandPike.numOfCookies.length; i++){
  cookiesLi = document.createElement('li');
  cookiesLi.setAttribute('class','firstandPike.numOfCookies');
  cookiesLi.textContent = hours[i] + ' ' + firstandPike.numOfCookies[i];
  cookiesUl.appendChild(cookiesLi);
}
cookiesLi.textContent = 'Total number of cookies: ' + totalcookies



















var seaTacAirport = {
  min:[3],
  max:[24],
  avgCookies:[1.2],
}

var seattleCenter = {
  min:[11],
  max:[38],
  avgCookies:[3.7],
}

var capitolHill = {
  min:[20],
  max:[38],
  avgCookies:[2.3],
}

var alki = {
  min:[2],
  max:[16],
  avgCookies:[4.6],
}
