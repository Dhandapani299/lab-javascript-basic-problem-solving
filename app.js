// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
var Prograd1 = "Dhandapani"
// 1.1 Create a variable `ProGrad-1` with the driver's name.
document.writeln(" The driver's name is" + Prograd1 + "\n");
document.writeln("\n");
// 1.2 Print `"The driver's name is XXXX"`.
var Prograd2 = "Kabali"
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
document.writeln("\n");
document.writeln(" The driver's name is" + Prograd2);
// 1.4 Print `"The navigator's name is YYYY"`.


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
if (Prograd1.length > Prograd2.length) {
    document.writeln(" The driver has the longest name, it has " + Prograd1 + " " + "character")
} else if (Prograd1.length < Prograd2.length) {
    document.writeln(" It seems that the navigator has the longest name,, it has " + Prograd2 + " " + "character")
} else {
    document.writeln("Wow, you both have equally long names, " + Prograd2.length + + "   " + "characters!.")
}
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.

function checkVowels(string) {
    let index = [];
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                index[index.length] = i;
        }
    }
    return index;
}

//prints vowel in a string
function display(indices, ProGrad) {
    if (indices.length) {
        document.write(`<br> `);
        document.write(` name is `);
        document.write(ProGrad);
        document.write(`  vowels is `);
        for (let i = 0; i < indices.length; i++) {
            document.write(ProGrad[indices[i]]);
        } document.write(`  index value is `);
        for (let i = 0; i < indices.length; i++) {
            document.write(indices[i]);
        }
    }
    document.write(`<br>`);
}
display(checkVowels(Prograd1), Prograd1);
display(checkVowels(Prograd2), Prograd2);
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx

function checkcase(name) {
    let upper = 0, lower = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] == name[i].toUpperCase()) {
            upper++;
        } else {
            lower++;
        }
    }
    document.writeln(`<br>`)
    document.writeln(name + " number of uppercase " + upper + " number of lowercase " + lower)
}
checkcase(Prograd1);
checkcase(Prograd2);
// - Print the number of upper case characters
// - Print the number of lower case characters

document.writeln(`<br>`)
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let capitals = Prograd1.toUpperCase();
for (let i = 0; i < capitals.length; i++) {
    document.write(capitals[i] + " ")
}
document.writeln(`<br>`)
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let name2 = Prograd2;
for (let i = name2.length - 1; i >= 0; i--) {
    document.write(Prograd2[i]);
}
document.writeln(`<br>`)
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
document.write(Prograd1 + " " + Prograd2);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
document.writeln(`<br>`)
if (Prograd2.startsWith("Ka")) {
    document.write(Prograd2 + " " + Prograd1)
}

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
document.writeln(`<br>`)
if (Prograd1 > Prograd2) {
    document.write(`The driver's name goes first.<br>`);
}
else if (Prograd1 < Prograd2) {
    document.write(`Yo, the navigator goes first definitely.<br>`);
}
else {
    document.write(`What?! You both have the same name?<br>`);
}
document.writeln(`<br>`)
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
document.writeln(`<br>`)
let word = "lorem ipsum generator andlorem ipsum generator andlorem ipsum generator and";
let count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") {
        count++;
    }
}
document.write(count + 1);
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
