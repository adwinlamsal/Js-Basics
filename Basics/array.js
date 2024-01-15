



// const group =[
//     {name:"Krishna",age:24},{name:"Ram",age:40},{name:"Sita",age:30}
// ]


// console.log(group.sort((a,b)=> a.age-b.age));




// krishna =()=>{

//     const users =[
//         {user:"Krishna",password:24},{user:"Ram",password:40},{user:"Sita",password:30}
//     ]
    
//     users.map((user)=> {


//         const {password,...rest}=user;

//         console.log(rest);

//     });

// }

// krishna();



//every is bool checking every value

//some check every if one value satisfy condition it return true;


//reduce is for manipulatin each iteams



// const value = "the fox is sly";



// const properCase =(value)=>{

// const array =value.split(' ');



// array.map((each)=>{

// let hello = each.split("")

//  hello[0]= hello[0].toUpperCase();


// const properCasevalue = hello.join("");

// return properCasevalue;
// });



// }

// const properCaseNew = properCase.join(" ");

// console.log(properCaseNew)



// properCase(value);


const properCase = (proper) => {

    const splitting = proper.split(" ");
  
    const up = splitting.map((nSp) => {
  
      const newSplit = nSp.split("");
  
      newSplit[0] = newSplit[0].toUpperCase();
  
      return newSplit.join("");
  
    });
  
   
  
    const finalAns = up.join(" ");
  
    console.log(finalAns);
  
  };
  
   
  
  properCase("the fox is sly");























