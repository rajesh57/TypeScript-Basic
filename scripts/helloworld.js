"use strict";
// reference : https://howtodoinjava.com/typescript/
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var testVar1 = 30; // Assign any type of values number or string or boolean or object
var testVar2 = "Rajesh";
var testVar3 = {};
var empVar1 = 40; // only allow number
var empVar2 = "Kumar"; // only allow string.
var empVar3 = true; // Only allow boolean.
var sentance = "My name " + empVar2 + " am new to Type script"; // Embedded expression.
console.log("test here ==", sentance);
/**
 * Array
 ****************************************************************************************************
 */
var expArr1 = ["Hi there", "am rajesh"];
var expArr2 = [1, 2, 3];
var expArr3 = [true, false];
console.log("expArr1 ==", expArr1);
// Multiple data types  array declaration.
var expArr4 = [1, 2, true];
// Nested Array :
var expArr5 = [[1, 2, 3, 4]];
/**
 * Tuples
 ****************************************************************************************************
 *Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
 */
var testTuple;
testTuple = ["example.com", 10]; // Correct declration
//testTuple = [10, "test.com"]; // error
/**
 * Enums
 ****************************************************************************************************
 */
// Creating Enum
var AddVal;
(function (AddVal) {
    AddVal[AddVal["tVal1"] = 10] = "tVal1";
    AddVal[AddVal["tVal2"] = 20] = "tVal2";
})(AddVal = exports.AddVal || (exports.AddVal = {}));
// Getting value from Enum
var getVal = AddVal.tVal1;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Orange"] = 3] = "Orange";
})(Color = exports.Color || (exports.Color = {}));
var findColor = Color[2];
/**
 * Const
 ****************************************************************************************************
 */
var testNum = 10;
var obj1 = {
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
var testArrowFun = function () {
    return 10;
};
console.log("test Arrow fun", testArrowFun());
// Alternate Way :
var testFun1 = function () { return 10; };
console.log("testFun1 Arrow fun", testFun1());
var testFun2 = function (param1) { return 10 + param1; };
console.log("testFun2 Arrow fun", testFun2(10));
var testFun3 = function (param1, param2) { return 10 + param1 + param2; };
console.log("testFun3 Arrow fun", testFun3(10, 30));
/**
 * Spread Operator
 *The spread operator (in form of ellipsis) can be used to initialize arrays and objects from another array or object. You can also use spread operator for object destructuring.
 ****************************************************************************************************
 */
//Initialize arrays another array
//Create new array from existing array
var origArrayOne = [1, 2, 3]; //1,2,3
var origArrayTwo = [4, 5, 6]; //4,5,6
//Create new array from existing array
var copyArray = __spreadArrays(origArrayOne); //1,2,3
//Create new array from existing array + more elements
var newArray = __spreadArrays(origArrayOne, [7, 8]); //1,2,3,7,8
//Create array by merging two arrays
var mergedArray = __spreadArrays(origArrayOne, origArrayTwo); //1,2,3,4,5,6
//Initialize Objects another Object
//Create new object from existing object
var origObjectOne = { a: 1, b: 2, c: 3 }; //{a: 1, b: 2, c: 3}
var origObjectTwo = { d: 4, e: 5, f: 6 }; //{d: 4, e: 5, f: 6}
//Create new object from existing object
var copyObject = __assign({}, origObjectOne); //{a: 1, b: 2, c: 3}
//Create new object from existing object + more elements
var newObject = __assign(__assign({}, origObjectOne), { g: 7, h: 8 }); //{a: 1, b: 2, c: 3, g: 7, h: 8}
//Create object by merging two objects
var mergedObject = __assign(__assign({}, origObjectOne), origObjectTwo); //{a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
// create an object (myEmp1) with type of (Person) interface
var myEmp1 = {
    name1: "raj",
    name2: "kumar",
    age: 30
};
console.log("myEmp1 name1 ==", myEmp1.name1);
var myEmp2 = {
    name1: "raj",
    name2: "kumar"
};
