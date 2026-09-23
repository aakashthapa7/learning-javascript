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

}

