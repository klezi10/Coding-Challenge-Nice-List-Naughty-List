// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.

const niceList = document.getElementById('nice-list');
const naughtyList = document.getElementById('naughty-list');
const btn = document.getElementById('btn');
const niceListBtn = document.getElementById('niceList-btn');
const naughtyListBtn = document.getElementById('naughtyList-btn');
const nameInput = document.getElementById('name-input');

btn.addEventListener('click', sort);

const sorteesArr = [
  {
    name: 'David',
    hasBeenGood: false,
  },
  {
    name: 'Del',
    hasBeenGood: true,
  },
  {
    name: 'Valerie',
    hasBeenGood: false,
  },
  {
    name: 'Astrid',
    hasBeenGood: true,
  },
];

function sort(event) {
  let goodOnes = sorteesArr.filter(function (sortee) {
    return sortee.hasBeenGood == true;
  });

  let naughtyOnes = sorteesArr.filter(function (sortee) {
    return sortee.hasBeenGood == false;
  });

  for (let i = 0; i < goodOnes.length; i++) {
    niceList.innerHTML += `<li>${goodOnes[i].name}</li>`;
  }

  for (let i = 0; i < naughtyOnes.length; i++) {
    naughtyList.innerHTML += `<li>${naughtyOnes[i].name}</li>`;
  }
}

niceListBtn.addEventListener('click', niceListAdd);

function niceListAdd(event) {
  const newName = nameInput.value;
  niceList.innerHTML += `<li>${newName}</li>`;
  nameInput.value = '';
}

naughtyListBtn.addEventListener('click', naughtyListAdd);

function naughtyListAdd(event) {
  const newName = nameInput.value;
  naughtyList.innerHTML += `<li>${newName}</li>`;
  nameInput.value = '';
}
