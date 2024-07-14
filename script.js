let search = document.getElementById("btn")
let country = document.getElementById("country")
let result = document.getElementById("result")

search.addEventListener('click', () => {
    let countryname = country.value
    let finalurl = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`
    // console.log(finalurl);
    fetch(finalurl).then(response => response.json()).then(item => {
        result.innerHTML = `
        <img src="${item[0].flags.svg}" class="flagimg" >
        <h2>${item[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital :</h4>
                <span>${item[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent :</h4>
                <span>${item[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Population :</h4>
            <span>${item[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Currency :</h4>
            <span>${item[0].currencies[Object.keys(item[0].currencies)].name}-${Object.keys(item[0].currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Common Language :</h4>
            <span>${Object.values(item[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>
        `
    }).catch(()=>{
        if(countryname.length==0){
            result.innerHTML=`<h3>The input field cannot be empty</h3>`
        }
        else{
            result.innerHTML=`<h3>Please enter a valid country name.</h3>`
        }
    })
})