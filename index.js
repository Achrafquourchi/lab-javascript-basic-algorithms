console.log("I'm ready!");

// Interation 1: Names and Input

const hacker1 = "Cristina";
console.log("The driver's name is " + hacker1);

const hacker2 = "Achraf";
console.log("The navigator's name is " + hacker2);

// Interation 2: Conditionals
let hacker1chars = hacker1.length
let hacker2chars = hacker2.length

if (hacker1chars > hacker2chars) {
  console.log("The driver has the longest name, it has " + hacker1chars + " characters.")
}

else if (hacker2chars > hacker1chars) {
  console.log("The driver has the longest name, it has " + hacker2chars + " characters.")
}

else {
  console.log(" Wow, you both have equally long names, " + hacker1chars + " characters!.")
}

// Interation 3: Loops
// 3.1.

let upperCaseName = "";

for (i = 0; i < hacker1chars; i++) {
upperCaseName += hacker1[i].toUpperCase() + " ";
}

console.log(upperCaseName);

// 3.2.
let reversedName = "";

for (let i = hacker2chars -1; i >= 0; i--) {
 reversedName += hacker2[i];
}

console.log(reversedName);

// 3.3.
const alphaOrder = hacker1.localeCompare(hacker2);

console.log(alphaOrder);

if (alphaOrder === 0) {
  console.log("What?! You both have the same name?");
}
else if (alphaOrder === -1) {
  console.log("The driver's name goes first.");
}
else {
  console.log("Yo, the navigator goes first, definitely.");
}

// Bonus 1:
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lorem lectus. Nulla luctus lectus ac tellus interdum, ut commodo orci rutrum. Proin dictum tellus nec rutrum finibus. Curabitur porttitor, magna condimentum fringilla condimentum, tellus diam dapibus ipsum, id sollicitudin quam orci et augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia enim sit amet augue viverra porttitor. Nam imperdiet justo et metus fermentum euismod. Morbi feugiat porttitor nulla eu volutpat. Suspendisse potenti. Suspendisse pellentesque, leo eu euismod ullamcorper, dui quam pulvinar ex, sed scelerisque sapien lacus vel dolor.
  Ut ac ante nec tellus sollicitudin maximus.Nam pellentesque vitae nunc et molestie. Nunc scelerisque dolor in velit vestibulum ultrices. Nullam fermentum odio dui, et elementum nisl euismod id. Etiam sed justo sit amet nisi imperdiet condimentum at sed ante. Nam congue ante in dolor posuere, vel egestas enim rutrum. Donec a metus ex. Integer blandit ante magna, vel placerat massa pharetra in. Sed ut urna eget dolor ornare porta ut a ante. In sed sollicitudin orci. Morbi ut elementum tortor, eget dictum mi. Integer vitae efficitur magna. Ut pulvinar, neque in eleifend tincidunt, dolor arcu dapibus dolor, eget consectetur elit nulla at ipsum. Nam nec arcu ac tellus laoreet finibus et in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nulla ac tortor condimentum commodo.Curabitur vulputate cursus semper. Fusce egestas justo vitae eleifend tempus. Sed vel molestie odio. Pellentesque pulvinar turpis sed mauris aliquet, nec facilisis sem scelerisque. Phasellus euismod ullamcorper est non elementum. Suspendisse potenti. Nulla dignissim sapien ac turpis bibendum, at dictum massa rutrum."
console.log(longText.length)


// I think there is something missing in my Code
let count = 0;

for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];

  if (twoChars === "et") {
    count++;
  } 

}

// Check your code:



// Bonus 2:
thanks

phraseToCheck = "racecar";

let reversedPhrase = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reversedPhrase += phraseToCheck[i];
  if (phraseToCheck === reversedPhrase) {
    console.log("This is a palindrome.");
  }
  else {
    console.log("This is not a palindrome.");
  }
}

