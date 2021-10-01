let dt = new Date();
let date = dt.toDateString();
document.getElementById("date").innerHTML = date;
async function asyncFun() {
  try {
    const response = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);

      data.results.forEach((article) => {
        const body = document.querySelector("body");

        const container = document.createElement("div");
        container.setAttribute("class", "container");
        container.setAttribute("id", "home");
        body.append(container);

        const card = document.createElement("div");
        card.setAttribute("class", "card");
        container.append(card);

        const h3 = document.createElement("h3");
        h3.setAttribute("class", "h3 text-primary");
        h3.innerHTML = "HOME";
        card.append(h3);

        const h5 = document.createElement("h5");
        h5.setAttribute("class", "h5");
        h5.innerHTML = article.title;
        card.append(h5);

        const day = document.createElement("h6");
        day.innerHTML = article.created_date;
        card.append(day);

        const para = document.createElement("p");
        para.innerHTML = article.abstract;
        card.append(para);

        const card2 = document.createElement("div");
        card2.setAttribute("class", "col-md-4");
        card.append(card2);

        const img = document.createElement("img");
        img.setAttribute("class", "img-thumbnail");
        img.setAttribute("src", article.multimedia[0].url);
        card2.append(img);

        const a = document.createElement("a");
        a.setAttribute("href", article.url);
        a.innerHTML = "continue reading";
        card.append(a);
      });
    } else {
      throw "something went wrong";
    }
  } catch (err) {
    console.log(err);
  }
}
asyncFun();

async function worldFun() {
  try {
    const response2 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response2.status === 200) {
      const data2 = await response2.json();
      console.log(data2);
      data2.results.forEach((article) => {
        const body2 = document.querySelector("body");

        const container2 = document.createElement("div");
        container2.setAttribute("class", "container");
        container2.setAttribute("id", "world");
        body2.append(container2);

        const card_world = document.createElement("div");
        card_world.setAttribute("class", "card");
        container2.append(card_world);

        const subheading_world = document.createElement("h3");
        subheading_world.setAttribute("class", "text-primary");
        subheading_world.innerHTML = "WORLD";
        card_world.append(subheading_world);

        const title_world = document.createElement("h5");
        title_world.innerHTML = article.title;
        card_world.append(title_world);

        const day_world = document.createElement("h6");
        day_world.innerHTML = article.created_date;
        card_world.append(day_world);

        const para_world = document.createElement("p");
        para_world.innerHTML = article.abstract;
        card_world.append(para_world);

        const card2_world = document.createElement("div");
        card2_world.setAttribute("class", "col-md-4");
        card_world.append(card2_world);

        const a_world = document.createElement("a");
        a_world.setAttribute("href", article.url);
        a_world.innerHTML = "continue reading";
        card_world.append(a_world);

        const img_world = document.createElement("img");
        img_world.setAttribute("class", "img-thumbnail");
        img_world.setAttribute("src", article.multimedia[0].url);
        card2_world.append(img_world);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function politics() {
  try {
    const response3 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response3.status === 200) {
      const data3 = await response3.json();
      console.log(data3);
      data3.results.forEach((article) => {
        const body3 = document.querySelector("body");

        const container3 = document.createElement("div");
        container3.setAttribute("class", "container");
        container3.setAttribute("id", "politics");
        body3.append(container3);

        const card_politics = document.createElement("div");
        card_politics.setAttribute("class", "card");
        container3.append(card_politics);

        const subheading_politics = document.createElement("h3");
        subheading_politics.setAttribute("class", "text-primary");
        subheading_politics.innerHTML = "POLITICS";
        card_politics.append(subheading_politics);

        const title_politics = document.createElement("h5");
        title_politics.innerHTML = article.title;
        card_politics.append(title_politics);

        const day_politics = document.createElement("h6");
        day_politics.innerHTML = article.created_date;
        card_politics.append(day_politics);

        const para_politics = document.createElement("p");
        para_politics.innerHTML = article.abstract;
        card_politics.append(para_politics);

        const card2_politics = document.createElement("div");
        card2_politics.setAttribute("class", "col-md-4");
        card_politics.append(card2_politics);

        const a_politics = document.createElement("a");
        a_politics.setAttribute("href", article.url);
        a_politics.innerHTML = "continue reading";
        card_politics.append(a_politics);

        const img_politics = document.createElement("img");
        img_politics.setAttribute("class", "img-thumbnail");
        img_politics.setAttribute("src", article.multimedia[0].url);
        card2_politics.append(img_politics);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function magazine() {
  try {
    const response4 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response4.status === 200) {
      const data4 = await response4.json();
      console.log(data4);
      data4.results.forEach((article) => {
        const body4 = document.querySelector("body");

        const container4 = document.createElement("div");
        container4.setAttribute("class", "container");
        container4.setAttribute("id", "magazine");
        body4.append(container4);

        const card_magazine = document.createElement("div");
        card_magazine.setAttribute("class", "card");
        container4.append(card_magazine);

        const subheading_magazine = document.createElement("h3");
        subheading_magazine.setAttribute("class", "text-primary");
        subheading_magazine.innerHTML = "MAGAZINE";
        card_magazine.append(subheading_magazine);

        const title_magazine = document.createElement("h5");
        title_magazine.innerHTML = article.title;
        card_magazine.append(title_magazine);

        const day_magazine = document.createElement("h6");
        day_magazine.innerHTML = article.created_date;
        card_magazine.append(day_magazine);

        const para_magazine = document.createElement("p");
        para_magazine.innerHTML = article.abstract;
        card_magazine.append(para_magazine);

        const card2_magazine = document.createElement("div");
        card2_magazine.setAttribute("class", "col-md-4");
        card_magazine.append(card2_magazine);

        const a_magazine = document.createElement("a");
        a_magazine.setAttribute("href", article.url);
        a_magazine.innerHTML = "continue reading";
        card_magazine.append(a_magazine);

        const img_magazine = document.createElement("img");
        img_magazine.setAttribute("class", "img-thumbnail");
        img_magazine.setAttribute("src", article.multimedia[0].url);
        card2_magazine.append(img_magazine);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}
async function technology() {
  try {
    const response5 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response5.status === 200) {
      const data5 = await response5.json();
      console.log(data5);
      data5.results.forEach((article) => {
        const body5 = document.querySelector("body");

        const container5 = document.createElement("div");
        container5.setAttribute("class", "container");
        container5.setAttribute("id", "technology");
        body5.append(container5);

        const card_technology = document.createElement("div");
        card_technology.setAttribute("class", "card");
        container5.append(card_technology);

        const subheading_technology = document.createElement("h3");
        subheading_technology.setAttribute("class", "text-primary");
        subheading_technology.innerHTML = "TECHNOLOGY";
        card_technology.append(subheading_technology);

        const title_technology = document.createElement("h5");
        title_technology.innerHTML = article.title;
        card_technology.append(title_technology);

        const day_technology = document.createElement("h6");
        day_technology.innerHTML = article.created_date;
        card_technology.append(day_technology);

        const para_technology = document.createElement("p");
        para_technology.innerHTML = article.abstract;
        card_technology.append(para_technology);

        const card2_technology = document.createElement("div");
        card2_technology.setAttribute("class", "col-md-4");
        card_technology.append(card2_technology);

        const a_technology = document.createElement("a");
        a_technology.setAttribute("href", article.url);
        a_technology.innerHTML = "continue reading";
        card_technology.append(a_technology);

        const img_technology = document.createElement("img");
        img_technology.setAttribute("class", "img-thumbnail");
        img_technology.setAttribute("src", article.multimedia[0].url);
        card2_technology.append(img_technology);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function science() {
  try {
    const response6 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response6.status === 200) {
      const data6 = await response6.json();
      console.log(data6);
      data6.results.forEach((article) => {
        const body6 = document.querySelector("body");

        const container6 = document.createElement("div");
        container6.setAttribute("class", "container");
        container6.setAttribute("id", "science");
        body6.append(container6);

        const card_science = document.createElement("div");
        card_science.setAttribute("class", "card");
        container6.append(card_science);

        const subheading_science = document.createElement("h3");
        subheading_science.setAttribute("class", "text-primary");
        subheading_science.innerHTML = "SCIENCE";
        card_science.append(subheading_science);

        const title_science = document.createElement("h5");
        title_science.innerHTML = article.title;
        card_science.append(title_science);

        const day_science = document.createElement("h6");
        day_science.innerHTML = article.created_date;
        card_science.append(day_science);

        const para_science = document.createElement("p");
        para_science.innerHTML = article.abstract;
        card_science.append(para_science);

        const card2_science = document.createElement("div");
        card2_science.setAttribute("class", "col-md-4");
        card_science.append(card2_science);

        const a_science = document.createElement("a");
        a_science.setAttribute("href", article.url);
        a_science.innerHTML = "continue reading";
        card_science.append(a_science);

        const img_science = document.createElement("img");
        img_science.setAttribute("class", "img-thumbnail");
        img_science.setAttribute("src", article.multimedia[0].url);
        card2_science.append(img_science);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function health() {
  try {
    const response7 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response7.status === 200) {
      const data7 = await response7.json();
      console.log(data7);
      data7.results.forEach((article) => {
        const body7 = document.querySelector("body");

        const container7 = document.createElement("div");
        container7.setAttribute("class", "container");
        container7.setAttribute("id", "health");
        body7.append(container7);

        const card_health = document.createElement("div");
        card_health.setAttribute("class", "card");
        container7.append(card_health);

        const subheading_health = document.createElement("h3");
        subheading_health.setAttribute("class", "text-primary");
        subheading_health.innerHTML = "HEALTH";
        card_health.append(subheading_health);

        const title_health = document.createElement("h5");
        title_health.innerHTML = article.title;
        card_health.append(title_health);

        const day_health = document.createElement("h6");
        day_health.innerHTML = article.created_date;
        card_health.append(day_health);

        const para_health = document.createElement("p");
        para_health.innerHTML = article.abstract;
        card_health.append(para_health);

        const card2_health = document.createElement("div");
        card2_health.setAttribute("class", "col-md-4");
        card_health.append(card2_health);

        const a_health = document.createElement("a");
        a_health.setAttribute("href", article.url);
        a_health.innerHTML = "continue reading";
        card_health.append(a_health);

        const img_health = document.createElement("img");
        img_health.setAttribute("class", "img-thumbnail");
        img_health.setAttribute("src", article.multimedia[0].url);
        card2_health.append(img_health);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function sports() {
  try {
    const response8 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response8.status === 200) {
      const data8 = await response8.json();
      console.log(data8);
      data8.results.forEach((article) => {
        const body8 = document.querySelector("body");

        const container8 = document.createElement("div");
        container8.setAttribute("class", "container");
        container8.setAttribute("id", "sports");
        body8.append(container8);

        const card_sports = document.createElement("div");
        card_sports.setAttribute("class", "card");
        container8.append(card_sports);

        const subheading_sports = document.createElement("h3");
        subheading_sports.setAttribute("class", "text-primary");
        subheading_sports.innerHTML = "SPORTS";
        card_sports.append(subheading_sports);

        const title_sports = document.createElement("h5");
        title_sports.innerHTML = article.title;
        card_sports.append(title_sports);

        const day_sports = document.createElement("h6");
        day_sports.innerHTML = article.created_date;
        card_sports.append(day_sports);

        const para_sports = document.createElement("p");
        para_sports.innerHTML = article.abstract;
        card_sports.append(para_sports);

        const card2_sports = document.createElement("div");
        card2_sports.setAttribute("class", "col-md-4");
        card_sports.append(card2_sports);

        const a_sports = document.createElement("a");
        a_sports.setAttribute("href", article.url);
        a_sports.innerHTML = "continue reading";
        card_sports.append(a_sports);

        const img_sports = document.createElement("img");
        img_sports.setAttribute("class", "img-thumbnail");
        img_sports.setAttribute("src", article.multimedia[0].url);
        card2_sports.append(img_sports);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function arts() {
  try {
    const response9 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response9.status === 200) {
      const data9 = await response9.json();
      console.log(data9);
      data9.results.forEach((article) => {
        const body9 = document.querySelector("body");

        const container9 = document.createElement("div");
        container9.setAttribute("class", "container");
        container9.setAttribute("id", "arts");
        body9.append(container9);

        const card_arts = document.createElement("div");
        card_arts.setAttribute("class", "card");
        container9.append(card_arts);

        const subheading_arts = document.createElement("h3");
        subheading_arts.setAttribute("class", "text-primary");
        subheading_arts.innerHTML = "ARTS";
        card_arts.append(subheading_arts);

        const title_arts = document.createElement("h5");
        title_arts.innerHTML = article.title;
        card_arts.append(title_arts);

        const day_arts = document.createElement("h6");
        day_arts.innerHTML = article.created_date;
        card_arts.append(day_arts);

        const para_arts = document.createElement("p");
        para_arts.innerHTML = article.abstract;
        card_arts.append(para_arts);

        const card2_arts = document.createElement("div");
        card2_arts.setAttribute("class", "col-md-4");
        card_arts.append(card2_arts);

        const a_arts = document.createElement("a");
        a_arts.setAttribute("href", article.url);
        a_arts.innerHTML = "continue reading";
        card_arts.append(a_arts);

        const img_arts = document.createElement("img");
        img_arts.setAttribute("class", "img-thumbnail");
        img_arts.setAttribute("src", article.multimedia[0].url);
        card2_arts.append(img_arts);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function fashion() {
  try {
    const response10 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response10.status === 200) {
      const data10 = await response10.json();
      console.log(data10);
      data10.results.forEach((article) => {
        const body10 = document.querySelector("body");

        const container10 = document.createElement("div");
        container10.setAttribute("class", "container");
        container10.setAttribute("id", "fashion");
        body10.append(container10);

        const card_fashion = document.createElement("div");
        card_fashion.setAttribute("class", "card");
        container10.append(card_fashion);

        const subheading_fashion = document.createElement("h3");
        subheading_fashion.setAttribute("class", "text-primary");
        subheading_fashion.innerHTML = "FASHION";
        card_fashion.append(subheading_fashion);

        const title_fashion = document.createElement("h5");
        title_fashion.innerHTML = article.title;
        card_fashion.append(title_fashion);

        const day_fashion = document.createElement("h6");
        day_fashion.innerHTML = article.created_date;
        card_fashion.append(day_fashion);

        const para_fashion = document.createElement("p");
        para_fashion.innerHTML = article.abstract;
        card_fashion.append(para_fashion);

        const card2_fashion = document.createElement("div");
        card2_fashion.setAttribute("class", "col-md-4");
        card_fashion.append(card2_fashion);

        const a_fashion = document.createElement("a");
        a_fashion.setAttribute("href", article.url);
        a_fashion.innerHTML = "continue reading";
        card_fashion.append(a_fashion);

        const img_fashion = document.createElement("img");
        img_fashion.setAttribute("class", "img-thumbnail");
        img_fashion.setAttribute("src", article.multimedia[0].url);
        card2_fashion.append(img_fashion);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function food() {
  try {
    const response11 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response11.status === 200) {
      const data11 = await response11.json();
      console.log(data11);
      data11.results.forEach((article) => {
        const body11 = document.querySelector("body");

        const container11 = document.createElement("div");
        container11.setAttribute("class", "container");
        container11.setAttribute("id", "food");
        body11.append(container11);

        const card_food = document.createElement("div");
        card_food.setAttribute("class", "card");
        container11.append(card_food);

        const subheading_food = document.createElement("h3");
        subheading_food.setAttribute("class", "text-primary");
        subheading_food.innerHTML = "FOOD";
        card_food.append(subheading_food);

        const title_food = document.createElement("h5");
        title_food.innerHTML = article.title;
        card_food.append(title_food);

        const day_food = document.createElement("h6");
        day_food.innerHTML = article.created_date;
        card_food.append(day_food);

        const para_food = document.createElement("p");
        para_food.innerHTML = article.abstract;
        card_food.append(para_food);

        const card2_food = document.createElement("div");
        card2_food.setAttribute("class", "col-md-4");
        card_food.append(card2_food);

        const a_food = document.createElement("a");
        a_food.setAttribute("href", article.url);
        a_food.innerHTML = "continue reading";
        card_food.append(a_food);

        const img_food = document.createElement("img");
        img_food.setAttribute("class", "img-thumbnail");
        img_food.setAttribute("src", article.multimedia[0].url);
        card2_food.append(img_food);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

async function travel() {
  try {
    const response12 = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=InZqGvKsLGcmh6vjMtaJ5snSMZPa1U06"
    );
    if (response12.status === 200) {
      const data12 = await response12.json();
      console.log(data12);
      data12.results.forEach((article) => {
        const body12 = document.querySelector("body");

        const container12 = document.createElement("div");
        container12.setAttribute("class", "container");
        container12.setAttribute("id", "travel");
        body12.append(container12);

        const card_travel = document.createElement("div");
        card_travel.setAttribute("class", "card");
        container12.append(card_travel);

        const subheading_travel = document.createElement("h3");
        subheading_travel.setAttribute("class", "text-primary");
        subheading_travel.innerHTML = "TRAVEL";
        card_travel.append(subheading_travel);

        const title_travel = document.createElement("h5");
        title_travel.innerHTML = article.title;
        card_travel.append(title_travel);

        const day_travel = document.createElement("h6");
        day_travel.innerHTML = article.created_date;
        card_travel.append(day_travel);

        const para_travel = document.createElement("p");
        para_travel.innerHTML = article.abstract;
        card_travel.append(para_travel);

        const card2_travel = document.createElement("div");
        card2_travel.setAttribute("class", "col-md-4");
        card_travel.append(card2_travel);

        const a_travel = document.createElement("a");
        a_travel.setAttribute("href", article.url);
        a_travel.innerHTML = "continue reading";
        card_travel.append(a_travel);

        const img_travel = document.createElement("img");
        img_travel = ("class", "img-thumbnail");
        img_travel.setAttribute("src", article.multimedia[0].url);
        card2_travel.append(img_travel);
      });
    } else {
      throw error("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}

worldFun();
politics();
magazine();
technology();
science();
health();
sports();
arts();
fashion();
food();
travel();
