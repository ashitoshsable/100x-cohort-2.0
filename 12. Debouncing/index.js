let timeout;
function debounce(){
    clearTimeout(timeout);
    timeout = setTimeout(result,1000);
}

async function result(){
    const capital = document.getElementById("input1").value;
    const rate = document.getElementById("input2").value;
    const time = document.getElementById("input3").value;

    const element = document.getElementById("result");

    const response = await fetch("https://sum-server.100xdevs.com/interest?principal="+capital+"&rate="+rate+"&time="+time);
    const ans = await response.json();
    element.innerHTML = "Total is "+ans.total+" and interest is "+ans.interest;
};  