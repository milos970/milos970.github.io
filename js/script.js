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

mapSlovak.set("title6", "Specific task manager (v príprave)");
mapSlovak.set("description6", "Správca úloh prispôsobený mojim potrebám, keďže väčšina bezplatných softvérových alternatív nie je pre moje účely vhodná. Tento softvér bude ideálny pre každého, koho osobný rastový ekosystém je podobný môjmu.");

mapSlovak.set("title8", "Refaktorovanie aplikácie Softvérový nástroj na výučbu predmetu Numerické metódy (v príprave)");
mapSlovak.set("description8", "V rámci budúceho nasadenia aplikácie na školský server, bude backend navrhnutý podľa architektúry MVC a funkcionality budú prístupné prostredníctvom REST API." +
              "Frontend Implementácia numerických metód sa presunie na serverovú stranu, čím sa dosiahne vyššia výkonnosť a bezpečnosť výpočtov." +
  "Nasadenie aplikácie bude realizované prostredníctvom kontajnerizácie s využitím nástroja Docker." +
  "Autentifikácia používateľov bude zabezpečená prostredníctvom školského LDAP servera a autorizácia prostredníctvom vstavaného RDBMS H2.");

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

mapEnglish.set("title6", "Specific task manager (ongoing)");
mapEnglish.set("description6", "Task manager tailor-made to my needs, as most free software alternatives are unsuitable for my purposes. This software will be ideal for anyone whose personal growth ecosystem is similar to mine.");


mapEnglish.set("title8", "Refactoring the Application “Software Tool for Teaching the Course Numerical Methods” (in preparation)");
mapEnglish.set("description8", "As part of the future deployment of the application on the school server, the backend will be designed according to the MVC architecture, and functionality will be accessible through a REST API." +
"The implementation of numerical methods will be moved to the server side, improving performance and computation security." +
"The application will be deployed using containerization with the Docker tool." +
"User authentication will be handled via the school’s LDAP server, and authorization will be managed through the built-in H2 relational database system.");
