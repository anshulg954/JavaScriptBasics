// Pattern Assignment
for (let i = 1; i <= 30; i++) {
  // If the number is divisible by 15, print "Hello World"
  if (i % 15 == 0) {
    console.log("hello world");
  } 
  // If the number is divisible by 3, print "Hello"
  else if (i % 3 == 0) {
    console.log("Hello");
  } 
  // If the number is divisible by 5, print "World"
  else if (i % 5 == 0) {
    console.log("World");
  } 
  // If the number is not divisible by 3 or 5, print the number
  else {
    console.log(i);
  }
}

/* Output Pattern:
1
2
Hello
4
World
Hello
7
8
Hello
World
11   
hello
13
14
hello world
*/
