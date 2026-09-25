// to bring milk from the shop

function getMilk(money,costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("Buy " + bottlesCalc(money, costPerBottle) + " bottles of Milk");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return changeCalc(money, costPerBottle);
}

function bottlesCalc(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function changeCalc(startingMoney, costPerBottle){
    var remChange = startingMoney % costPerBottle;
    return remChange;
}

var finalChange = getMilk(10,1.5);
console.log("The remaining change is " + finalChange);

// Love Calculator
var first = prompt("Provide your name:");
var second = prompt("Your crush name:");
var loveScore = Math.random();
loveScore =  loveScore*100;
loveScore =  (Math.floor(loveScore))+1;
alert("You are "+loveScore+"% Compatible." );

if (loveScore > 70) {
    alert("You are a perfect match!");
} else if (loveScore > 30 && loveScore <= 70) {
    alert("You are a good match!");
} else {
    alert("You are not a good match.");
}

// Working with array
var friends = ["John", "Jane", "Jack", "Jill", "James", "Jenny"];
var person = prompt("State your name:");
if (friends.includes(person)) {
    alert("Welcome, " + person + "!");
} else {
    alert("Get the fuck out, " + person + ",you little piece of shit.");
}

// Fizz buzz problem solution
var output = [];
var count = 1;
function fizzBuzz() {
    while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }   
    count++;
    }
    console.log(output);
}



function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var output = [];
    var a = 0;
    var b = 1;
    var count = 1;
    
    while (count <= n){
        if (count === 1) {
            output.push(a);
        } else if(count === 2 ) {
            output.push(b);
        } else {
            var c = a + b;
            output.push(c);
            a = b;
            b = c;
        }
        count++;
    }
    return output;
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

