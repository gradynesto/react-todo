// function add(a, b) {
//     return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function hello(name, age){
    console.log('Hi ' + name + ', your are ' + age);
}

hello(...person);
hello(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Ernie', ...names];

final.forEach(element => {
  console.log('Hi ' + element);  
});