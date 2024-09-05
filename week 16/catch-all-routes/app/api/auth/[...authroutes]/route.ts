import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest, {params}:{
    params:{
        authroutes:string[]
    }
}){
    console.log(params.authroutes);
    return NextResponse.json({
        message:"hello"
    })
}