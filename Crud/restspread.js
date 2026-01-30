const emp={
    id:1,
    name:"Ram",
    salary:"1223456",
    address:"Delhi",
    age:25,
    departmant:"HR"
}

const empcopy={...emp}

const {id,name,salary, ...otherInfo} = emp;
// console.log(otherInfo)

//update the address

let updatetemp={...empcopy,address:"Agra"}
//         OR
// empcopy.address="Agra";
console.log(empcopy);