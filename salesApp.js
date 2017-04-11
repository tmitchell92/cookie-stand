'use strict'

function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
console.log(pikeStore)
