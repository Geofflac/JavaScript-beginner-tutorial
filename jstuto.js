// this is java script beginner tutorial https://www.youtube.com/watch?v=PkZNo7MFNFg&list=WL&index=24
// code type on visual studio code and runned with node

/* this is a
multiline
comment*/

// data types:
// undefined, null boolean, string, symbol, number, and object

// previous type of variable declaration, this variable can be used through the whole project
var number = 5;
number = 8;
// now 'let' => can be changed but can be used only in the scope, 'cont' cannot be changed

let ourname = "this is a tuto";

const test = 654;
 
// semi colon not reaquired but recommended
// assignement of var, careful var are case sensitive
var a = 7;
var b = a;
var c = b + 1;
// contatening string
let d = ourname + ' and it is great';

// can use camlecase for declaration
let thisIsACamelCaseVar = "camelCase";

// operation + - * / %(remainder) works
// incrementation
let inc = 2;
inc++;
inc--;
let remain = 10 % 2;

//decimal or float
let dec = 0.003;
dec = dec * 3.6;

dec = dec + 2;
// same as dec += 2
dec = dec - 2;
// same as dec -= 2
dec = dec * 2;
// same as dec *= 2
dec = dec / 2;
// same as dec /= 2

// the \ is used in a string to indicated it is not the end of the string
let thisStr = 'This is \'test to show \'the back slash in a sting';
// can be achived by strating the str by single quote and use double quote within the string
thisStr = 'another test "with the quote"';
// can escape a backslah \\, create a new line \n, tab \t
thisStr = 'First line\n\tSecondline';

//other contatening str
thisStr = 'test';
thisStr += ' of contatening';

// check str length
let lengthStr = thisStr.length;

// find a letter, str is an array of char
let letter = thisStr[0];

// Cannot change 1 letter of str ----- thisStr[0] = 'f' ----- not allowed


// idea to find the last char of str
letter = thisStr[lengthStr - 1];

// array, diff type of var can be mixes
let array = ['test', 2];

//nested array
array = [['test1', 1], ['test2', 2]];

// find an element of an array
let element  = array[0];
element = array[0][0];

// can modify array element
array[0][1] = 99;
array[0] = 33;

// append array with push at the end
array.push('test');
array.push(['test123', 123]);

// remove last element of array with pop
array.pop();
array[1].pop();

// remove this time the first element with shift
array.shift();

// append array with unshift at the beginning
array.unshift('Element at the start');

// functon
function ourFnt() {
    console.log("Hello, wordl!");
}
//ourFnt();

function fnt(a, b) {
    console.log(a + b);
}
//fnt(1, 1);

// variable with globale scope can be seen outside of a function
let Global = 10;

// In a browser Globl2 would be seen as not var or let have been assigned, the code studio shows an error as it is more careful
function Glob() {
    Global2 = 10;
}

function fnt(a, b) {
    // console.log(a + b + Global + Global2);
}
fnt(1, 1);

// local var take over global var in a function, out of the function the global var takes over
var shirt = 'shirt';

function outfit(){
    var shirt = 'shoes';
    return shirt;
}
//console.log(outfit());
//console.log(shirt);

// if a function has no return value will be undefined
var num = 3;
function sum(){
    num += 3;
}
//console.log(sum());

// queue
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
//console.log('before ' + testArr)
//console.log('remove ' + nextInLine(testArr, 6));
//console.log('after ' + testArr);

// booleans true = 1 false = 0
function bool() {
    return true;
}

//if statement
function trueOrFalse(booltest){
    if (booltest){
        return 'it is true';
    }
    return 'not true';
}
//console.log(trueOrFalse(false));

// equal operator == for value, not = as it is assignement, === is used to test strict equality in value and type

// inequality operator !=, strict inequality !== as it does not convert type;

// greater than > lesser than < greater or equal >= lesser or equql <=

// operator 'AND' && / 'OR' ||

// else if and else statement,
function testElse(numb){
    if (numb > 10){
        return 'greater than 10';
    }
    else if (numb < 10){
        return 'lesser than 10';
    }
    else {
        return 'it is 10, or no arg passed';
    }
}
//console.log(testElse(8));

//switch statement can be used to replaced else if statement
function caseSwitch(numb){
    var answer = "";
    switch(numb){
        // the case is a strict equality '==='
        case 1: 
            answer = 'un';
        // break is needed to not run through all the cases
        break;
        case 2:
            answer = 'deux';
        break;
        // use in case we want same anszer for several cases
        case 3:
        case 4:
        case 5:
            answer = ' trois ou quatre our cinq';
        break;
        // use in case none of the above cases are true
        default:
            answer = 'nombre';
    }
    return answer;
}
//console.log(caseSwitch(3));

// in a function can return a bool by using comporators
function boolfn(a, b){
    return a < b;
}
//console.log(boolfn(2, 1));

// return in a function once met exit the function and does not run the rest

//Object
var ourDog = {
    'name': 'camper',
    'leg number': 4,
    'tails': 1,
    'friends': ['percy', 'dobby'],
    5 : "test",
    'boolean': true,
};
//console.log(ourDog.name);

// to access properties if they have a scape
//console.log(ourDog['leg number']);

// access object properties using var and []
let check = 5;
//console.log(ourDog[check]);

// can update object value 
ourDog.name = 'roger';

// append object
ourDog.bark = 'wow wow!';

// can delete property
delete ourDog.tails;

// object can be used to replace switch statement
let numb = 3 + 2;
// if numb = 5 show test
//console.log(ourDog[numb]);

//check property presence, hasOwnProperty method will return true if property exist with this name
//console.log(ourDog.hasOwnProperty('friends'));

//more complex object, an array made of object, similar to JSON

var myMusic = [
    {
        'artist': "dereck",
        'title': 'water on the sea',
        'year': '1992',
        'sub':{
            "children": 2,
            "name": ['eric','jen'],
        }
    },
    {
        'artist': "John",
        'title': 'food on the table',
        'year': '1997',
    },
];
//console.log(myMusic[0].artist);
//console.log(myMusic[0].sub.name[1]);

// keep a copy of the object
let collection = {
    '1': {
        'artist': 'john',
        'year': '1993',
        'track': [
            'ABC', 'RNB'
        ]
    },
    '2': {
        'artist': 'keith',
        'year': '1998',
    }
};
var copy = JSON.parse(JSON.stringify(collection));
//console.log(copy);

// create a function that update the records
function update(id, prop, value){
    if (value === ''){
        delete collection[id][prop];
    }
    else if (prop === 'track'){
        // if tracks is empty, we need to create it, so if it exist we make it equal to himslef of we generate the array
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }

    return collection;
}
//console.log(update(2,'track','michel'));

// while loop
array = [];
var i = 0;
while (i < 5) {
    array.push(i);
    i++;
}
//console.log(array)

// for loop can count by twos as wll with i+=2, or decrease by 2 i-=2
array = [];
for (let i = 0; i < 10; i++) {
    array.push(i);
}
//console.log(array)

array = [1, 2, 3, 4, 5];
let arraytot = 0;
for (let i = 0; i < array.length; i++) {
    arraytot += array[i];
}
//console.log(arraytot)

// do while loop
array = [];
var i = 10;
do {
    array.push(i);
    i ++;
}
while (i < 15);
//console.log(array)

// look up
var list = [
    {
        'first name':'pete',
        'number':'12345',
    },
    {
        'first name':'rogy',
        'number':'98765',
    },
    {
        'first name':'greg',
        'number':'121212',
    }
];

function lookup(name, prop){
    for (let i = 0; i < list.length; i++){
        if (list[i]['first name'] === name && list[i].hasOwnProperty(prop)){
            return list[i][prop];
        }
    }
    return 'not found';
}
//console.log(lookup('greg', 'number'));

// random number from 0 to 1
//console.log(Math.random())

// random whole number fromm 0 to 19
//console.log(Math.floor(Math.random() * 20));

//change str to int
if (parseInt('56') === 56){
    //console.log('it is 56');
}

// change the the base of the argument
if (parseInt(11111111, 2) === 255){
    //console.log('it is 255');
}

//ternary operator -- condition ? statement-if-true : statement -if-false
a = 3;
b = 2;
//a == b ? console.log('same') : console.log('not same')

// nested ternary operator

function nested(num){
    return num > 0 ? 'postive' : num < 0 ? 'negative' : 'zero';
}
//console.log(nested(-2))

// diff var and let, ES6 (2015) let and const are now here, let does not let you declare a variable twice, it is good to avoid double declaration. A lot of people use only let and const.
// With var it is declare globaly (if changed in a function it will be impacted it the all code) let is limited to the bloc declared.
// const is like  let but in red only, we cannot change the value and re assigne it. it is good to secure some value with const so it wont change by mistake. usually const varial are in CAPITAL
// array declared with const cannot by re assigned totaly, but element alone can be updated
const arrayconst = [1, 2, 3];
//arrayconst = [3, 4, 5] not allowed
arrayconst[1] = 4; 
//console.log(arrayconst)

// object mututation
// same with object defined with const then can be mutated, same as array but it can be freeze
const MATH_CONST = {
    'PI': 3.14
};
// we could do MATH_CONST.PI = 100
Object.freeze(MATH_CONST);
MATH_CONST.PI = 100;
//console.log(MATH_CONST) still show PI = 3.14

// anonymous function + arrow function
let magic = function(){
    return new Date();
};
// an anonymous function does not have name when it is asigned directly, it can then be change to arrow function
// because we are returning 1 value, no need the word return and {}
magic = () => new Date();

// arrow function with argument ps. concat function for arrays ;)
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
//console.log(myConcat([1,2], [3,4,5]))

var myConcatarrow = (arr1, arr2) => arr1.concat(arr2);
//console.log(myConcatarrow([1,2], [3,4,5]))


/*------break other tuto on IIFE -----------
https://www.youtube.com/watch?v=3cbiZV4H22c
---------------------------------------*/

// an immediate invoked function will be runned directly and not stored in a var and has no name
//The firs () make the function an expression, the second () after the last } tell JS to invoked this exact anonymous fonction
(function () {
    //console.log('it is 3')
})();

// function can be named and have an argument, in this case below it is a default argument
(number = function (num = 3) {
    //console.log('it is ' + num)
})();

// it can also be invoked
number(5);

// usually used to avoid var conflict as var are defined within the function
var a = 2;
(function(){
    var a = 3;
    //console.log(a);
})();

//console.log(a);

// same example in block scope

let h = 2;

{
    let h = 3;
    //console.log(h);
}

//console.log(h);

/*------end of tuto on IIFE -----------
---------------------------------------*/

/*------break other tuto on closures -----------
https://www.youtube.com/watch?v=1JsJx1x35c0
---------------------------------------*/
// a closer is combi of a function and its environment. In JS all functions forms closures

function makeFunc(){
    var name = 'JS Nuggets';
    function displayName(){
        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc();
//myFunc();

// private methode, possible to do with closure

var counter = (function(){
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function(){
            return privateCounter;
        }
    };
})();

//console.log(counter.value())
counter.increment();
counter.increment();
//console.log(counter.value())
counter.decrement();
//console.log(counter.value())



/*------end of tuto on closure -----------
---------------------------------------*/

//higher order arrow function
//default parameter comes when argument is not specified or undefined
const increment = (function(){
    return function increment(number = 1, value = 1){
        return number + value;
    };
})();
//console.log(increment(2,2))
//console.log(increment())
//console.log(increment(5))

const onetest = (function (){
    var x = 0;
    return function atest(){
        //console.log(x);
    };
})();

//onetest();
//a.reduce()

// rest operator ... , turn arguments into an array

function sumarr(...args){
    //console.log(args)
};
sumarr(1,2,3);

// spread operator, spread array into its individual parts

const arr1 = ['jan','feb','mar','apr'];
let arr2;
(function(){
    // arr2 = arr1; // in that case arr2[0] will be 'potato'
    arr2 =[...arr1]; // now we spread the content into a new array
    arr1[0] = 'potato';
})();
// console.log(arr2);

// destructing object, put all the value f an object into diff var

var voxel = {x : 1, y : 2, z : 3};
const { x : r, y : s, z : t} = voxel;

// destructing in nested object

const LOCAL_FORECAST = {
    today: { min: 10, max: 20},
    tmr: { min:5, max: 35},
};
const { tmr : { max : maxtmr}} = LOCAL_FORECAST;
//console.log(maxtmr);

// destrutive array
// in that case z will be equal to 1 x to 2 y to 4
const [z, x, ,y] = [1, 2, 3, 4, 5, 6];
// we also can switch value to varial using the same idea
let f = 8, g = 6;
[f, g] = [g , f];
//console.log(f, g)

//desctrutive array with rest op
// in that case we use the spread opertor to create a new arr, and use 2 coma , , to show we will skip the first 2 elements
const source = [1,2,3,4,5,6,7,8,9];
const [, , ...arr] = source;
//console.log(arr)

// destructive object prop into function arg

const stats = { max : 10, mode : 30, min : 5};

const half = ( () => {
    //we no need to put the whole stats in arg we can specify that we want max and min from it
    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
//console.log(half(stats));

//template from string
const person = { name: 'Georges', age: 50};
let greating = `hello, my name is ${person.name}!\nI am ${person.age} years old`;
//console.log(greating);

// function to create object quickly
/* same as => {
    return {
        name: name,
        age: age,
        gender: gender,
    };
}; */

const createperson  = (name, age, gender) => ( { name, age, gender } );
// console.log(createperson('tony',30,'male'));

// in an object if one property contin a function, test: function(testing), is the same as test(testing) 

//create object old way
// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');
// console.log(zeus.targetPlanet);

//new way
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
// console.log(zeus.targetPlanet);

// get and set in a constructor allow to have private variable
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

let Thermostat = makeClass();
let temperature = new Thermostat(30);
// console.log(temperature.temperature);
temperature.temperature = 50; 
// console.log(temperature.temperature);

//import export, node need more package and to run in experimental to allow import / export
// IN ANOTHER FILE LIFE EXPORTSTRING.JS ---- export const capitalized = (text) => text.toUppercase();
// import { capitalized } from "./exportstring.js"
// you also can import * as object from xxx => the star mean you will import everything and that it will fall into the object
// export default is used to export only a sinlgle element
// to import a default export, you do not need the {} , import xxx from xxx