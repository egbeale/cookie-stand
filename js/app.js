'use strict';

let hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm'];

function randomCustomer(min, max){
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

let seattleStore = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  cookiesBought: [],
  totalCookies: 0,
  cookiesPerHour: function(){
    for(let i = 0; i < hoursOperation.length; i++){
      this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
      this.totalCookies = this.totalCookies + this.cookiesBought[i];
    }
    console.log(this.cookiesBought);
  },

  render: function(){
    this.cookiesPerHour();
    let ulElem = document.getElementById('seattle'); //referencing id tag seattle, now use variable ulElem

    for (let i = 0; i < hoursOperation.length; i++){
      let liElem = document.createElement('li');
      liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total ${this.totalCookies} cookies`;
    ulElem.appendChild(liTotal);
  }
};
seattleStore.render();

///TOKYO

let tokyoStore = {
  location: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  cookiesBought: [],
  totalCookies: 0,
  cookiesPerHour: function(){
    for(let i = 0; i < hoursOperation.length; i++){
      this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
      this.totalCookies = this.totalCookies + this.cookiesBought[i];
    }
    console.log(this.cookiesBought);
  },

  render: function(){
    this.cookiesPerHour();
    let ulElem = document.getElementById('tokyo'); //referencing id tag seattle, now use variable ulElem

    for (let i = 0; i < hoursOperation.length; i++){
      let liElem = document.createElement('li');
      liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total ${this.totalCookies} cookies`;
    ulElem.appendChild(liTotal);
  }
};
tokyoStore.render();

/// DUBAI

let dubaiStore = {
  location: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  cookiesBought: [],
  totalCookies: 0,
  cookiesPerHour: function(){
    for(let i = 0; i < hoursOperation.length; i++){
      this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
      this.totalCookies = this.totalCookies + this.cookiesBought[i];
    }
    console.log(this.cookiesBought);
  },

  render: function(){
    this.cookiesPerHour();
    let ulElem = document.getElementById('dubai'); //referencing id tag seattle, now use variable ulElem

    for (let i = 0; i < hoursOperation.length; i++){
      let liElem = document.createElement('li');
      liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total ${this.totalCookies} cookies`;
    ulElem.appendChild(liTotal);
  }
};
dubaiStore.render();

/// PARIS

let parisStore = {
  location: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  cookiesBought: [],
  totalCookies: 0,
  cookiesPerHour: function(){
    for(let i = 0; i < hoursOperation.length; i++){
      this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
      this.totalCookies = this.totalCookies + this.cookiesBought[i];
    }
    console.log(this.cookiesBought);
  },

  render: function(){
    this.cookiesPerHour();
    let ulElem = document.getElementById('paris'); //referencing id tag seattle, now use variable ulElem

    for (let i = 0; i < hoursOperation.length; i++){
      let liElem = document.createElement('li');
      liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total ${this.totalCookies} cookies`;
    ulElem.appendChild(liTotal);
  }
};
parisStore.render();

/// LIMA

let limaStore = {
  location: 'Paris',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  cookiesBought: [],
  totalCookies: 0,
  cookiesPerHour: function(){
    for(let i = 0; i < hoursOperation.length; i++){
      this.cookiesBought.push(Math.ceil(randomCustomer (this.minCustomer, this.maxCustomer) * this.avgCookies));
      this.totalCookies = this.totalCookies + this.cookiesBought[i];
    }
    console.log(this.cookiesBought);
  },

  render: function(){
    this.cookiesPerHour();
    let ulElem = document.getElementById('lima'); //referencing id tag seattle, now use variable ulElem

    for (let i = 0; i < hoursOperation.length; i++){
      let liElem = document.createElement('li');
      liElem.innerText = `${hoursOperation[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liTotal = document.createElement('li');
    liTotal.innerText = `Total ${this.totalCookies} cookies`;
    ulElem.appendChild(liTotal);
  }
};
limaStore.render();




