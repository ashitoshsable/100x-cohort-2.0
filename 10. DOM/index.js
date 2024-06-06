function result(){

    const num1 = document.getElementById("firstInput").value;
    const num2 = document.getElementById("secondInput").value;
    const element = document.getElementById("finalSum");
    
    const sum = parseInt(num1)+parseInt(num2);
    element.innerHTML = "The sum of two numbers is "+sum;

    // if(typeof(num1)==='number' && typeof(num2)==='number'){
    //     const sum = num1+num2;
    //     element.innerHTML = "The sum of two numbers is "+sum;
    // }else{
    //     element.innerHTML = "The inputs aren't numbers";
    // }
}