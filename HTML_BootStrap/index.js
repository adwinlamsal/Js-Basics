





// const getTime=()=>{
//     let time =  new Date();
    
// const hour = time.getHours();
// const minute = time.getMinutes();
// const secound = time.getSeconds();

// let result =  String(hour).concat(":", minute,":",secound);





// document.getElementById("result").innerHTML=result;

// }


// setInterval(() => {


// getTime();



    
// }, 100);




const userRole = ["Admin","Vendor"];


const allowRole =['Inverntory Manager',"Vendor"];



CurrentUser=()=>{



allowRole.map((value)=>{
let i=0
for (i=0;i<=userRole.length;i++){

if(value==userRole[i]){

   console.log(value)

}else{
console.log(value)

}


}


});



}




CurrentUser();



