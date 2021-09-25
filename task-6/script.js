async function fetchData() {
  try {
    const response = await fetch(
      "https://rest-countries-api-techieegy.herokuapp.com/v1/all"
    );
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
    } else {
      throw error("something went wrong");
    }
    data.forEach((item) => {
      let container = document.createElement("div");
      container.setAttribute("class", "container");

      let card = document.createElement("div");
      card.setAttribute("class", "card");
      container.append(card);

      let name = document.createElement("h2");
      name.setAttribute("class", "name");
      name.innerHTML = `${item.name}`;
      card.append(name);

      let image = document.createElement("img");
      image.classList.add("image");
      image.setAttribute("src", item.flags[0]);
      card.append(image);

      let capital = document.createElement("p");
      capital.setAttribute("class", "capital");
      capital.innerHTML = `capital:<span>${item.capital}</span>`;
      card.append(capital);

      let region = document.createElement("p");
      region.setAttribute("class", "region");
      region.innerHTML = `region:<b>${item.region}</b>`;
      card.append(region);

      let latlng = document.createElement("p");
      latlng.setAttribute("class", "latlng");
      latlng.innerHTML = `latlng:<b>${item.latlng}</b>`;
      card.append(latlng);

      if (item.currencies) {
        let currency_code = document.createElement("p");
        currency_code.setAttribute("class", "currency_code");
        currency_code.innerHTML = `currency codes:<b>${item.currencies[0].code},${item.currencies[0].name},${item.currencies[0].symbol}</b>`;
        card.append(currency_code);
      } else {
        let currency_code = document.createElement("p");
        currency_code.setAttribute("class", "currency_code");
        currency_code.innerHTML = "currency codes:<b>none</b>";
        card.append(currency_code);
      }

      document.querySelector("body").append(container);
    });
  } catch (err) {
    console.log(err);
  }
}
fetchData();
