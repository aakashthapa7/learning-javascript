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

}

