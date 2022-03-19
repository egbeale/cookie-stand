'use strict';

let hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];

let cookieTable = document.getElementById('cookie-table');

function randomCustomer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storesArr = [];

function CookieData(location, minCustomer, maxCustomer, avgCookies) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.cookiesBought = [];
  storesArr.push(this);
}

CookieData.prototype.cookiesPerHour = function(){
  for(let i = 0; i < hoursOperation.length; i++){
    let cookies = (Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
    this.cookiesBought.push(cookies);
    this.totalCookies = this.totalCookies + this.cookiesBought[i];
    console.log(this.totalCookies);
  }
},

CookieData.prototype.render = function(){
  this.cookiesPerHour();

  let row1 = document.createElement('tr');
  cookieTable.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = this.location;
  row1.appendChild(th1Elem);

  for (let i = 0; i < hoursOperation.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiesBought[i]}`;
    row1.appendChild(tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookies;
  row1.appendChild(tdElem);
};

function createTableHeader(){

  let row1 = document.createElement('tr');
  cookieTable.appendChild(row1);

  let thElem = document.createElement('th');
  thElem.textContent = '';
  row1.appendChild(thElem);

  for(let i = 0; i < hoursOperation.length; i++){
    let thElem = document.createElement('th');
    thElem.textContent = `${hoursOperation[i]}`;
    row1.appendChild(thElem);
  }

  thElem = document.createElement('th');
  thElem.textContent = 'Daily Store Total';
  row1.appendChild(thElem);
}

function renderAllCookies(){
  for(let i = 0; i < storesArr.length; i++){
    // storesArr[i].cookiesPerHour();
    storesArr[i].render();
  }
}


function createTableFoot(){
  let footRow = document.createElement('tr');
  cookieTable.appendChild(footRow);
  let thElem = document.createElement('th');
  thElem.textContent = 'Grand Totals';
  footRow.appendChild(thElem);

  let grandTotalCookies = 0;

  for(let i = 0; i < hoursOperation.length; i++){
    let hourTotals = 0;

    for(let j = 0; j < storesArr.length; j++){
      hourTotals += storesArr[j].cookiesBought[i];
      grandTotalCookies += storesArr[j].cookiesBought[i];
    }
    thElem = document.createElement('th');
    thElem.textContent = hourTotals;
    footRow.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = grandTotalCookies;
  footRow.appendChild(thElem);
}

new CookieData('Seattle', 23, 65, 6.3);
new CookieData('Tokyo', 3, 24, 1.2);
new CookieData('Dubai', 11, 38, 3.7);
new CookieData('Paris', 20, 38, 2.3);
new CookieData('Lima', 2, 16, 4.6);

createTableHeader();
renderAllCookies();
createTableFoot();

// ******** F O R M ***********

let myForm = document.getElementById('getForm');
myForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();

  let name = event.target.name.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;

  cookieTable.innerHTML = '';

  let userStore = new CookieData(name, min, max, avg);

  createTableHeader();
  renderAllCookies();
  createTableFoot();


  // userStore.cookiesPerHour();
  // userStore.render();

  // createTableFoot();

  // for(let i = 0; i < storesArr.length; i++){
// hourTotals[i] = 0; //yikes what's going on here
} // grandTotalCookies();


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




