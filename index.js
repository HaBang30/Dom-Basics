// Demo event onclick:

// function clickMe() {
//     alert("Hello World");
// }

// Demo addEventListener:
// let demo1 = document.getElementById("demo1");
// demo1.addEventListener('click', clickFunction);
// function clickFunction() {
//     alert("Hello World 1!");
// }


// Demo event onchange:
// function getValue() {
//     let getvalue = document.getElementById("select").value;
//     alert(getvalue);
// }
// let getIdentical = document.getElementById("select");
// getIdentical.addEventListener('onchange', getValue);
// function getValue() {
//     let getValue = document.getElementById("select").value;
//     alert(getValue);
// }

// Demo event onmouseover and onmouseout:
// function mouseover() {
//     document.getElementById("demo2").style.color ='red';
// }
// function mouseout() {
//     document.getElementById("demo2").style.color ="blue";
// }

// Demo event onmouseover and onmouseout:

// let demo = document.getElementById("demo");
// demo.addEventListener('mouseover', mouseover);
// demo.addEventListener('mouseout', mouseout);

// function mouseover() {
//     document.getElementById("demo").style.color ='red';
// }
// function mouseout() {
//     document.getElementById('demo').style.color = "blue";
// }


// Exercise 1: Check even numbers:
// let btn = document.getElementById ("btn");
// btn.addEventListener('click', checkNumber);
// function checkNumber() {
//     let getValue = document.getElementById("number").value;
//     if (getValue % 2 == 0) {
//         alert(getValue + " is even.");
//     } else {
//         alert(getValue + " is odd")
//     }
// }

// Exercise 2: Write a program simple calculator application to perform simple calculations:

//Way 1: We can use 4 function to calculate and return result:

// let add = document.getElementById("add");
// add.addEventListener('click', addition);
// function addition() {
//     let num1 = parseFloat(document.getElementById("number1").value);
//     let num2 = parseFloat(document.getElementById("number2").value);
//     let result = num1 + num2;
//     document.getElementById("result").innerHTML = "Addition is " + result +".";
// }

// let subt = document.getElementById("subt");
// subt.addEventListener('click', subtraction);
// function subtraction() {
//     let num1 = parseFloat(document.getElementById("number1").value);
//     let num2 = parseFloat(document.getElementById("number2").value);
//     let result = num1 - num2;
//     document.getElementById("result").innerHTML = "Subtraction is " + result +".";
// }

// Multiplication function and Division function are the similar 2 function above.


// Way 2: We can to use only one function t calculate and return result:

// function calculate(id) {
//     let num1 = parseFloat(document.getElementById("number1").value);
//     let num2 = parseFloat(document.getElementById("number2").value);
//     if (id == add) {
//         let result = num1 + num2;
//         document.getElementById("result").innerHTML = "Addition is " + result +".";
//     } else if (id == subt){
//         let result = num1 - num2;
//         document.getElementById("result").innerHTML = "Subtraction is " + result +".";
//     } else if (id == multi) {
//         let result = num1 * num2;
//         document.getElementById("result").innerHTML = "Multiplication is " + result +".";
//     } else {
//         let result = num1/num2;
//         document.getElementById("result").innerHTML = "Division is " + result +".";
//     }
// }

// Way 3: Upgrade calculation application to become high-grade more (You can to consult interface calculator of Google):


// Exercise 3: Check a leap year or not a leap year:
let year = parseInt(prompt("Enter a year."));

    if (year%4 == 0 && year%100 !== 0) {
        alert (year + " is a leap year.");
    } else if (year%100 == 0 && year%400 ==0) {
        alert(year + " is a leap year.");
    } else {
        alert(year + " is not a leap year.")
    }

