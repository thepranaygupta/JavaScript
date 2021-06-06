var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

//console.log(states[1]); // prints the element at position 2

//console.log(states.length); // print the size of array i.e., 4
states[0] = "Punjab";
//console.log(states);

var user = ["hitesh", "hitesh@lco.dev", 3, 34, true]; // this is not a good practise to use multiple data types in a single way use objects
//console.log(user);

user.pop(); // deletes the last element
user.pop();
//console.log(user);
user.unshift("NEW VALUE");
//console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("newyy"));

console.log(Array.from("hitesh"));
