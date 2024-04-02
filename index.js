"use strict";
//Q#1
var num = 3;
if (num % 2 === 0) {
    console.log(" num is even ");
}
else {
    console.log("num is odd");
}
if (num > 0) {
    console.log("num is positive ");
}
else if (num < 0) {
    console.log("num is negstive");
}
else if (num = 0) {
    console.log("num is zero");
}
if (num % 2 === 0 && num % 3 === 0) {
    console.log("num is divisible by both 2 and 3");
}
else if (num % 2 === 0) {
    console.log("num is divisible by 2");
}
else if (num % 3 === 0) {
    console.log("num is divisible by 3");
}
else {
    console.log("num is not divisible by both 2 and 3");
}
//Q#2
var age = 25;
var id = "pakistani";
if (age >= 18 && id === "pakistani") {
    console.log("you are eligible to vote ");
}
else {
    console.log("please  obtain a valid ID to vote");
}
//Q#3
var age = 65;
if (age >= 0 && age <= 12) {
    console.log("you are a child");
}
else if (age >= 13 && age <= 19) {
    console.log("you are a teenager");
}
else if (age >= 20 && age <= 59) {
    console.log("you are an adult");
}
else if (age >= 60) {
    console.log(" you are a senior citizen");
}
//Q#4
var month = 3;
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("month is equal to ", 31, "days");
}
else if (month == 2) {
    console.log("month is equal to ", 28, "days");
}
else if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("month is equal to ", 30, "days");
}
else {
    ("invalid input");
}
var year = 2022;
if (year % 4 === 0 || year % 400 == 0) {
    console.log("year is a leap year");
}
else {
    console.log("year is not a leap year");
}
