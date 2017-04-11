'use strict'

function hours(hour){
  if (hour == 0){
    hour = '12am'
  }
  else if (hour < 12){
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
  return Math.round(Math.random() * (max - min) + min);
}

function StoreName(name,min,max,avgCookies){
  this.title = name
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.starthour = 8;
  this.closehour = 20;
  this.numOfCookies = [];
}

var pikeStore = new StoreName('1st and Pike',23,65,6.3);
var airportStore = new StoreName('Seattle Tacoma Airport',3,24,1.2);
var centerStore = new StoreName('Seattle Center', 11,38,3.7);
var capitolStore = new StoreName('Seattle Capitol',20,38,2.3);
var alkiStore = new StoreName('Alki', 2,16,4.6);

var stores = [pikeStore, airportStore, centerStore, capitolStore, alkiStore]

function GenStoreCookies(stores){
  for (var i = 0; i < 15; i++){
    var cookiesPerHour = stores.avgCookies * getRandomInt(stores.min,stores.max);
    stores.numOfCookies.push(cookiesPerHour);
  }
}
for (var i = 0; i < stores.length; i++){
  var newCookiesHour = GenStoreCookies(stores[i])
  stores[i].numOfCookies.push(newCookiesHour)

}

// var theTable = document.getElementById('tableId');
// for( var x = 0; x < theTable.tHead.rows.length; x++ ) {
//   var y = document.createElement('td');
//   y.appendChild(document.createTextNode('Thead cell text'));
//   theTable.tHead.rows[x].appendChild(y);


StoreName.prototype.createRow = function (){
  var table = document.createElement('table');
  for (var i = 0; i < 15; i++){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var hour = hours(i + 6)
    var text1 = document.createTextNode(hour);
    var text2 = document.createTextNode(this.numOfCookies[i]);

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
  }
  document.body.appendChild(table);
}
pikeStore.createRow();
airportStore.createRow();
