var a = "This string contains \"double quotes\"";
console.log(a);

a = "This string contains 'single quotes'";
console.log(a);

a = 'This string contains "double quotes"';
console.log(a);

a = 'This string contains \'single quotes\'';
console.log(a);

a = `This string contains 'single quotes' and "double quotes" `
console.log(a);

/*
Escape Sequences - 
\' -> single quote
\" -> double quote
\\ -> backslash
\n -> newline
\r -> carriage return
\t -> tab
\b -> backspace
\f -> form feed
*/

//Concatenation of String
var myStr = "\nConcatenation example - \n" + "This comes first." + "This comes second.\n"
myStr += "This comes third on a new line."
console.log(myStr)


/*
In JavaScript, the + operator is used for both numeric addition 
and string concatenation. When you "add" a number to a string the interpreter 
converts your number to a string and concatenates both together.

When you use the - operator, however, the string is converted back into a number 
so that numeric subtraction may occur.

"" + 1          -> "1"
"1" + 10        -> "110"
"110" + 2       -> "1102"
"1102" - 5      -> 1097
1097 + "8"      -> "10978"
*/

console.log("\nConcatenation and Subtraction using String - ")

str1 = "5";
str2 = "8";
str3 = "hello"

result = str1 + str2;
console.log(result);
console.log(typeof(result))

result = str1 - str2;
console.log(result);
console.log(typeof(result))

result = str1 + str3;
console.log(result);
console.log(typeof(result))

result = str1 - str3;
console.log(result);
console.log(typeof(result))

//Length of String
var abc = "This is a string.";
console.log("\nLength of string is " + abc.length);

abc = 5;
console.log(abc.length);

//Iterating through String
var name = "Aditya";
var firstCharacterOfName = name[0];

console.log("\nIterating the string - ")
for(var i = 0; i < name.length; i++)
{
    console.log(name[i]);
}

//String are immutable.
console.log("\nStrings are immutable example - ")
name = "Jello World"
name[0] = "H";
console.log(name)   //It doesn't change

/*
String using Template literals =>  `string`
This has multiple advantages - 
1. You can have multiline string
2. You can use single and double quotes directly
3. You can use variables directly using ${variable_name}
*/
console.log("\nString using Template literals - ") 
var a = 10;

let tempStr = `This is a string using template literal.
It has multiple lines.
The value of variable a is ${a}`;

console.log(tempStr);
