/*If else Statement */

// const name = (prompt("Enter your name"))

// if(name==="Balkrishna Lamsal"){

// console.log("Welcome admin")
// alert("Welcome admin")

// }else{

// console.log("Welcome Guest")
// alert("Welcome Guest")
// }

/**  Switch Case Practice */

// const number = Number(prompt("Enter number between 1 to 7"));
// switch (number) {
//   case 1:
//     console.log("Sunday");

//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thrusday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid");
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("3*" + i + "=" + 3 * i);
// }

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i = i + 2;
// }

// function Area(a) {
//   console.log("The are of given length is " + a * a);
// }

// Area(5);

// function personName(firstName, middleName, lastNAme) {
//   let fullName = `${(firstName + middleName, lastNAme)}`;

//   return fullName;
// }

// let resultName = personName("bal", "krishna", "lamsal");

// Write a program to find a longest word among given paramaters.

// function longestWord(a, b, c) {
//   // if(a.length>b.length || )

//   a.length > b.length
//     ? console.log(a)
//     : b.length > c.length
//     ? console.log(b)
//     : console.log(c);
// }

// longestWord("Apple", "badasfsafsdf", "asdfsdfasfasfasfdsf", "Dog");

// let a = "krishna";

// const sum = (apple) => console.log(apple.toUpperCase());

// Upper(a);

//IIFES

//Run Immedietley without calling;

// (
//   function (){
// }

// )();

//Closers

//Cannot be changed;

// I cannot change while passing through parameter

// function krishna()
// {

// let password = "Krishna"

// }

//defalut function

// const pagination = (page, limit) => {
//   console.log(page, limit);
// };

// pagination(2, 10);

// const admin = (name,role="Guest") => {
//   if (name == "Krishna") {
//     console, console.log("You are admin");
//   } else {
//     console.log(role);
//   }
// };

// admin();

// const multiply = (number, defalut = 5) => {
//   if (number == null) {
//     i = 1;
//     for (i; i <= 10; i++) {
//       console.log(`${defalut + "*" + i + "=" + defalut * i}`);
//     }
//   } else {
//     i = 1;
//     for (i; i <= 10; i++) {
//       console.log(`${number * i + "=" + number * i}`);
//     }
//   }
// };

// multiply();

// CI = () => {};

// const compoundInterest =
//   principal * Math.pow(1 + R / numberofyear, Numberofyear * T);




 // WEb scraping

//Snippig data from website

//Ecma Script

//ES6  arrowfunction



// Objects //



// const Sample = (a) => {
//   let nonRepeated = "";

//   for (let i = 0; i < a.length; i++) {
//     if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
//       nonRepeated += a[i];
//     }
//   }

//   console.log(nonRepeated);
// };

// const a = "abacddbec";
// Sample(a);


// const krishna=(a)=>{

// console.log(a.split(''));


// }

// let a = "Apple"

// krishna(a);





//Object




/// this keyword is use on Local function / and can use only on es5



const person = {
  name:"Krishna",
  age:1992,
  getAge:function (){

   let newage = 2080 - this.age;

   return newage;
  }
}


// console.log(person.getAge());







// when we use this keyword on arrow fuction it calls globally


const newperson = {
    name:"Krishna",
    age:1992,
    getAge: ()=>{
  
     let newage = 2080 - newperson.age;
  
     return newage;
    }
  }
  
  
  
  
//   console.log(newperson.getAge());




// console.log(newperson.age=1966)























