async function result(){
    const num1 = document.getElementById("firstInput").value;
    const num2 = document.getElementById("secondInput").value;

    const element = document.getElementById("finalSum");

    // Js working on the frontend
    // const sum = parseInt(num1)+parseInt(num2);
    // element.innerHTML = "The sum of two numbers is "+sum;

    // Now connecting the logic to the backend - Promise way
    // fetch("https://sum-server.100xdevs.com/sum?a="+num1+"&b="+num2).then(function(response){
    //     response.text().then(function(ans){
    //         console.log(ans);
    //         element.innerHTML = "The sum of two numbers is "+ans;
    //     });
    // });

    //async await way
    const response = await fetch("https://sum-server.100xdevs.com/sum?a="+num1+"&b="+num2);
    const ans = await response.text();
    element.innerHTML = "The sum of two numbers is "+ans;
};