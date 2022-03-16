'use strict';

let hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];

function randomCustomer(min, max){
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

let jsRef = document.getElementById('cookie-data');

let fishCakes = [];

function CookieData(location, minCustomer, maxCustomer, avgCookies) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.cookiesBought = [];
  fishCakes.push(this);
}

CookieData.prototype.cookiesPerHour = function(){
  for(let i = 0; i < hoursOperation.length; i++){
    this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
    this.totalCookies = this.totalCookies + this.cookiesBought[i];
  }
},

CookieData.prototype.render = function(){
  this.cookiesPerHour();
  let tableElem = document.createElement('table');
  jsRef.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = this.location;
  row1.appendChild(th1Elem);

  for (let i = 0; i < hoursOperation.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiesBought[i]}`;
    row1.appendChild(tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = `Total: ${this.totalCookies} cookies`;
  row1.appendChild(tdElem);
};

new CookieData('Seattle', 23, 65, 6.3);
new CookieData('Tokyo', 3, 24, 1.2);
new CookieData('Dubai', 11, 38, 3.7);
new CookieData('Paris', 20, 38, 2.3);
new CookieData('Lima', 2, 16, 4.6);

function theadHeading(){
  let theadElem = document.createElement('thead');
  jsRef.appendChild(theadElem);
  let thElem = document.createElement('th');
  thElem.textContent = '';
  thElem.setAttribute('scope', 'column');
  theadElem.appendChild(thElem);

  for(let i = 0; i < hoursOperation.length; i++){
    let thElem = document.createElement('th');
    thElem.textContent = `${hoursOperation[i]}`;
    theadElem.appendChild(thElem);
  }

  thElem = document.createElement('th');
  thElem.textContent = 'Daily Total';
  thElem.setAttribute('scope', 'column');
  theadElem.appendChild(thElem);
}

function renderAllCookies(){
  for(let i = 0; i < fishCakes.length; i++){
    fishCakes[i].cookiesPerHour();
    fishCakes[i].render();
  }
}

renderAllCookies();
theadHeading();

// ******** YESTERDAY ********

// let seattleStore = {
//   location: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookies: 6.3,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookiesPerHour: function(){
//     for(let i = 0; i < hoursOperation.length; i++){
//       this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
//       this.totalCookies = this.totalCookies + this.cookiesBought[i];
//     }
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let ulElem = document.getElementById('seattle');

//     for (let i = 0; i < hoursOperation.length; i++){
//       let liElem = document.createElement('li');
//       liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies.`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total ${this.totalCookies} cookies!`;
//     ulElem.appendChild(liTotal);
//   }
// };
// seattleStore.render();

// ///TOKYO

// let tokyoStore = {
//   location: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookies: 1.2,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookiesPerHour: function(){
//     for(let i = 0; i < hoursOperation.length; i++){
//       this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
//       this.totalCookies = this.totalCookies + this.cookiesBought[i];
//     }
//     console.log(this.cookiesBought);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let ulElem = document.getElementById('tokyo'); //referencing id tag seattle, now use variable ulElem

//     for (let i = 0; i < hoursOperation.length; i++){
//       let liElem = document.createElement('li');
//       liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };
// tokyoStore.render();

// /// DUBAI

// let dubaiStore = {
//   location: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookies: 3.7,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookiesPerHour: function(){
//     for(let i = 0; i < hoursOperation.length; i++){
//       this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
//       this.totalCookies = this.totalCookies + this.cookiesBought[i];
//     }
//     console.log(this.cookiesBought);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let ulElem = document.getElementById('dubai'); //referencing id tag seattle, now use variable ulElem

//     for (let i = 0; i < hoursOperation.length; i++){
//       let liElem = document.createElement('li');
//       liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };
// dubaiStore.render();

// /// PARIS

// let parisStore = {
//   location: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookies: 2.3,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookiesPerHour: function(){
//     for(let i = 0; i < hoursOperation.length; i++){
//       this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
//       this.totalCookies = this.totalCookies + this.cookiesBought[i];
//     }
//     console.log(this.cookiesBought);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let ulElem = document.getElementById('paris'); //referencing id tag seattle, now use variable ulElem

//     for (let i = 0; i < hoursOperation.length; i++){
//       let liElem = document.createElement('li');
//       liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };
// parisStore.render();

// /// LIMA

// let limaStore = {
//   location: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookies: 4.6,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookiesPerHour: function(){
//     for(let i = 0; i < hoursOperation.length; i++){
//       this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
//       this.totalCookies = this.totalCookies + this.cookiesBought[i];
//     }
//     console.log(this.cookiesBought);
//   },

//   render: function(){
//     this.cookiesPerHour();
//     let ulElem = document.getElementById('lima'); //referencing id tag seattle, now use variable ulElem

//     for (let i = 0; i < hoursOperation.length; i++){
//       let liElem = document.createElement('li');
//       liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };
// limaStore.render();




