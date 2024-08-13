import { useEffect } from "react";

export function useInterval(func,time){
    useEffect(()=>{
        let a =setInterval(()=>{
            func();
        },time);
        return ()=>{
            clearInterval(a);
        }
    },[])

}