// reference : https://howtodoinjava.com/typescript/
//https://www.typescriptlang.org/docs/handbook/interfaces.html
//https://www.tutorialspoint.com/typescript/

/**
 * Variable Types: Mostly use Let and const declations 
 * Why used Let and const -  Bloack level scopting We can't  redeclare variables multiple time.
 * Let declation -  we can create WITHOUT Initilizations.
 * Const declation -  Always Initlize the value. Once assigned we can't reassign
 * 
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
