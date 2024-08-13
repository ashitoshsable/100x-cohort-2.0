import { useState, useEffect } from "react";

export function useOnline(){
    const [online,setOnline] = useState(window.navigator.onLine);
  
    useEffect(()=>{
      window.addEventListener('online',()=>{
        setOnline(true);
      });
  
      window.addEventListener('offline',()=>{
        setOnline(false);
      });
  
    },[]);
  
    return online;
  }