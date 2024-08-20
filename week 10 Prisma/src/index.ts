import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//CRUD operations


//below you can see the prisma's auto generated client ie prisma.user etc
async function insertUser(username:string,password:string,firstName:string,lastName:string) {
    const request = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    });
    console.log(request);
};
// insertUser("ahjsbfjasbdf","123456","Hello","World");

interface UpdateParams{
    firstName:string;
    lastName:string;
}

async function updateUser(username: string, {firstName,lastName}:UpdateParams) {
    const res= await prisma.user.update({
        where:{username:username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}

updateUser('ashitoshsable07',{
    firstName:'Ashhittosh',
    lastName:'Saable'
})