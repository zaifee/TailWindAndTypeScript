"use strict";
// Basic types
// .Primitive types(numbers, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unknown, void, Null, Undefined, Never
let a = 12;
let b = [1, 2, "Mohd Nawaz", { name: "Mohd Qureshi" }, { name: 123 }];
// tuples
// tuples is of fixed size and in array in which position which element will come we have to tell before
// let arr: [string, number] = ["Mohd", 3]; 
let arr2 = [23, "Mohd Nawaz"];
// enums - enumeration 
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPERADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABONDED"] = "Abonded status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.ABONDED;
// / Any, Unknown, void, Null, Undefined, Never
let d; //if we didn't define the type then it will be marked as any 
let e;
e = 45;
// unkown means typescript will be working while on (any) typescript feature remains off
let f;
f = 24;
Name: "Mohd Nawaz";
// we have to use typeof if we want to use unknown 
if (typeof f === 'string') {
    f.toUpperCase();
}
function abcdeg() {
    console.log("hello");
}
function abcded() {
    return 3;
}
function efeg() {
    return true;
}
// null means we are finding that value and that time it is unavailable but might be possible in future it is available
let ef = null;
let ae;
// if we didn't any variable it is marked as undefined 
let efg;
