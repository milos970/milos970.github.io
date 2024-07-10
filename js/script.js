/*
MY CODE
*/

function changeInPortfolioPage() {
  let lan = localStorage.getItem("lang");
  if (lan === "en") {
    mapSlovak.forEach((values, keys) => {
      console.log(keys + ":" + values);
      document.getElementById(keys).textContent = values;
      localStorage.setItem("lang", "sk");
    });
  } else {
    mapEnglish.forEach((values, keys) => {
      console.log(keys + ":" + values);
      document.getElementById(keys).textContent = values;
      localStorage.setItem("lang", "en");
    });
  }
}

function pas() {
  localStorage.setItem("lang", "en");

  changeInPortfolioPage();
}

const mapSlovak = new Map();
mapSlovak.set("title7", "Softvérový nástroj na výučbu predmetu Numerické metódy");
mapSlovak.set("description7", "Učebná pomôcka pre študentov predmetu Numerické metódy.");
mapSlovak.set("heading", "Ahoj, volám sa Miloš");
mapSlovak.set("description", "A toto je moje portfolio");

mapSlovak.set("title1", "Obesenec");
mapSlovak.set("description1", "");

mapSlovak.set("title2", "VAII");
mapSlovak.set(
  "description2",
  "Web aplikácia čiastočne inšpirovaná seriálom The Lost."
);

mapSlovak.set("title3", "Kocky");
mapSlovak.set(
  "description3",
  "GUI aplikácia pre výpočet a grafovú vizualizáciu pravdepodobnosti hodu daného počtu kociek a ich súčtu."
);

mapSlovak.set("title4", "Life Is Weird");
mapSlovak.set(
  "description4",
  "Jednoduchá príbehová GUI aplikácia voľne inšpirovaná zážitkami z AAA hier Firewatch a Life Is Strange."
);

mapSlovak.set("title5", "AUS");
mapSlovak.set(
  "description5",
  "Spracovanie výsledkov zo sčítania obyvateľov, domov a bytov, ktoré prebehlo v roku 2021."
);

mapSlovak.set("title6", "Algoritmy");
mapSlovak.set("description6", "");



const mapEnglish = new Map();
mapEnglish.set("title7", "Software tool for teaching the subject of Numerical methods");
mapEnglish.set("description7", "Teaching aid for students of the Numerical Methods subject.");


mapEnglish.set("heading", "Hi, my name is Milos");
mapEnglish.set("description", "And this is my portfolio");

mapEnglish.set("title1", "Hangman");
mapEnglish.set("description1", "");

mapEnglish.set("title2", "VAII");
mapEnglish.set(
  "description2",
  "A web app partially inspired by the TV show The Lost."
);

mapEnglish.set("title3", "Dice");
mapEnglish.set(
  "description3",
  "A desktop GUI application for calculation and visualization of probability for given numbers of dice and their sum."
);

mapEnglish.set("title4", "Life Is Weird");
mapEnglish.set(
  "description4",
  "A simple story GUI app loosely inspired by the experiences of the AAA games Firewatch and Life Is Strange."
);

mapEnglish.set("title5", "AUS");
mapEnglish.set(
  "description5",
  "Processing of results from the population census of houses and apartments, which took place in 2021."
);

mapEnglish.set("title6", "Algorithms");
mapEnglish.set("description6", "");



