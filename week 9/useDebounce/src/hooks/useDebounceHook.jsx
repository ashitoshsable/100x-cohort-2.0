import { useState } from "react";
import { useEffect } from "react";

export function useDebounce(val,time){
    const [deBounceValue, setDeBounceValue]=useState(val);

    useEffect(()=>{
        let a = setInterval(()=>{
            setDeBounceValue(val);
        },time)
        return ()=>{
            clearInterval(a);
        }
    },[val])

    return deBounceValue;
}