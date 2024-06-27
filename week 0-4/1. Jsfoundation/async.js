function total(n){
    let res=0;
    for(let a=1;a<=n;a++){
        res+=a;
    }
    return res;
}

setTimeout(()=>{
    console.log(total(100000))
},1000);
console.log("Hello World");