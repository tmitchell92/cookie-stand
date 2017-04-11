'use strict'

function hours(hour){
  if (hour == 0){
    hour = '12am'
  }
  else if (hour < 11){
    hour = hour + 'am'
  }
  else if (hour == 12){
    hour = '12pm'
  }
  else {
    hour = (hour - 12) + 'pm'
  }
  return hour
}


function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

function StoreName(min,max,avgCookies){
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.starthour = 8;
  this.closehour = 20;
  this.numOfCookies = [];
}

var pikeStore = new StoreName(23,65,6.3);
var airportStore = new StoreName(3,24,1.2);
var centerStore = new StoreName(11,38,3.7);
var capitolStore = new StoreName(20,38,2.3);
var alkiStore = new StoreName(2,16,4.6);

var stores = [pikeStore, airportStore, centerStore, capitolStore, alkiStore]

function GenStoreCookies(stores){
  for (var i = 0; i < 14; i++){
    var cookiesPerHour = stores.avgCookies * getRandomInt(stores.min,stores.max);
    stores.numOfCookies.push(cookiesPerHour);
}
}
for (var i = 0; i < stores.length; i++){
  var newCookiesHour = GenStoreCookies(stores[i])
  stores[i].numOfCookies.push(newCookiesHour)
  console.log(stores[i], stores[i].numOfCookies)
}
