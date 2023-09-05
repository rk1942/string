// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
const firstString = "I am a";
const secondString = "Kalvian";
const outputString = firstString + " " + secondString;
console.log(outputString);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
const myString = "If you fail, never give up because FAIL means 'First Attempt In Learning'";
console.log(myString);

// Challenge 3: Store a string in a variable and display the length of the string.
const herString = "Third is a string";
console.log(herString.length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
const hisString = "This is a string";
console.log(hisString.toUpperCase());

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
const thierString = "I love programming";
const newString = thierString.replace("programming", "JavaScript programming");
console.log(newString);

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
const theString = "This is a string";
console.log(theString.repeat(3));

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
const oldString = "I am a Kalvian";
const myArray = oldString.split(" ");
console.log(myArray);

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
const LString = "Time and Tide wait for none";
console.log(LString.indexOf("Ti"));

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
const AString = "When life gives you lemons make lemonade";
console.log(AString.includes("lemon"));
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
const BString = "You must be the change you wish to see in the world.";
console.log(BString.slice(16, 22)); // Output: change
console.log(BString.substring(45, 51));
