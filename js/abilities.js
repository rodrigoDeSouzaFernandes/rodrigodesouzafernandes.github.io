const abilityType = {
  FRONTEND: 'Front-End',
  BACKEND: 'Back-End',
  DATABASE: 'Database',
  OTHER: 'Outros',
  STUDIES: 'Acadêmico',
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
  {
    name: 'Docker',
    image:'./assets/abilities/docker.jpg',
    type: abilityType.OTHER
  },
  {
    name: 'Figma',
    image:'./assets/abilities/figma.png',
    type: abilityType.OTHER
  },
  {
    name: 'Métodos Ágeis',
    image:'./assets/abilities/agile.webp',
    type: abilityType.OTHER
  }

];

const abilitiesSection = document.querySelector("#abilities").firstElementChild;

console.log(abilitiesSection)

Object.values(abilityType).forEach(type => {
  const abilitiesByType = abilities.filter(ability => ability.type === type);

  if (abilitiesByType.length === 0) return; // se não tiver, pula

  const title = document.createElement('h2');
  title.innerText = type;

  const abilitiesContainer = document.createElement('div');
  abilitiesContainer.classList.add("abilities-list");

  abilitiesByType.forEach(ability => {
    const container = document.createElement("div");
    container.classList.add("ability");

    const image = document.createElement("img");
    image.src = ability.image;
    image.alt = ability.name;

    const name = document.createElement("h3");
    name.innerText = ability.name;

    container.appendChild(image);
    container.appendChild(name);

    abilitiesContainer.appendChild(container);
  });

  const abilityTypeWrapper = document.createElement('div')
  abilityTypeWrapper.classList.add('ability-type-wrapper')

  abilityTypeWrapper.appendChild(title);
  abilityTypeWrapper.appendChild(abilitiesContainer);
  abilitiesSection.appendChild(abilityTypeWrapper);
});