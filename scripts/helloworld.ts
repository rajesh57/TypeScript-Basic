// reference : https://howtodoinjava.com/typescript/
//https://www.typescriptlang.org/docs/handbook/interfaces.html
//https://www.tutorialspoint.com/typescript/

/**
 * Variable Types: Mostly use Let and const declations 
 * Why used Let and const -  Bloack level scopting We can't  redeclare variables multiple time.
 * Let declation -  we can create WITHOUT Initilizations.
 * Const declation -  Always Initlize the value. Once assigned we can't reassign
 * 
 
  let - used only block scope
  
  const -  used only block scope
  
   ex:  
     if (myAge >20) {
        let isOldAge = true
	console.log("isOldAge==",isOldAge); - isOldAge only access here not outside
     }
     
  
  var -  used for global scope
  
       if (myAge >20) {
        var isOldAge = true
     }
     	console.log("isOldAge==",isOldAge); isOldAge access from outside block

  
 * Use of Types : 1.Static Types checking. 
                  2. Accurate Intelligence Ex : showing properties of string and number 
 * ****************************************************************************************************
 */

let testVar1: any = 30; // Assign any type of values number or string or boolean or object
let testVar2: any = "Rajesh";
let testVar3: any = {};

let empVar1: number = 40; // only allow number

let empVar2: string = "Kumar"; // only allow string.

let empVar3: boolean = true; // Only allow boolean.

let sentance: string = `My name ${empVar2} am new to Type script`; // Embedded expression.

console.log("test here ==", sentance);

/**
 * Array
 ****************************************************************************************************
 */

const expArr1: string[] = ["Hi there", "am rajesh"];

const expArr2: number[] = [1, 2, 3];

const expArr3: boolean[] = [true, false];

console.log("expArr1 ==", expArr1);

// Multiple data types  array declaration.
const expArr4: (number | boolean)[] = [1, 2, true];

// Nested Array :
const expArr5: number[][] = [[1, 2, 3, 4]];

/**
 * Tuples
 ****************************************************************************************************
 *Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
 */

let testTuple: [string, number];
testTuple = ["example.com", 10]; // Correct declration
//testTuple = [10, "test.com"]; // error

/**
 * Enums
 ****************************************************************************************************
 */
// Creating Enum
export enum AddVal {
	tVal1 = 10,
	tVal2 = 20
}
// Getting value from Enum
let getVal: AddVal = AddVal.tVal1;

export enum Color {
	Red = 1,
	Green,
	Orange
}
let findColor: string = Color[2];

/**
 * Const
 ****************************************************************************************************
 */

const testNum = 10;

const obj1 = {
	name: "Rajesh"
};

console.log(obj1.name);

// obj1 = {} -  We can't assign instead of that change the keyword let
// Const keyword can't assign the object

obj1.name = "kumar"; // Assign the value to property of object

console.log(obj1.name);

/**
 * Arrow Function
 ****************************************************************************************************
 */
// function name , parameter , return
const testArrowFun = () => {
	return 10;
};
console.log("test Arrow fun", testArrowFun());

// Alternate Way :

const testFun1 = () => 10;
console.log("testFun1 Arrow fun", testFun1());

const testFun2 = param1 => 10 + param1;

console.log("testFun2 Arrow fun", testFun2(10));

const testFun3 = (param1, param2) => 10 + param1 + param2;

console.log("testFun3 Arrow fun", testFun3(10, 30));

/**
 * Spread Operator
 *The spread operator (in form of ellipsis) can be used to initialize arrays and objects from another array or object. You can also use spread operator for object destructuring.
 ****************************************************************************************************
 */

//Initialize arrays another array

//Create new array from existing array
let origArrayOne = [1, 2, 3]; //1,2,3
let origArrayTwo = [4, 5, 6]; //4,5,6

//Create new array from existing array
let copyArray = [...origArrayOne]; //1,2,3

//Create new array from existing array + more elements
let newArray = [...origArrayOne, 7, 8]; //1,2,3,7,8

//Create array by merging two arrays
let mergedArray = [...origArrayOne, ...origArrayTwo]; //1,2,3,4,5,6

//Initialize Objects another Object

//Create new object from existing object
let origObjectOne = { a: 1, b: 2, c: 3 }; //{a: 1, b: 2, c: 3}
let origObjectTwo = { d: 4, e: 5, f: 6 }; //{d: 4, e: 5, f: 6}

//Create new object from existing object
let copyObject = { ...origObjectOne }; //{a: 1, b: 2, c: 3}

//Create new object from existing object + more elements
let newObject = { ...origObjectOne, g: 7, h: 8 }; //{a: 1, b: 2, c: 3, g: 7, h: 8}

//Create object by merging two objects
let mergedObject = { ...origObjectOne, ...origObjectTwo }; //{a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

/**
 * Interface - Most flexible way to declare type
 ****************************************************************************************************
 */

// Create a interface with optional param:
interface Person {
	name1: string;
	name2: string;
	age?: number;
}

// create an object (myEmp1) with type of (Person) interface
let myEmp1: Person = {
	name1: "raj",
	name2: "kumar",
	age: 30
};

console.log("myEmp1 name1 ==", myEmp1.name1);

let myEmp2: Person = {
	name1: "raj",
	name2: "kumar"
};

//Simple Interface Inheritance

interface MyPerson {
	myAge: number;
}

interface Musician extends MyPerson {
	instrument: string;
}

let drummer = <Musician>{}; // Inheritance interface here.
drummer.myAge = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.myAge);
console.log("Instrument:  " + drummer.instrument);

 ****************************************************************************************************

/**
 Spread operator: 
 Copy array or object
 Spread operator can be the first element
 ****************************************************************************************************
 */

var weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
var days = [...weekdays, "Sat", "Sun"]; 
console.log(days) // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

/**
 Rest operator: 
 collects all remaining elements into an array
 rest parameter needs to be the last to collect the rest elements.
 ****************************************************************************************************
 */

var days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const [sat, sun, ...weekdays] = days;
console.log(sat); // "Sat"
console.log(sun); // "Sun"
console.log(weekdays); // ["Mon", "Tue", "Wed", "Thu", "Fri"]

//====================Nullish Coalescing=================================

const myName = undefined;
const final = myName ?? 'Rajesh';
console.log("final value===",final);

//=====================Promise==========================

const promise1 = new Promise( (resolve, reject)=> {
   setTimeout(() => {
    resolve('All done');
   }, 2000)
   reject('')
})

// add Promise Type 
const promise2: Promise<string> = new Promise( (resolve, reject)=> {
   setTimeout(() => {
    resolve('All done');
   }, 2000)
   reject('')
})
promise2.then(data => {
data.split( ' ')
})

//=======================Generics==============================

// Generics provide a way to make components work with any data type and not restrict to one data type. 
// So, components can be called or used with a variety of data types.
// data type of passed parameters to a class, interface, and functions.

const names = ['rajesh', 'kumar'];  // string[]

const namesHere : Array<string> = [];

function funName1 (name1: string) : string {
    return name1;
}
function funName2 (name2: number) : number {
    return name2;
}

// T - its a generic it acceept any kind of data types.

// Generics - Sigle type
function myFun <T> (name:T): T {
    return name;
}
console.log("myapp ===", myFun('123'));
console.log("myapp ===", myFun('rajesh'));

function dmeoFun(arg1:string, arg2: number) {
    return arg1+ arg2;
}

// Generics -Many Type
function demoGenericFun<T, U> (arg1: T, arg2: U) {
    return `I am ${arg1} ${arg2}`;
}
console.log("demoGenericFun==",demoGenericFun("rajesh", "kumar"));
console.log("demoGenericFun==",demoGenericFun("rajesh", 123));
console.log("demoGenericFun==",demoGenericFun("rajesh", true));


// Normal Type declated - Object 
function myMergeFun (objA: object, objB: object) {
   return Object.assign(objA,objB);
}
const megeObj = myMergeFun({name:"rajesh"}, {job: "IT"})
console.log("megeObj===",megeObj);

// Generics - Object 
function myMergeFun1<T, U> (objA: T, objB: U) {
   return Object.assign(objA,objB);
}

const megeObj1 = myMergeFun1({name:"rajesh", lastName:'kumar'}, {job: "IT"})
console.log("megeObj1===",megeObj1);
console.log("megeObj1 access name===",megeObj1.name);



//=================  Generics Type Constraints =================
// Restric type using Generics Type constraint
// extends keyward to restrict type for this case only acceept object type
function myMergeFunConstaint<T extends object, U extends object>  (objA: T, objB: U) {
   return Object.assign(objA,objB);
}
// If we pass other than object type it shows compile time error
// const megeObj3 = myMergeFunConstaint({name:"rajesh", lastName:'kumar'}, 30) 

//============== Array Methods ================================

/* 1. concat()
Method returns a new array comprised of this array joined with two or more arrays.
*/
const array1 = ["1","2"];
const array2 = ["a", "b"];
const finalArray = array1.concat(array2);


/* 2. every()
Method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
*/
// checking each element in the array if match the codition (all element) return boolean true. If any of then fail to match return false.
const array3 = [10, 20, 30, 40];

const isCheckThreshold = (testVal: number) => {
    return testVal > 21
}
const isArrayval : boolean = array3.every(isCheckThreshold);
console.log("isArrayval==",isArrayval);


/* 3. filter()
Method creates a new array with all elements that pass the test implemented by the provided function.
*/
// checking each element in the array if match the codition (all element) return new array
const array4 = [10, 20, 30, 40];

const isCheckMyThreshold = (testVal: number) => {
    return testVal > 21
}
const finalNewArray : number[] = array4.filter(isCheckThreshold);
console.log("finalNewArray==",finalNewArray);


/* 4. forEach()
method calls a function for each element in the array.
*/
  
  array3.forEach((myElement)=> {
    console.log("myElement==",myElement);
  })

  /* 5. indexOf() -  start from first 
method retuns the index of element in the array
*/

console.log("array index form first===",array3.indexOf(20));

  /* 6. lastIndexOf() - start from last 
 method retuns the index of element in the array
*/

console.log("array index from last===",array3.lastIndexOf(30));

 /* 7. join()
method joins all the elements of an array into a string.
*/

console.log("array index===",array3.join(","));


 /* 8. map()
method creates a new array with the results of calling a provided function on every element in this array.
*/

const myArray1 = [1,2,2,3,4,5];
const testArr = myArray1.map((myVal)=> {
return myVal*2;
});

console.log("testArr===",testArr);


 /* 9. pop()
method removes the last element from an array and returns that element.
*/
const removeLasEle= myArray1.pop();


 /* 10. push()
method appends the given element(s) in the last of the array and returns the length of the new array
*/
const addLastEle= myArray1.push(100);
console.log("addLasEle===",addLastEle);
console.log("myArray1===",myArray1);



 /* 11. reduce()
method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
*/
 
 // Use case:Sum all the values of an array
 /* this is our initial value i.e. the starting point*/
const initialValue1 = 0;
/* numbers array */
const numbers = [5, 10, 15];
/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator: any, item:any) => {
  return accumulator + item;
};
/* we give the reduce method our reducer function
  and our initial value */
const myTotal = numbers.reduce(reducer, initialValue1)



 const stdResult1 =  [67, 90, 100, 37, 60];
 const total = stdResult1.reduce((accumulator, currntVal)=> {
    return accumulator + currntVal;
 })
 console.log("totel===",total);

 // Use case:Sum of values in an object array
  const stdResult2 =  [
    { subject: 'Maths', marks: 78 },
    { subject: 'Physics', marks: 80 },
    { subject: 'Chemistry', marks: 93 }
  ];

const total2 = stdResult2.reduce((accu, curVal) => {
   return accu + curVal.marks;
},0)

 console.log("total2===",total2);

//Use case:Flatten an array of arrays

const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];
const oneDArr = twoDArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
 console.log("oneDArr===",oneDArr);

//Use case:Grouping objects by a property

const result = [
    {subject: 'Physics', marks: 41},
    {subject: 'Chemistry', marks: 59},
    {subject: 'Pure Maths', marks: 36},
    {subject: 'Applied Maths', marks: 90},
    {subject: 'English', marks: 64},
];

let initialValue = {
    pass: [], 
    fail: []
}

const groupedResult = result.reduce((accumulator, current) => {
    (current.marks>=50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
    return accumulator;
}, initialValue);

console.log(groupedResult);


 /* 12. reverse()
method reverses the element of an array
*/
array1.reverse();


 /* 13. shift()
method removes the first element from an array and returns that element.
*/

array4.shift();


 /* 14. slice()
Extracts a section of an array and returns a new array.
*/
//array.slice( begin [,end] );
array4.slice(1,3);


 /* 15. some()
method tests whether some element in the array passes the test implemented by the provided function.
// checking any one of element in the array if match the codition (all element) return boolean true. If any of then fail to match return false.
*/
const finalNewArray1 : boolean = array4.some(isCheckThreshold);


 /* 16. splice()
method changes the content of an array, adding new elements while removing old elements.
*/
//array.splice(index, howMany, [element1][, ..., elementN]);

let arr = ["orange", "mango", "banana", "sugar", "tea"];  
let removed = arr.splice(2, 0, "water");  

 /* 17. unshift()
unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
*/
//array.unshift( element1, ..., elementN );

let arr5 = new Array("orange", "mango", "banana", "sugar"); 
let newVal = arr.unshift("water"); 

 /* 18. includes()
method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/

const arrayMy = [1, 2, 3];
console.log(arrayMy.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// expected output: true





