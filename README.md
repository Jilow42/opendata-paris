# my-react

## Context
Vous travaillez pour la maire de Paris. Le directeur des services d’informations vous charge de développer un annuaire de référence de touts les événements qui figure dans la base de données open data de Pars ici : https://opendata.paris.fr.

Moteur de recherche API : https://opendata.paris.fr/explore/dataset/que-faire-a-paris-/api/?disjunctive.category&disjunctive.tags&disjunctive.address_zipcode&disjunctive.address_city&disjunctive.access_type&disjunctive.price_type

Vous devez en sommes réaliser un moteur de recherche pouvant permettre la recherche multi critéres et de retrouver des événements par la date ou le nom et d’y afficher toutes les informations qui figure dans le registre. Vous devez lier à cette information avec notament l’adresse via une map intéractive pour géolocaliser les événements.

Il est important que toutes les informations que vous disposez sur les événements soient affichés, vous avez également la possiblité de croiser d’autres données avec les autres api du service.

Une interface propre devra être réaliser pour concrétiser votre application (React-Bootstrap ou Material UI à vous de choisir).

## Les rendus attendus
Un repo Github Une documentation en markdown 0 fautes au niveau du linter L’application complément fonctionnelle Vous devez utiliser AXIOS pour les appels d’api Vous devez respecter l’approche par composant. Les hooks sont interdit dans le rendu cette évaluation vous devez réaliser l’approche par extension de classe Component de React.js. L’utilisation des cycles de vie des composants vous permettra de charger les données notament avec la méthode componentDidMount. Le rendu est attendu pour le 17 novembre à 23h42 vous aurez 2 jours de cours pour disposer de l’aide nésessaire pour votre évaluation si vous n’avez pas bien compris quelque chose et que vous n’avez pas terminé dans les délais. Nous reviendrons ensemble sur votre projet.

## Starting
```bash
git clone https://github.com/Jilow42/openDataParis.git
npm i
npm start
```

## Structure

```bash
.
├── package.json
├── README.md
├── src
│   ├── components
│   │   ├── body
│   │   │   └── index.js
│   │   ├── details
│   │   │   └── index.js
│   │   ├── form
│   │   │   ├── index.js
│   │   │   └── list
│   │   │       └── index.js
│   │   └── manageData
│   │       └── index.js
│   ├── index.html
│   ├── index.js
│   ├── index.scss
│   └── reset.scss
└── webpack.config.js
```

## Technologies used
* HTML5
* Scss
* JavaScript
* React framework

## Components
* Navbar
  * where we do our research
* Body
  * where the results of our research appear
* Details
  * The detail of one of the events of your choice

## Features

* Navbar
  * We can choose between a research by query or by criteria
  * When we submit, on the left cards appear with informations of each events
* Body
  * It is where our cards appear
  * We have basic informations like the type of entrie, the category of activity etc...
  * We can click on "Plus d'informations" button to be redirected to a page containing more informations 
* Details
  * In the detail's page, we have all the informations about the event and a map with the exact location of the activity.

## Author
[**LINA Florian**](https://github.com/Jilow42)
Hepled by :
[**FRANCISCO Dany**](https://github.com/DRF-dev)