function test1() {
  var a = 3;
  var b = 8;
  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:

  var temp;
  temp = a;
  a = b;
  b = temp;

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}

function test2() {
  // Character count using length and string concatenation
  var text = prompt("Enter some text to tweet:");
  var textLength = text.length;
  alert("You have written " + textLength + " characters." + " Now you have " + (280 - text.length) + " characters left.");

  // Reducing the text to fit within the character limit
  var text2 = prompt("Enter some text to tweet:");
  var cuttext2 = text2.slice(0, 280);
  alert("Your tweet is: " + cuttext2);
  // alternate method to reduce the text to fit within the character limit
  alert("Your tweet is: " + prompt("Enter some text to tweet:").slice(0, 280)); 

  //Changind case of the text using toUpperCase() and toLowerCase()
  var text3 = prompt("Enter your name: ");
  var len = text3.length;
  var first = text3.slice(0, 1);
  var rest = text3.slice(1, len);
  alert("Hello: " + first.toUpperCase() + rest.toLowerCase());

}

// function test3() {
//    //Changind case of the text using toUpperCase() and toLowerCase() but only using the console.log() method
//   var text3 = console.log("Enter your name: ");
//   var len = text3.length;
//   var first = text3.slice(0, 1);
//   var rest = text3.slice(1, len);
//   console.log("Hello: " + first.toUpperCase() + rest.toLowerCase());
// }
// test3();

test1();

//Karel IDE chess board problem solution

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   straightRight();
   straightLeft();
   straightRight();
   straightLeft();
   straightRight();
}
function straightRight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();

}
function straightLeft(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}