(function() {
  'use strict';
  if (document.querySelector('.header__logo')) {
    setTimeout(function() {
      document.querySelector('.header__logo').classList.add('m--show');
    }, 1000);
  }
})();

// var module = require('./module');

// module.func1();
// module.func2();

import { square, MyClass } from './module';

console.log(square(5));
var cred = {
  name: 'Тимур Адольшин',
  enrollmentNo: 11115078
};
var x = new MyClass(cred);
console.log(x.getName());


