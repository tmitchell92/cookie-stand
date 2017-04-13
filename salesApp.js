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
function totalsCreate(){
  totals = []
  for (var i = 0; i < 15; i++){
    var hourTotals = 0
    for(var x = 0; x < stores.length; x++)
    hourTotals += stores[x].numOfCookies[i]
    totals.push(hourTotals)
  }
  console.log(totals)
}


/*This creates empty cell for the heading and the table itself.*/
var table = document.createElement('table');
var tableHead= document.createElement('thead');
var tableBody = document.createElement('tbody');
var tableFoot = document.createElement('tfoot');
var tr = document.createElement('tr')
var th = document.createElement('th');
var txt = document.createTextNode(' ');
document.body.appendChild(table);
table.appendChild(tableHead)
table.appendChild(tableBody)
table.appendChild(tableFoot)
tableHead.appendChild(tr)
th.innerText = txt
tr.appendChild(th)
/*This creates the hours cells for the heading */
// function tableHeadCreate(){
  for (var i = 0; i < 15; i++){
    var th = document.createElement('th');
    var txt = document.createTextNode(hours(i + 6));
    th.appendChild(txt);
    tr.append(th);
  }

/* This creates the rows for the table and appends them. */
StoreName.prototype.rowCreate = function (){
  // var text4 = document.createTextNode('');
  // table.appendChild(text4);
  var tbody = document.getElementsByTagName('tbody')[0];
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var txt = document.createTextNode(this.title);
  td.appendChild(txt);
  tr.appendChild(td);
  tbody.appendChild(tr);
  for (var i = 0; i < 15; i++){
    td = document.createElement('td');
    txt = document.createTextNode(this.numOfCookies[i]);
    td.appendChild(txt);
    tr.appendChild(td);
  }
}


function tableCreate(){
  for (var i = 0; i < stores.length; i++)
  stores[i].rowCreate();
}


// This creates the totals row.
function totalsRowCreate(){
  var tfoot= document.getElementsByTagName('tfoot')[0];
  while (tfoot.firstChild){
    tfoot.removeChild(tfoot.firstChild)
  };
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var txt = document.createTextNode('Totals');
  td.appendChild(txt);
  tr.appendChild(td);
  tfoot.appendChild(tr);
  for (i=0; i < 15; i++){
  var td = document.createElement('td');
  var txt = document.createTextNode(totals[i]);
  td.appendChild(txt);
  tr.appendChild(td);
  }
}

// tableHeadCreate();
tableCreate()
totalsCreate()
totalsRowCreate()
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
function clearTable(){
  form.locationName.value = '';
  form.locationMinCustomers.value = '';
  form.locationMaxCustomers.value = '';
  form.locationAvgCookiesSold.value = '';
}
clearTable()
/* This is creating a new store out of the inputs given from user */
  var storeName = window[locationName,minCustomers,maxCustomers,avgCookies];
  var newLocation = new StoreName(locationName,minCustomers,maxCustomers,avgCookies);
  stores.push(newLocation)
  console.log(newLocation)
  GenStoreCookies(newLocation)
  totalsCreate()
  newLocation.rowCreate()
  totalsRowCreate()
  clearTable()
}
var locationCreateForm = document.getElementById('location-create');
locationCreateForm.addEventListener('submit', handleLocationCreateSubmit)
