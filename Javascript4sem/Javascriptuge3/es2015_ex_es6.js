// EX1

// Constant variables are immutable. It means the moment you define the values you cannot change it later. You can add to an array and an object key, aslong as it does not overrride properties.

// var, let and const
// let and const are block-scoped, which means they only exists within the declared block of brackets {}. The difference between const and let is that you cannot reassign a const.
// var on the other hand is defined in the function execution context and is accessible even if it exists within a depper block of code.
/*
function blocky() {

    if(true){
        var something = "something";
    }

    console.log(something);
}
blocky(); returns something, but if i changed to let or const, it would not work at all.
*/

// EX2
// a1
/*const evens = [1,2,3];

odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)
//var odds = evens.map(v => v+1);

/*
var odds = evens.map(v => {
    v+1
  });
*/
/*
console.log(odds)
console.log(pairs)
console.log(nums)
*/
// EX 3
// A)
/*
function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    });
  }
  var numbers = new Numbers([1,3,5,10,14,20,33,50]);
  console.log(numbers.fives);
  */

// B)
/*
 var counter = {
    count: 0,
    inc: function () {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one
*/
// EX 4
/*
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
*/

// EX 5
// A
/*
function f(x,y,...rest) {
    console.log(`Sum is: ${x + y}`);
    console.log(`rest value 1 is a: ${typeof rest[0]}`);
    console.log(`rest value 2 is a: ${typeof rest[1]}`);
    console.log(`rest value 3 is a: ${typeof rest[2]}`);
    if(rest[3] instanceof Array){
        console.log(`rest value 4 is a: Array`);
    }
    if(rest[4] instanceof Date){
        console.log(`rest value 5 is a: Date`);
    }
    console.log(`rest value 6 is a: ${typeof rest[5]}`);
}
*/
// f(5,2, true,2,"hello World",[1,2,3],new Date(),{});
// B)
/*
var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams));

// C)
//?
//var chars = [... f(5,2,...restParams)];
*/
// EX 6
/*
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

person = {fName, lName, age};
console.log( person );
*/
// EX 7
// A)
/*
let fName = "Kurt", lName = "Wonnegut";
console.log(`First: ${fName}, Last: ${lName}`);
*/
// B)
/*
function getPerson(){
    return {
      firstName: "Kurt",
      lastName: "Wonnegut",
      gender : "Male",
      email: "kurt@wonnegut.dk",
      phone: "12345",
    }
  }

 let person = getPerson();
  const {lastName, phone} = person; 

console.log(`LastName: ${lastName}` + `phone: ${phone}`)
*/
// EX 8
/*
var f = require("./EX8");

f(5,2, true,2,"hello World",[1,2,3],new Date(),{});
*/
// EX 9

class Shape {
    constructor(color){
      this._color = color;
    }  
    setColor(color) {
        this._color = color;
    }
    getColor(){
        this._color = color;
    }
    getInfo() {
        console.log(`This shapes color is: ${this._color}`)
    }
    getArea() {
      return undefined;
    }
    getPerimeter() {
      return undefined;
    }
  }
  
  let color = new Shape("red");
  color.getInfo();
 
  color.setColor("blue");

color.getInfo();
// B)
/*
class Circle extends Shape{
constructor(color, radius){
    super(color);
    this._radius = radius;
}
setColor(color) {
    this._color = color;
}
getColor() {
    return this._color;
}
setRadius(radius) {
    this.radius = radius;
}
getRadius() {
    return this.radius;
}
getInfo() {
    console.log(`This shapes color is: ${this.getColor()} and this circles radius is: ${this.getRadius()}`)
}
}
let newCircle = new Circle("red", 5);
newCircle.getInfo();

newCircle.setColor("blue");

newCircle.setRadius(15);

newCircle.getInfo();
*/
// C
/*
class Cylinder extends Circle{
    constructor(height, radius, color){
        super(radius, color);
        this.height = height;
    }
    setColor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    getInfo() {
        console.log(`This shapes color is: ${this.getColor()} and this circles radius is: ${this.getRadius()} and height is: ${this.getHeight()}`)
    }
    setHeight(height) {
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
    get _color (){ return this._color}
    get radius (){ return this.radius}
    get height (){ return this.height}
}

let newCylinder = new Cylinder(20,15,"red");

console.log(newCylinder.height);
*/