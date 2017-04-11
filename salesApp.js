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
var firstandPikeUl = document.getElementById('firstandPike');
var firstandPikeLi;
for (var i = 0; i < 15; i++){
  totalcookies = totalcookies + firstandPike.numOfCookies[i];
  firstandPikeLi = document.createElement('li');
  firstandPikeLi.setAttribute('class','firstandPike.numOfCookies');
  firstandPikeLi.textContent = hours[i] + ' ' + firstandPike.numOfCookies[i].toFixed(2) + ' cookies.'
  firstandPikeUl.appendChild(firstandPikeLi);
}
firstandPikeLi.textContent = 'Total number of cookies: ' + totalcookies

totalcookies = 0;
var seaTacAirportUl = document.getElementById('seaTacAirport');
var seaTacAirportLi;
for (var i = 0; i < 15; i++){
  totalcookies = totalcookies + seaTacAirport.numOfCookies[i];
  seaTacAirportLi = document.createElement('li');
  seaTacAirportLi.setAttribute('class','firstandPike.numOfCookies');
  seaTacAirportLi.textContent = hours[i] + ' ' + seaTacAirport.numOfCookies[i].toFixed(2) + ' cookies.'
  seaTacAirportUl.appendChild(seaTacAirportLi);
}
seaTacAirportLi.textContent = 'Total number of cookies: ' + totalcookies

totalcookies = 0;
var seattleCenterUl = document.getElementById('seattleCenter');
var seattleCenterLi;
for (var i = 0; i < 15; i++){
  totalcookies = totalcookies + seattleCenter.numOfCookies[i];
  seattleCenterLi = document.createElement('li');
  seattleCenterLi.setAttribute('class','seattleCenter.numOfCookies');
  seattleCenterLi.textContent = hours[i] + ' ' + seattleCenter.numOfCookies[i].toFixed(2) + ' cookies.'
  seattleCenterUl.appendChild(seattleCenterLi);
}
seattleCenterLi.textContent = 'Total number of cookies: ' + totalcookies

totalcookies = 0;
var capitolHillUl = document.getElementById('capitolHill');
var capitolHillLi;
for (var i = 0; i < 15; i++){
  totalcookies = totalcookies + capitolHill.numOfCookies[i];
  capitolHillLi = document.createElement('li');
  capitolHillLi.setAttribute('class','capitolHill.numOfCookies');
  capitolHillLi.textContent = hours[i] + ' ' + capitolHill.numOfCookies[i].toFixed(2) + ' cookies.'
  capitolHillUl.appendChild(capitolHillLi);
}
capitolHillLi.textContent = 'Total number of cookies: ' + totalcookies

totalcookies = 0;
var alkiUl = document.getElementById('alki');
var alkiLi;
for (var i = 0; i < 15; i++){
  totalcookies = totalcookies + alki.numOfCookies[i];
  alkiLi = document.createElement('li');
  alkiLi.setAttribute('class','alki.numOfCookies');
  alkiLi.textContent = hours[i] + ' ' + alki.numOfCookies[i].toFixed(2) + ' cookies.'
  alkiUl.appendChild(alkiLi);
}
alkiLi.textContent = 'Total number of cookies: ' + totalcookies
