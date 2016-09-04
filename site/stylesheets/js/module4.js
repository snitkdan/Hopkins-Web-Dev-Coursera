/**
 * Created by Danik on 9/2/2016.
 */

/*//Immediately Invoked Function Expressions (IIFEs)
(function (name, window) {
  console.log("Hello " + name);
  window.test = "test"; //exposing a value to the Global "window" object
})("Daniel", window);
console.log(test); //printing a value that has been exposed by IIFE
*/

/*//Fake Namespaces
var danielGreeter = {};
danielGreeter.name = "Daniel";
danielGreeter.sayHello = function(){
  console.log("Hi " + danielGreeter.name)
}
danielGreeter.sayHello();*/

/*//Closures
function makeMultiplier(multiplier){
  // var multiplier = 2;
  function b() {
    console.log("Multiplier is: " + multiplier);
  }
  b();
  return (
    function (argument){
      return multiplier * argument;
    }
  );
}
var double = makeMultiplier(2); //no execution environment
console.log(double(10)); //it gets its own exec environment*/

/*//Arrays
var array = new Array();
array[0] = "Daniel";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};
console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);
/!*Short hand array creation*!/
var names = ["Daniel", "John", "Joe"];
var namesObjects = [
  {name: "Daniel"}, {name: "John"}
];
console.log(names);
console.log(namesObjects);
for (var i = 0; i < names.length; i++){
  console.log(names[i]);
}
names[100] = "Jim";
for (var i = 0; i < names.length; i++){
  console.log(names[i]);
}
/!* for-each loops (with a caveat *!/
var names2 = ['Name1', 'Name2'];
var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS"
};
for (var prop in myObj){
  console.log(prop +": " + myObj[prop]);
}
for (var name in names2){
  console.log(name +": " + names2[name]);
}
names2.greeting = "Hi!"; //assigns an attribute since it is an object
for (var name in names2){//indices are also attributes...so...
  console.log(name +": " + names2[name]);
}*/

/*//Object literals and "this"
var literalCircle = { //new Object()
  radius: 10,
  getArea: function(){
    var self = this; //refer to literal Circle object instead of global "this"
    console.log(this);
    var increaseRadius = function(){
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius, 2);
  }
};
console.log(literalCircle.getArea());*/

/*//Function Constructors
function Circle (radius){
  this.radius = radius;
  this.getArea = function(){
    return Math.PI * Math.pow(this.radius, 2);
  };
  this.area = this.getArea();
}
var myCircle = new Circle(10); //new Object();
console.log(myCircle);
console.log(myCircle.getArea());
/!*Using prototype *!/
function Circle (radius){
  this.radius = radius;
}
Circle.prototype.getArea = function(){
    return Math.PI * Math.pow(this.radius, 2);
}
var myCircle = new Circle(10);
console.log(myCircle);*/

/*//'this'
function test(){
  console.log(this);
  this.myName = "Daniel";
}
test();
console.log(window.myName);*/

/*//Passing/Copying Variables
/!* copy by value *!/
console.log("By value");
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("after b updates");
console.log("a: " + a);
console.log("b: " + b);
/!* copy by reference *!/
console.log("By reference");
var a = {x: 7};
var b = a;
console.log("a: " + a.x);
console.log("b: " + b.x);
b.x = 5;
console.log("b.x updated to 5")
console.log("a: " + a.x);
console.log("b: " + b.x);
/!* function pass by value *!/
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);

  primValue = 5;
  console.log("after:");
  console.log(primValue);
}
var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value:")
console.log(value);
 function pass by reference
function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue.x);

  objValue.x = 5;
  console.log("after:");
  console.log(objValue.x);
}
var value = {x: 7};
changeObject(value);
console.log("after changeObject, orig value:")
console.log(value.x);*/

/*//Functions explained
function multiply(x, y) {//functions are First-Class Data Types (They're objects!)
  return x * y;
}
console.log(multiply(5,3));
multiply.version = "v.1.0";
console.log(multiply.version);
/!* Function Factory! *!/
function makeMultiplier(multiplier) {
  var myFunc = function(x){
    return multiplier * x;
  };
  return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
/!*Passing functions as arguments*!/
function doOperationOn(x, operation){
  return operation(x)
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
*/

/*//Object creation -- Object Literal Syntax
var facebook = {
  name: "Facebook",
  ceo: {
    fName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};
console.log(facebook.ceo.fName);*/

/*//Object creation -- Verbose
var company = new Object();
company.name = "Facebook"; //sets attribute even if it isn't defined in the object
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);
console.log(company['name']); //works with spaces when assigning attributes
company['stock of company'] = 110;
console.log("Stock price is: " + company['stock of company']);
var stockPropName = 'stock of company';
console.log("Stock price is: " + company[stockPropName]);*/

/*//Default values
function orderChickenWith(sideDish){
  sideDish = sideDish || "default!";
  console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();
*/

/*//Common Language Constructs
var string = "Hello";
string += " World";
console.log(string + "!");

console.log((5+4)/3);
console.log(undefined/3);
function test1 (a){
  console.log(a/5);
}
test1();

var x = 4, y = 4;
if(x == y){
  console.log("x = 4 is equal to y = 4");
}
x = "4";
if (x == y){//type coercion to evaluate this equality!
  console.log("x = '4' is equal to y = 4");
}
if (x === y){//strict equality to avoid type coercion
  console.log("Strict: x='4' is equal to y = 4");
}else {
  console.log("Strict: x='4' is NOT equal to y = 4");
}

if(false || null || undefined || "" || 0 || NaN){
  console.log("This line won't ever execute!")
}
else {
  console.log("All false");
}
if(true && "hello" && 1 && -1 && "false"){
  console.log("All true");
}

var sum = 0;
for (var i = 0; i < 10; i++){
  sum += i;
}
console.log("sum of 0 through 9 is: " + sum);*/

//Types
/*var x;
console.log(x);
if (x == undefined){
  console.log("x is undefined");
}
x = 5;
if (x == undefined){
  console.log("x is undefined");
}
else {
  console.log("x has been defined as: " + x)
}*/

//Scope
/*var message = "in global";
console.log("global: message = " + message);

var a = function() {
  var message = "inside a";
  console.log("a: message = " + message);
  b();
};
function b() {
  console.log("b: message = " + message);
}
a();*/
