var $ = require('jquery');
var Person = require('./modules/Person');

alert("Testing 123");

var john = new Person("John Smith", "blue");
john.greet();

var jane = new Person("Jane Doe", "green");
jane.greet();   

