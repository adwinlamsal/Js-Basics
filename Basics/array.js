



// const group =[
//     {name:"Krishna",age:24},{name:"Ram",age:40},{name:"Sita",age:30}
// ]


// console.log(group.sort((a,b)=> a.age-b.age));




krishna =()=>{

    const users =[
        {user:"Krishna",password:24},{user:"Ram",password:40},{user:"Sita",password:30}
    ]
    
    users.map((user)=> {


        const {password,...rest}=user;

        console.log(rest);

    });






}



krishna();










