const utils=require('./stringUtils.js');

const text = "nodejs is awesome";

console.log("Capitalized:", utils.capitalize(text));
console.log("Reversed:", utils.reverse(text));
console.log("Vowel Count:", utils.countVowels(text));