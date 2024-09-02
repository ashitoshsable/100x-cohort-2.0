import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message:"Details fetched successfully!",
        data:{
            name:"Ashitosh Madhukar Sable",
            email:"ashitosh@gmail.com"
        }
    });
};