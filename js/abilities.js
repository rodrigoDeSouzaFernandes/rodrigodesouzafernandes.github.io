const abilityType = {
  FRONTEND: 'Front-End',
  BACKEND: 'Back-End',
  DATABASE: 'Database',
  OTHER: 'Other',
  STUDIES: 'Studies',
};

const abilities = [
  {
    name: 'React',
    image: './assets/abilities/react.webp',
    type: abilityType.FRONTEND,
  },
  {
    name: 'Angular',
    image: './assets/abilities/angular.png',
    type: abilityType.FRONTEND,
  },
  {
    name: 'TypeScript',
    image: './assets/abilities/typescript.png',
    type: abilityType.FRONTEND,
  },
  {
    name: 'CSS',
    image: './assets/abilities/css.png',
    type: abilityType.FRONTEND,
  },
  {
    name: 'HTML',
    image: './assets/abilities/html.png',
    type: abilityType.FRONTEND,
  },
  {
    name: 'JavaScript',
    image: './assets/abilities/javascript.png',
    type: abilityType.FRONTEND,
  },
  {
    name: '.NET',
    image: './assets/abilities/net.png',
    type: abilityType.BACKEND,
  },
  {
    name: 'C#',
    image: './assets/abilities/csharp.webp',
    type: abilityType.BACKEND,
  },
  {
    name: 'Java',
    image: './assets/abilities/java.jpg',
    type: abilityType.STUDIES,
  },
  {
    name: 'Python',
    image: './assets/abilities/python.png',
    type: abilityType.STUDIES,
  },
  {
    name: 'Node.js',
    image: './assets/abilities/node.jpg',
    type: abilityType.BACKEND,
  },
  {
    name: 'SQL',
    image: './assets/abilities/sql.jpg',
    type: abilityType.DATABASE,
  },
  {
    name: 'Git',
    image: './assets/abilities/git.png',
    type: abilityType.OTHER,
  },
  {
    name: 'Jest',
    image: './assets/abilities/jest.png',
    type: abilityType.FRONTEND,
  },
  {
    name: 'MySQL',
    image: './assets/abilities/mysql.webp',
    type: abilityType.DATABASE,
  },{
    name: 'SQLServer',
    image: './assets/abilities/sqlserver.png',
    type: abilityType.DATABASE,
  },{
    name: 'MongoDB',
    image: './assets/abilities/mongo.png',
    type: abilityType.DATABASE,
  },

];

const abilitiesSection = document.querySelector("#abilities")

Object.values(abilityType).forEach(type => {
  const title = document.createElement('h2');
  title.innerText = type;

  const abilitiesContainer = document.createElement('div');
  abilitiesContainer.classList.add("abilities-list");

  abilities
  .filter(ability => ability.type === type)
  .forEach(ability => {
    const container = document.createElement("div");
    container.classList.add("ability")
    const image = document.createElement("img");
    const name = document.createElement("h3");
  
    image.src = ability.image;
    name.innerText = ability.name;
  
  
    container.appendChild(image);
    container.appendChild(name);
  
    abilitiesContainer.appendChild(container);

    abilitiesSection.appendChild(title)
    abilitiesSection.appendChild(abilitiesContainer)
  });
})
