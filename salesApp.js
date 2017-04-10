'use strict'

var firstandPike = {
  min:[23],
  max:[65],
  avg_cookies:[6.3],
  }

function getRandomInt(min,max) {
  min= Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * max-min) + min;
}

var avg_cookies = (getRandomInt(0,100))
