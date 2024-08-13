function greet(firstName:string){
    console.log("Hello "+firstName);
}

greet("Ashitosh");

function sum(a:number,b:number):number{ 
    return a+b;
}

console.log("The value of 7+3 is "+sum(7,3));

function isLegal(age:number):boolean{
    return (age>=18)?true:false;
}

console.log(isLegal(18));


interface User{
    firstName:string,
    lastName:string,
    age:number
}

function legal(user:User):boolean{
    return user.age>=18?true:false;
}

const a = legal({
    firstName:"Ashitosh",
    lastName:"Sable",
    age:21
})

console.log("The age of the person is "+a); 

