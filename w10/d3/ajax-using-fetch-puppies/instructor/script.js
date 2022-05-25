/* -- constants --*/
const BASE_URL = 'https://sei-puppies-api.herokuapp.com/api/puppies/';

/* -- app's state vars --*/
let currentView;
let puppies;

/* -- cached elements --*/
const indexViewEl = document.getElementById('index-view');
const indexViewBtn = document.getElementById('index-view-btn');
const addPupEl = document.getElementById('create-view-btn');
const addPupBtn = document.getElementById('add-puppy-btn');
const createViewEl = document.getElementById('create-view');
const listContainerEl = document.querySelector('#index-view section');
const inputEls = document.querySelectorAll('#create-view input');

/* -- functions --*/
function render() {
  indexViewEl.style.display = currentView === 'index' ? 'block' : 'none';

  createViewEl.style.display = currentView === 'create' ? 'block' : 'none';

  if (currentView === 'index') {
    const html = puppies.reduce(
      (html, pup) => `${html}
    <div>${pup.name} (${pup.breed}) - age ${pup.age}</div>`,
      ''
    );

    listContainerEl.innerHTML = html;
  } else if (currentView === 'create') {
    // TODO
  }
}

async function init() {
  currentView = 'index';

  const puppiesResponse = await fetch(BASE_URL);
  puppies = await puppiesResponse.json();
  render();
}

/* -- Event Handlers --*/
async function handleAddPuppy() {
  const name = inputEls[0].value.trim();

  if (name) {
    const breed = inputEls[1].value;
    const age = inputEls[2].value;

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        age,
        breed,
      }),
    });

    const newPup = await response.json();

    alert(`Pup added has an id of ${newPup._id}`);

    // Clear the inputs
    inputEls[0].value = inputEls[1].value = inputEls[2].value = '';
    init();
  }
}

/* -- Event Listeners --*/
addPupEl.addEventListener('click', function () {
  // Update state, call render...
  currentView = 'create';
  render();
});

indexViewBtn.addEventListener('click', init);

addPupBtn.addEventListener('click', handleAddPuppy);
init();
