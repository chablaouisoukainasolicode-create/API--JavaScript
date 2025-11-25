
let container = document.getElementById("container");


function card(carte){
container.innerHTML= "";
carte.forEach((car)=>{
    let countries = document.createElement("div");
    let name = document.createElement("h2");
    name.innerText = car.name;
    let capital = document.createElement("p");
    capital.innerHTML= car.capital;
    let langue = document. createElement("p");
    langue.innerHTML= car.language;
    let drapeux= document. createElement("img");
    drapeux.src= car.flag;
    drapeux.alt= "drapeux" + car.name;
    countries.appendChild(name);
    countries.appendChild(capital);
    countries.appendChild(langue);
    countries.appendChild(drapeux);
     countries.addEventListener('click', function(){
            window.location.href = 'country-details.html?id=' +car.id;
        })
container.appendChild(countries);

})
}
fetch('https://countries-api-hsak.onrender.com/api/countries')
    .then(response => response.json())
    .then(pays=>{
        world = pays
        card(world)
    }    
    )

let select = document.getElementById('select');
select.addEventListener('change', function(){
    container.innerHTML= '';
    if(select.value === '--'){
        card(world)
    } else{
        let contry = world.filter(c=> c.continent ===select.value)
        card(contry)
    }
})