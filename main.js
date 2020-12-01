const form = document.getElementById('covidForm');
const worldForm = document.getElementById('worldForm'); 

form.addEventListener('submit', function(e){
    e.preventDefault();

    var country = document.getElementById('country').value; 
    var url = "https://api.covid19api.com/total/dayone/country/"+country; 

    covidData(url); 

})

worldForm.addEventListener('submit', function(e){
    e.preventDefault();

    
    var worldUrl = "https://api.covid19api.com/world/total"

    worldCovidData(worldUrl); 

})

async function covidData(url) {
    try {
    let response = await fetch(url); 
    let data = await response.json(); 
   

    let length = data.length; 

    let index = length - 1; 

    let confirmed = document.getElementById('confirmed'); 
    let deaths = document.getElementById('deaths'); 


    confirmed.innerHTML = ""; 
    deaths.innerHTML = ""; 

    confirmed.append("Total confirmed cases: " + data[index].Confirmed);
    deaths.append("Total deaths: " + data[index].Deaths);
    } catch (message) {
        throw new Error(message);
      }
}




async function worldCovidData(worldUrl) {
    try {
    let response = await fetch(worldUrl); 
    let data = await response.json(); 
      

    let totalconfirmed = document.getElementById('totalconfirmed'); 
    let totaldeaths = document.getElementById('totaldeaths'); 


    totalconfirmed.innerHTML = ""; 
    totaldeaths.innerHTML = ""; 

    totalconfirmed.append("Total confirmed cases: " + data.TotalConfirmed);
    totaldeaths.append("Total deaths: " + data.TotalDeaths);
    } catch (message) {
        throw new Error(message);
      }
}
















// TEST MED FETCH - ASYNC FUNC BÄTTRE TROLIGEN 



// const form = document.getElementById('covidForm')

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     var country = document.getElementById('country').value; 
//     var url = "https://api.covid19api.com/total/dayone/country/"+country; 


//     fetch(url)
//     .then((response) => {
//         if(!response.ok) {
//             throw Error("Couldnt get info, try another country..");
//         }
//         return response.json(); 
        
//     }).then((data) => {
//        var length = data.length; 
//        var index = length -1; 

//        var confirmed = document.getElementById('confirmed'); 
//        var deaths = document.getElementById('deaths'); 

//        confirmed.innerHTML = ""; 
//        deaths.innerHTML = ""; 
    
//        confirmed.append("Confirmed cases: " + data[index].Confirmed); 
//        deaths.append("Confirmed deaths: " + data[index].Deaths); 

//     }).catch((error) =>
//     console.log(error)); 
// }); 


