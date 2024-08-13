import { useEffect, useState } from "react";

export function useMousePointer(){
    const [position, setPostion] = useState({x:0,y:0});

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            setPostion({x:e.clientX,y:e.clientY});
        });
        return () => window.removeEventListener('mousemove',(e)=>{
            setPostion({x:e.clientX,y:e.clientY});
        });
    },[])

    return position;
}