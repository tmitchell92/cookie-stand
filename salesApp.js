'use strict'

var firstandPike = {
  min:[23],
  max:[65],
  avgCookies:[6.3],
  numOfCookies:[]
  }

function getRandomInt(min,max) {
  min= Math.ceil(23);
  max = Math.floor(65);
  return Math.floor(Math.random() * (max-min)) + min;
}

for (var i = 0; i<14; i++) {
  var avgFirstandPike = getRandomInt(firstandPike.min,firstandPike.max);
  console.log('Random number of customers,', avgFirstandPike)
  var pikeCookies = avgFirstandPike * firstandPike.avgCookies;
  console.log(i + 6,'am, ', 'Avg cookies per hour', pikeCookies)
  firstandPike.numOfCookies.push(pikeCookies)
}




















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
