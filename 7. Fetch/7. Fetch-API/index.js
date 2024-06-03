async function getPersonData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await response.json();    
    console.log(finalData);
}