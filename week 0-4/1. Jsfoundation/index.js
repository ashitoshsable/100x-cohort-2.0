const arr=[1,2,3,4,5,6,7,8,9,10];

// Problem statement - multiply each element by 2;
// naive solution
const res=[...arr];
for(let i=0;i<res.length;i++){
    res[i]*=2;
}
console.log(res);

//map method also arrow functions are used
const ans = arr.map((n)=>{
    return n*2;
})
console.log(ans);

//filtering - problem statement - filter out the even values

const result = arr.filter((n)=>{
    if(n%2==0)return true;
    else return false;
})
console.log(result);