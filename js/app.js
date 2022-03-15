'use strict'

let seattle = document.getElementById('seattle');

let hoursOperation = ['6am', '7am', '8am' '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm']
function randomCustomer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let seattle = {
  location:: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  cookiesBought: [],
  customersPerHour: function(){
    for(let i = 0; i < hoursOperation.length; i++){
      this.cookiesBought.push(Math.ceil(this.customersPerHour() * this.avgCookies));
    }
  },

// DOM MANIPULATION -- no idea what i'm doing . send help

render: function(){
  let listOne = document.createElement('ul');
  cookiesSold.appendChild(listOne);

  let articleElem = document.createElement('article');
  articleElem.textContent = 
  articleElm.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem); 

  for(let i = 0; i < hoursOperation.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`
    ulElem.appendChild(liElem)
  };

seattle.customersPerHour();
seattle.render();
