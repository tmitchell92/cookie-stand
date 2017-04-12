'use strict'

/*This function creates hours and gives them 'am' or 'pm'. */
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

/*This function creates a random number within the range given. */
function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var total = Math.floor(Math.random() * (max - min) + min);
  return Math.floor(total)
}

/* This is a constructor to create a new object per store */
function StoreName(name,min,max,avgCookies){
  this.title = name
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.starthour = 8;
  this.closehour = 20;
  this.numOfCookies = [];
}

/* This uses the constructor to create stores, and an array to store the stores. */
var pikeStore = new StoreName('1st and Pike',23,65,6.3);
var airportStore = new StoreName('Seattle Tacoma Airport',3,24,1.2);
var centerStore = new StoreName('Seattle Center', 11,38,3.7);
var capitolStore = new StoreName('Seattle Capitol',20,38,2.3);
var alkiStore = new StoreName('Alki', 2,16,4.6);
var stores = [pikeStore, airportStore, centerStore, capitolStore, alkiStore]

// Stores.prototype.addLocation = function(name,min,max,avgCookies){
//   var locationName = new StoreName(name,min,max,avgCookies);
//   this.stores.push(locationName);
// }
/* This function generates the number of cookies per hour */
function GenStoreCookies(stores){
  for (var i = 0; i < 15; i++){
    var cookiesPerHour = Math.floor(stores.avgCookies * getRandomInt(stores.min,stores.max));
    stores.numOfCookies.push(cookiesPerHour);
  }
}

/* This generates the number of cookies per hour for each store */
for (var i = 0; i < stores.length; i++){
  var newCookiesHour = GenStoreCookies(stores[i])
  stores[i].numOfCookies.push(newCookiesHour)
}

/* This creates the totals of each hour. */
var totals = [];
for (var i = 0; i < 15; i++){
  totals[i] = stores[0].numOfCookies[i] + stores[1].numOfCookies[i] + stores[2].numOfCookies[i] + stores[3].numOfCookies[i] + stores[4].numOfCookies[i];
}

/*This creates empty cell for the heading and the table itself.*/
var table = document.createElement('table');
var tableHead= document.createElement('th');
var th = document.createElement('th');
var txt = document.createTextNode(' ');
th.appendChild(txt);
table.append(th);

/*This creates the hours cells for the heading */
StoreName.prototype.tableHeadCreate = function (){
  for (var i = 0; i < 15; i++){
    var th = document.createElement('th');
    var txt = document.createTextNode(hours(i + 6));
    th.appendChild(txt);
    table.append(th);
  }
}

/* This creates the rows for the table and appends them. */
StoreName.prototype.rowCreate = function (){
  var text4 = document.createTextNode('');
  table.appendChild(text4);
  var tr = document.createElement('tr');
  var text1 = document.createTextNode(this.title);
  var td1 = document.createElement('td');
  td1.appendChild(text1);
  tr.appendChild(td1);
  for (var i = 0; i < 15; i++){
    var td2 = document.createElement('td');
    var text2 = document.createTextNode(this.numOfCookies[i]);
    td2.appendChild(text2);
    tr.appendChild(td2);
    table.append(tr);
  }
  document.body.appendChild(table);
}

pikeStore.tableHeadCreate();
pikeStore.rowCreate();
airportStore.rowCreate();
centerStore.rowCreate();
capitolStore.rowCreate();
alkiStore.rowCreate();

// This creates the totals row.
var td4 = document.createElement('td')
var text4 = document.createTextNode('Totals')
td4.appendChild(text4)
table.appendChild(td4)
for (i=0; i < 15; i++){
var td3 = document.createElement('td')
var text3 = document.createTextNode(totals[i])
td3.appendChild(text3)
table.appendChild(td3)
}

function handleLocationCreateSubmit(event){
  // stop the browser from reloading
  event.preventDefault();

  // event.target is always whatever element you added the EventListener to ('aka productCreateFrom')
  var form = event.target;

  // grab the values
  var locationName = form.locationName.value;
  var minCustomers = form.locationMinCustomers.value;
  var maxCustomers = form.locationMaxCustomers.value;
  var avgCookies = form.locationAvgCookiesSold.value;

  // then clear the values
  form.locationName.value = '';
  form.locationMinCustomers.value = '';
  form.locationMaxCustomers.value = '';
  form.locationAvgCookiesSold.value = '';

/* This is creating a new store out of the inputs given from user */
  var storeName = window[locationName,minCustomers,maxCustomers,avgCookies];
  var newLocation = new StoreName(locationName,minCustomers,maxCustomers,avgCookies);
  console.log(newLocation)
  GenStoreCookies(newLocation)
  newLocation.rowCreate()
}

var locationCreateForm = document.getElementById('location-create');
locationCreateForm.addEventListener('submit', handleLocationCreateSubmit)
