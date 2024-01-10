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
  
  
  console.log(person.getAge());





// Spread Operator  //Exclude



const {age,...rest}=person;

console.log(rest);






  
  