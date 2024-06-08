function element(){
    const place = document.getElementById("res");
    return place;
}

async function signUp(){
    const place = element();
    
    const username = document.getElementById("input1").value;
    const password = document.getElementById("input2").value;
    
    const response = await fetch("http://localhost:3000/signup?username="+username+"&password="+password);
    const ans = await response.json();

    if(ans.msg === "success"){
        place.innerHTML=("Successfully Registered! <br> Token: "+ans.token);
    }else{
        place.innerHTML=("Already Registered!");
    }
};

async function login(){
    const place = element();

    const username = document.getElementById("input1").value;
    const password = document.getElementById("input2").value;

    const response = await fetch("http://localhost:3000/login?username="+username+"&password="+password);
    const ans = await response.text();

    if(ans === "success"){
        place.innerHTML=("Logged in successfully!");
    }else{
        place.innerHTML=("Incorrect User or password!");
    }
}