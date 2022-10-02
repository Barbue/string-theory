
/*
xify - returns the same string, but with every character replaced by an 'x'
Examples:
xify('hello') -> 'xxxxx'
xify('hi there') -> 'xxxxxxxx'
 */

/*
funciton name: xify
parameters: a single string - str 
return: returns a string
*/

function xify(str){
    let newStr = "";
    for(let i = 0;i < str.length;i++){
        newStr += "x";
    }
    return newStr;
    }

console.log(xify('Hello'))
console.log(xify('Hi There'))


/*
yellingChars - returns the given string with an exclamation point after each character
Examples:
yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
Hints:
We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
*/

/*
function: yellingChar
parameters: a single string

return: a new string
let newStr = ""
loop
need to add: i, so +=!
need to add; original letters
*/



function yellingChars(str){ let newStr = "";
    for(let i = 0;i < str.length;i++){ 
    newStr += str[i]; // adding back the character from the original string
    newStr += "!"; //adds the exclamation point after it
    // or newStr += str[i] + "i";
    }
    return newStr;
    }

console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));



/*
indexedChars - adds the index of each character before that character in the given string
Examples:
indexedChars('hello') -> '0h1e2l3l4o'
indexedChars('bye') -> '0b1y2e'
Hints:
We can add something BEFORE the current character as well!
*/



function indexedChars(str){
    let newStr = "";
    for(let i = 0;i < str.length;i++){
        newStr += i
        newStr += str[i];
    }
    return newStr;
    }

console.log(indexedChars("hello"));
console.log(indexedChars("bye"));



/**
 exclaim - returns the given sentence with every question mark or period changed to an exclamation point
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!'
 */



function exclaim(str){
    let newStr = "";
    for(i = 0;i < str.length;i++){
    if(str[i] === "?" || str[i] === "."){newStr += "!"
    }
    else{newStr += str[i]
    }
    }
    return newStr
    }

console.log(exclaim("What are you doing? Are you a fool?"));
console.log(exclaim("This is fine."));


/*
truncate - shortens a long string to 15 characters plus an ellipsis (...)
Examples:
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
*/



function truncate(str){
    let newStr = "";
    for(i = 0; i < 15;i++){
    newStr += str[i]
    }
    return newStr + "...";
    }

console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));
console.log(truncate("Well, that's just, like, your opinion man."));



/*
ciEmailify - creates an email from a two-part name
Examples:
ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
*/

/*
changes space to a period (.)
and add @codeimmersives.com
 */



function ciEmailify(str){
    let newStr = "";
    for(i = 0;i < str.length;i++){
    if(str[i] === " "){
        newStr += "."
    }
    else{newStr += str[i];
    }
    }
    return newStr.toLowerCase() + "@codeimmersives.com";
    }

console.log(ciEmailify("colin jaffe"));
console.log(ciEmailify("Anthony DeRosa"));


/*
reverse - reverses the given string
Examples:
reverse('colin') -> 'niloc'
reverse('mesuara') -> 'arausem'
*/



function reverse(str){
    let newStr = "";
    for(i = str.length-1; i >= 0; i--){newStr += str[i]
    }
    return newStr;
    }

console.log(reverse("colin"));
console.log(reverse("mesuara"));



/*
onlyVowels - returns only the vowels from a word
Examples:
onlyVowels('Colin Jaffe') -> 'oiae'
onlyVowels('quickly') -> 'ui'
onlyVowels('Anthony DeRosa') -> 'Aoeoa'
*/

/*
if(str[i].toLowerCase() === "a" || str[i] === )
*/



function onlyVowels(str){
    let newStr = "";
    for(i = 0;i < str.length;i++){
    if(str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u")
        {newStr += str[i];
    }
    }
    return newStr;
    }

console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));



/*
crazyCase - returns the given string with alternating lower and upper cases
Examples:
crazyCase('hello') -> 'hElLo'
crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
crazyCase('YELLING') -> 'yElLiNg'
*/

function crazyCase(str){
let newStr = "";
    for(i = 0;i < str.length; i++){
    if(i === 0 || i === 2 || i === 6 || i === 4 ||  i === 8 || i === 10 || i === 12 || i === 14 || i === 16|| i === 18 ||  i === 20){newStr += str[i].toLowerCase()
    }
    else if(i === 1 || i === 3 || i === 5 || i === 7 || i === 9 || i === 11 || i === 13 || i === 15|| i === 17 ||  i === 19){newStr += str[i].toUpperCase()
    }
    }
    return newStr;
    }

console.log(crazyCase("hello"));
console.log(crazyCase("multiple words here"));
console.log(crazyCase("YELLING"));






