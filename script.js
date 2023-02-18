const url= "https://ipapi.co/json/"
const look = document.querySelector("#lookup")
const ipdisplay = document.querySelector(".ip-display")
const locationDisplay = document.querySelector(".location-display")
const geo = document.querySelector(".geo-location")
// const load = document.querySelector(".loading-container")
// const detail = document.querySelector(".data")
look.addEventListener("click",()=>{
    
    fetch(url)
    

.then((res)=> res.json())


.then(data =>{
    ipdisplay.textContent =`Ip :- ${data.ip}`
    locationDisplay.textContent=`Location :- ${data.city},${data.region},${data.country_name}`
    geo.textContent =`Geo Location :- ${data.latitude} Lat, ${data.longitude} Long`
})

})
// function fetch ()
