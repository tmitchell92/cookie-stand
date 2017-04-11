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
  var pikeCookies = avgFirstandPike * firstandPike.avgCookies;
  firstandPike.numOfCookies.push(pikeCookies);
}

var seaTacAirport = {
  min:[3],
  max:[24],
  avgCookies:[1.2],
  numOfCookies:[],
}

for (var i = 0; i < 15; i++) {
  var avgseaTac = getRandomInt(seaTacAirport.min,seaTacAirport.max);
  var seaTacCookies = avgseaTac * seaTacAirport.avgCookies;
  seaTacAirport.numOfCookies.push(seaTacCookies);
}

var seattleCenter = {
  min:[11],
  max:[38],
  avgCookies:[3.7],
  numOfCookies:[],
}

for (var i = 0; i < 15; i++) {
  var avgseaCenter = getRandomInt(seattleCenter.min,seattleCenter.max);
  var seattleCenterCookies = avgseaCenter * seattleCenter.avgCookies;
  seattleCenter.numOfCookies.push(seattleCenterCookies);
}
var capitolHill = {
  min:[20],
  max:[38],
  avgCookies:[2.3],
  numOfCookies:[],
}

for (var i = 0; i < 15; i++) {
  var avgcapHill = getRandomInt(capitolHill.min,capitolHill.max);
  var capitolHillCookies = avgcapHill * capitolHill.avgCookies;
  capitolHill.numOfCookies.push(capitolHillCookies);

}
var alki = {
  min:[2],
  max:[16],
  avgCookies:[4.6],
  numOfCookies:[],
}

for (var i = 0; i < 15; i++) {
  var avgalki = getRandomInt(alki.min,alki.max);
  var alkiCookies = avgalki * alki.avgCookies;
  alki.numOfCookies.push(alkiCookies);
}

var totalcookies = 0;
var firstandPikeUl = document.getElementById('cookies');
var firstandPikeLi;
for (var i = 0; i < firstandPike.numOfCookies.length; i++){
  totalcookies = totalcookies + firstandPike.numOfCookies[i];
  firstandPikeLi = document.createElement('li');
  firstandPikeLi.setAttribute('class','firstandPike.numOfCookies');
  firstandPikeLi.textContent = hours[i] + ' ' + firstandPike.numOfCookies[i].toFixed(2) + ' cookies.'
  firstandPikeUl.appendChild(firstandPikeLi);
}
cookiesLi.textContent = 'Total number of cookies: ' + totalcookies
