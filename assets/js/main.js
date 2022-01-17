let helloWorld = "Hello World";
const pi = 3.14;
let burjDubai = 828 + "m";
let fullName = "Jan Schmidt";
let eifelTower = 324 + "m";
let camelCase = "camelCase";
let kursStatus = true;
console.log(helloWorld);
console.log(pi);
console.log(kursStatus);
console.log(burjDubai);
console.log(document.URL);
// aufgabe Lev1_1
/*
let name = "Anton";
console.log(name);
let age = 28;
console.log(age);
let job = "trainer";
console.log(job);
let married = true;
console.log(married);
console.log(name + " ist " + age + " Jahre alt und ist verheiratet: " + married);
*/
// Aufgabe lev1_6
/* 
var z = 34;
z = 67;
console.log(z);
---------------
let x = 34;
x = 67;
console.log(x);

const y = 34;
y = 67;
console.log(y);
*/
//Aufgabe Lev1_5
// let carName = "BMW";
// console.log(carName);

// let x = 150;
// console.log(x);

// let y = 50;
// console.log(y);

// let z = x + y;
// console.log("x+y= " + z);

// let firstName;
// let lastName;
// let age;

// firstName = "John";
// lastName = "Doe";
// age = 35;

// console.log(firstName + " " + lastName + " " + age);

//Aufgabe 1_12
// let score = 5 + 5 * 10;
// console.log('Ergebnis: ' + score);

// let score = (5 + 5) * 10;
// console.log('Ergebnis: ' + score);
// let score = 0;
// score = score + 10;
// console.log('Ergebnis: ' + score);
// Hiervon gibt es eine verkürzte Version.
let score = 0;
score += 10;
console.log('Ergebnis: ' + score);

let zahl = 1;
// zahl = zahl + 1;
// zahl += 1;
// console.log(zahl);

// Verwende Inkrement-Operatoren
zahl++;
console.log('increment: ' + zahl);

// Verwende Dekrement-Operatoren
zahl--;
console.log('dekrement: ' + zahl);

// Aufgabe Lev1_13
// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

// Aufgabe Lev1_! document.write()
document.write("<h1> - Hello World!</h1> <p> - Have a nice day! </p>");
let myText = "hello again";
console.log(myText);
let myName = 'Sara ';
let nachName = 'Alawad';
console.log('Name: ' + myName);
console.log('Nachname: ' + nachName);
document.write("Name: " + myName + "<br>Namchname: " + nachName);


let x = "<br>Hello ";
let y = "World<br>"
let z = x + y;
let n = x + " " + y;
let meinString = "Ich bin Erster";
let string = meinString + " Ich komme auf Platz zwei";
console.log(string);
document.write(z);
document.write(n);
document.write(x + " world");

//Aufgabe Lev1_4 popup boxes
window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?");
let alter = prompt("Gib mir bitte dein Alter:");
console.log(alter);

let b = 5;
let a = b * 5 - 3;
alert(a);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);




