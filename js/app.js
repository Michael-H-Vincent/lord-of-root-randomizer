const factions = [
  {
    id: 'marquise',
    name: 'Marquise de Cat',
    set: 'Base Game',
    icon: 'assets/icons/marquise.svg'
  },
  {
    id: 'eyrie',
    name: 'Eyrie Dynasties',
    set: 'Base Game',
    icon: 'assets/icons/eyrie.svg'
  },
  {
    id: 'alliance',
    name: 'Woodland Alliance',
    set: 'Base Game',
    icon: 'assets/icons/alliance.svg'
  },
  {
    id: 'vagabond',
    name: 'Vagabond',
    set: 'Base Game',
    icon: 'assets/icons/vagabond.svg'
  },
  {
    id: 'riverfolk',
    name: 'Riverfolk Company',
    set: 'Riverfolk Expansion',
    icon: 'assets/icons/riverfolk.svg'
  },
  {
    id: 'lizards',
    name: 'Lizard Cult',
    set: 'Riverfolk Expansion',
    icon: 'assets/icons/lizards.svg'
  },
  {
    id: 'duchy',
    name: 'Underground Duchy',
    set: 'Underworld Expansion',
    icon: 'assets/icons/duchy.svg'
  },
  {
    id: 'corvid',
    name: 'Corvid Conspiracy',
    set: 'Underworld Expansion',
    icon: 'assets/icons/corvid.svg'
  },
  {
    id: 'hundreds',
    name: 'Lord of the Hundreds',
    set: 'Marauder Expansion',
    icon: 'assets/icons/hundreds.svg'
  },
  {
    id: 'keepers',
    name: 'Keepers in Iron',
    set: 'Marauder Expansion',
    icon: 'assets/icons/keepers.svg'
  }
];

const playerCountInput = document.getElementById('playerCount');
const playerInputs = document.getElementById('playerInputs');
const factionList = document.getElementById('factionList');
const factionSearch = document.getElementById('factionSearch');
const statusHint = document.getElementById('statusHint');
const playerCountDisplay = document.getElementById('playerCountDisplay');
const factionCountDisplay = document.getElementById('factionCountDisplay');
const resultsContainer = document.getElementById('results');

const randomizeBtn = document.getElementById('randomizeBtn');
const rerollBtn = document.getElementById('rerollBtn');
const copyBtn = document.getElementById('copyBtn');
const resetBtn = document.getElementById('resetBtn');
const selectBaseBtn = document.getElementById('selectBase');
const selectAllBtn = document.getElementById('selectAll');
const clearAllBtn = document.getElementById('clearAll');

const state = {
  selected: new Set(factions.filter((f) => f.set === 'Base Game').map((f) => f.id)),
  players: 4,
  names: Array.from({ length: 4 }, (_, i) => `Player ${i + 1}`),
  lastResult: null
};

function updatePlayerInputs() {
  const count = Number(playerCountInput.value) || 1;
  state.players = count;
  playerCountDisplay.textContent = count;

  if (state.names.length < count) {
    for (let i = state.names.length; i < count; i += 1) {
      state.names.push(`Player ${i + 1}`);
    }
  } else if (state.names.length > count) {
    state.names = state.names.slice(0, count);
  }

  playerInputs.innerHTML = '';
  state.names.forEach((name, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'field-row';

    const label = document.createElement('label');
    label.textContent = `Player ${index + 1}`;
    label.setAttribute('for', `player-${index}`);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `player-${index}`;
    input.value = name;
    input.addEventListener('input', (event) => {
      state.names[index] = event.target.value.trim() || `Player ${index + 1}`;
    });

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    playerInputs.appendChild(wrapper);
  });

  validateSelection();
}

function renderFactions() {
  const term = factionSearch.value.trim().toLowerCase();
  factionList.innerHTML = '';

  const filtered = factions.filter((faction) =>
    faction.name.toLowerCase().includes(term) || faction.set.toLowerCase().includes(term)
  );

  filtered.forEach((faction) => {
    const card = document.createElement('label');
    card.className = 'faction-card';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = state.selected.has(faction.id);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        state.selected.add(faction.id);
      } else {
        state.selected.delete(faction.id);
      }
      updateCounts();
      validateSelection();
    });

    const icon = document.createElement('img');
    icon.src = faction.icon;
    icon.alt = `${faction.name} icon`;

    const meta = document.createElement('div');
    meta.className = 'faction-meta';

    const name = document.createElement('strong');
    name.textContent = faction.name;

    const set = document.createElement('span');
    set.textContent = faction.set;

    meta.appendChild(name);
    meta.appendChild(set);

    if (faction.tag) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = faction.tag;
      meta.appendChild(badge);
    }

    card.appendChild(checkbox);
    card.appendChild(icon);
    card.appendChild(meta);
    factionList.appendChild(card);
  });
}

function updateCounts() {
  factionCountDisplay.textContent = state.selected.size;
}

function validateSelection() {
  const selectedCount = state.selected.size;
  if (selectedCount < state.players) {
    statusHint.textContent = `Select at least ${state.players} factions.`;
    statusHint.style.color = '#b0472c';
    return false;
  }

  statusHint.textContent = 'Ready to randomize.';
  statusHint.style.color = 'var(--moss)';
  return true;
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomize() {
  if (!validateSelection()) {
    return;
  }

  const selectedFactions = factions.filter((faction) => state.selected.has(faction.id));
  const chosenFactions = shuffle(selectedFactions).slice(0, state.players);
  const players = [...state.names];
  const playerOrder = shuffle(players);

  const assignments = shuffle(players).map((player, index) => ({
    player,
    faction: chosenFactions[index]
  }));

  state.lastResult = { assignments, playerOrder };
  renderResults();
}

function renderResults() {
  if (!state.lastResult) {
    resultsContainer.className = 'results empty';
    resultsContainer.innerHTML = '<p>Randomize to generate assignments and turn order.</p>';
    return;
  }

  resultsContainer.className = 'results';
  const { assignments, playerOrder } = state.lastResult;

  const assignmentList = document.createElement('div');
  assignmentList.className = 'result-list';

  assignments.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'result-item';

    const left = document.createElement('strong');
    left.textContent = item.player;

    const right = document.createElement('span');
    right.textContent = item.faction.name;

    row.appendChild(left);
    row.appendChild(right);
    assignmentList.appendChild(row);
  });

  const turnLabel = document.createElement('strong');
  turnLabel.textContent = 'Turn Order';

  const turnRow = document.createElement('div');
  turnRow.className = 'turn-order';
  playerOrder.forEach((player) => {
    const chip = document.createElement('span');
    chip.className = 'turn-chip';
    chip.textContent = player;
    turnRow.appendChild(chip);
  });

  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(assignmentList);
  resultsContainer.appendChild(turnLabel);
  resultsContainer.appendChild(turnRow);
}

function copyResults() {
  if (!state.lastResult) {
    return;
  }
  const { assignments, playerOrder } = state.lastResult;
  const lines = ['Faction Assignments'];
  assignments.forEach((item) => {
    lines.push(`${item.player}: ${item.faction.name}`);
  });
  lines.push('');
  lines.push('Turn Order');
  playerOrder.forEach((player, index) => {
    lines.push(`${index + 1}. ${player}`);
  });

  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    statusHint.textContent = 'Results copied to clipboard.';
    statusHint.style.color = 'var(--teal)';
  });
}

function resetSelections() {
  state.selected = new Set(factions.filter((f) => f.set === 'Base Game').map((f) => f.id));
  updateCounts();
  renderFactions();
  validateSelection();
}

playerCountInput.addEventListener('change', updatePlayerInputs);
playerCountInput.addEventListener('input', updatePlayerInputs);

factionSearch.addEventListener('input', renderFactions);
randomizeBtn.addEventListener('click', randomize);
rerollBtn.addEventListener('click', randomize);
copyBtn.addEventListener('click', copyResults);
resetBtn.addEventListener('click', resetSelections);
selectBaseBtn.addEventListener('click', () => {
  state.selected = new Set(factions.filter((f) => f.set === 'Base Game').map((f) => f.id));
  updateCounts();
  renderFactions();
  validateSelection();
});
selectAllBtn.addEventListener('click', () => {
  state.selected = new Set(factions.map((f) => f.id));
  updateCounts();
  renderFactions();
  validateSelection();
});
clearAllBtn.addEventListener('click', () => {
  state.selected = new Set();
  updateCounts();
  renderFactions();
  validateSelection();
});

updatePlayerInputs();
updateCounts();
renderFactions();
renderResults();
