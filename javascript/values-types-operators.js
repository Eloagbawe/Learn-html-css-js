//value types: string, number, boolean, NaN, null, undefined etc
//operators: + - * / % > < || && etc

//string

var name = "Josh";
console.log(name + " is a boy");
console.log("This is a new line \n and this is another one");
console.log("This is a line \t and I just added a tab to it");
console.log(`Ngozi is ${3 * 7} years old`);

//number
console.log(5e3);
console.log(5 * 3 - 4);
console.log(5 * (3 - 4));


//Type conversions
console.log("6" + 2);
console.log("6" - 2);
console.log("six" + 2);

//Boolean

console.log(3 > 4);
console.log("jane" > "john");
console.log("janet" > "Jonah");

//unary operators
console.log(typeof 2);
console.log(-(4 + 2));

//binary operators
console.log(6 * 8);

//ternary operators
console.log(true ? 3 : 4);
console.log(false ? 3 : 4);

//comparisms
console.log("3" == 3);
console.log("3" === 3);
console.log("3" !== 3);

//short-circuiting of logical operators
console.log(3 || 6);
console.log (3 && 6);
console.log(true || 70);
console.log(false || 70);
console.log(true && 70);
console.log(false && 70);
