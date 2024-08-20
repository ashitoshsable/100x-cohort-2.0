interface User{
    name:string,
    age:number
}

function sumOfAge(user1:User,user2:User):number{
    return user1.age+user2.age;
}

console.log(sumOfAge({
    name:"Ashitosh",
    age:21
},{
    name:"Rohan",
    age:21
}));