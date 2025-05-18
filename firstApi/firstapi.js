let container = document.getElementById("container");

async function get() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  data.forEach((e) => {
    console.log(data);

    let card = document.createElement("div");
    card.classList.add("card")
    let img = document.createElement("img");
    let common = document.createElement("p");


    let language = document.createElement("p");


    let region = document.createElement("p");
    let population = document.createElement("p");
    let official = document.createElement("p");
    let googleMaps = document.createElement("p");

    img.src = e.flags.png;
    common.innerText = e.name.common;
    common.classList.add("countryName")
    region.innerText = ` - The continent: ${e.region} `;
    population.innerText = ` - The population: ${e.population}`
    official.innerText = ` - ${e.name.official}`
    googleMaps.innerText = `- ${e.maps.googleMaps}`

    card.appendChild(img);
    card.appendChild(common);
    card.appendChild(region);
    card.appendChild(population)
    card.appendChild(official)
    card.appendChild(googleMaps)
    container.appendChild(card);
  });
}
get();
