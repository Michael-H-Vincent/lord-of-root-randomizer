const quickFactions = [
  { id: 'marquise', name: 'Marquise de Cat', set: 'Base Game', icon: 'assets/icons/marquise.png' },
  { id: 'eyrie', name: 'Eyrie Dynasties', set: 'Base Game', icon: 'assets/icons/eyrie.png' },
  { id: 'alliance', name: 'Woodland Alliance', set: 'Base Game', icon: 'assets/icons/alliance.png' },
  { id: 'vagabond', name: 'Vagabond', set: 'Base Game', icon: 'assets/icons/vagabond.png' },
  { id: 'riverfolk', name: 'Riverfolk Company', set: 'Riverfolk Expansion', icon: 'assets/icons/riverfolk.png' },
  { id: 'lizards', name: 'Lizard Cult', set: 'Riverfolk Expansion', icon: 'assets/icons/lizards.png' },
  { id: 'duchy', name: 'Underground Duchy', set: 'Underworld Expansion', icon: 'assets/icons/duchy.png' },
  { id: 'corvid', name: 'Corvid Conspiracy', set: 'Underworld Expansion', icon: 'assets/icons/corvid.png' },
  { id: 'hundreds', name: 'Lord of the Hundreds', set: 'Marauder Expansion', icon: 'assets/icons/hundreds.png' },
  { id: 'keepers', name: 'Keepers in Iron', set: 'Marauder Expansion', icon: 'assets/icons/keepers.png' }
];

const advancedCards = [
  {
    id: 'marquise',
    templateId: 'marquise',
    name: 'Marquise de Cat',
    set: 'Base Game',
    icon: 'assets/icons/marquise.png',
    setupCard: 'assets/setup_cards/marquise_setup.png',
    militant: true
  },
  {
    id: 'eyrie',
    templateId: 'eyrie',
    name: 'Eyrie Dynasties',
    set: 'Base Game',
    icon: 'assets/icons/eyrie.png',
    setupCard: 'assets/setup_cards/eyrie_setup.png',
    militant: true
  },
  {
    id: 'alliance',
    templateId: 'alliance',
    name: 'Woodland Alliance',
    set: 'Base Game',
    icon: 'assets/icons/alliance.png',
    setupCard: 'assets/setup_cards/alliance_setup.png',
    militant: false,
    insurgent: true
  },
  {
    id: 'vagabond-a',
    templateId: 'vagabond',
    name: 'Vagabond I',
    set: 'Base Game',
    icon: 'assets/icons/vagabond.png',
    setupCard: 'assets/setup_cards/vagabond_setup.png',
    militant: false,
    insurgent: true,
    vagabondSlot: 1
  },
  {
    id: 'vagabond-b',
    templateId: 'vagabond',
    name: 'Vagabond II',
    set: 'Base Game',
    icon: 'assets/icons/vagabond.png',
    setupCard: 'assets/setup_cards/vagabond_setup.png',
    militant: false,
    insurgent: true,
    vagabondSlot: 2
  },
  {
    id: 'riverfolk',
    templateId: 'riverfolk',
    name: 'Riverfolk Company',
    set: 'Riverfolk Expansion',
    icon: 'assets/icons/riverfolk.png',
    setupCard: 'assets/setup_cards/riverfolk_setup.png',
    militant: false,
    insurgent: true
  },
  {
    id: 'lizards',
    templateId: 'lizards',
    name: 'Lizard Cult',
    set: 'Riverfolk Expansion',
    icon: 'assets/icons/lizards.png',
    setupCard: 'assets/setup_cards/lizards_setup.png',
    militant: false,
    insurgent: true
  },
  {
    id: 'duchy',
    templateId: 'duchy',
    name: 'Underground Duchy',
    set: 'Underworld Expansion',
    icon: 'assets/icons/duchy.png',
    setupCard: 'assets/setup_cards/duchy_setup.png',
    militant: true
  },
  {
    id: 'corvid',
    templateId: 'corvid',
    name: 'Corvid Conspiracy',
    set: 'Underworld Expansion',
    icon: 'assets/icons/corvid.png',
    setupCard: 'assets/setup_cards/corvid_setup.png',
    militant: false,
    insurgent: true
  },
  {
    id: 'hundreds',
    templateId: 'hundreds',
    name: 'Lord of the Hundreds',
    set: 'Marauder Expansion',
    icon: 'assets/icons/hundreds.png',
    setupCard: 'assets/setup_cards/hundreds_setup.png',
    militant: true
  },
  {
    id: 'keepers',
    templateId: 'keepers',
    name: 'Keepers in Iron',
    set: 'Marauder Expansion',
    icon: 'assets/icons/keepers.png',
    setupCard: 'assets/setup_cards/keepers_setup.png',
    militant: true
  }
];

const advancedById = Object.fromEntries(advancedCards.map((card) => [card.id, card]));

const modeQuickBtn = document.getElementById('modeQuickBtn');
const modeAdvancedBtn = document.getElementById('modeAdvancedBtn');
const quickModeView = document.getElementById('quickModeView');
const advancedModeView = document.getElementById('advancedModeView');

const playerCountInput = document.getElementById('playerCount');
const playerInputs = document.getElementById('playerInputs');
const factionList = document.getElementById('factionList');
const factionSearch = document.getElementById('factionSearch');
const statusHint = document.getElementById('statusHint');
const resultsContainer = document.getElementById('results');
const settingsView = document.getElementById('settingsView');
const resultsView = document.getElementById('resultsView');

const randomizeBtn = document.getElementById('randomizeBtn');
const rerollBtn = document.getElementById('rerollBtn');
const copyBtn = document.getElementById('copyBtn');
const resetBtn = document.getElementById('resetBtn');
const selectBaseBtn = document.getElementById('selectBase');
const selectAllBtn = document.getElementById('selectAll');
const clearAllBtn = document.getElementById('clearAll');
const backBtn = document.getElementById('backBtn');
const tabPlayersBtn = document.getElementById('tabPlayers');
const tabFactionsBtn = document.getElementById('tabFactions');
const settingsActions = document.getElementById('settingsActions');
const statusHintSlot = document.getElementById('statusHintSlot');
const actionsPanel = document.querySelector('.actions-panel');

const adPlayersScreen = document.getElementById('adPlayersScreen');
const adFactionsScreen = document.getElementById('adFactionsScreen');
const adDraftScreen = document.getElementById('adDraftScreen');
const adPlayersEntryStage = document.getElementById('adPlayersEntryStage');
const adPlayersOrderStage = document.getElementById('adPlayersOrderStage');
const adPlayerCount = document.getElementById('adPlayerCount');
const adPlayerInputs = document.getElementById('adPlayerInputs');
const adRollOrderBtn = document.getElementById('adRollOrderBtn');
const adTurnOrder = document.getElementById('adTurnOrder');
const adBackToPlayerEntryBtn = document.getElementById('adBackToPlayerEntryBtn');
const adRegenOrderBtn = document.getElementById('adRegenOrderBtn');
const adToFactionsBtn = document.getElementById('adToFactionsBtn');
const adResetFromPlayersBtn = document.getElementById('adResetFromPlayersBtn');
const adResetFromPlayersOrderBtn = document.getElementById('adResetFromPlayersOrderBtn');
const adFactionList = document.getElementById('adFactionList');
const adSelectAllBtn = document.getElementById('adSelectAllBtn');
const adClearAllBtn = document.getElementById('adClearAllBtn');
const adBackToPlayersBtn = document.getElementById('adBackToPlayersBtn');
const adToDraftBtn = document.getElementById('adToDraftBtn');
const adResetFromFactionsBtn = document.getElementById('adResetFromFactionsBtn');
const adDraftPickStage = document.getElementById('adDraftPickStage');
const adDraftCardStage = document.getElementById('adDraftCardStage');
const adCurrentPicker = document.getElementById('adCurrentPicker');
const adDraftStatus = document.getElementById('adDraftStatus');
const adDraftChoices = document.getElementById('adDraftChoices');
const adNextToCardBtn = document.getElementById('adNextToCardBtn');
const adCardStageTitle = document.getElementById('adCardStageTitle');
const adSetupCardWrap = document.getElementById('adSetupCardWrap');
const adSetupCardImage = document.getElementById('adSetupCardImage');
const adPrevPickBtn = document.getElementById('adPrevPickBtn');
const adPrevFromCardBtn = document.getElementById('adPrevFromCardBtn');
const adCompletePickBtn = document.getElementById('adCompletePickBtn');
const adResetFromDraftBtn = document.getElementById('adResetFromDraftBtn');
const adResetFromCardStageBtn = document.getElementById('adResetFromCardStageBtn');
const adFinalAssignments = document.getElementById('adFinalAssignments');

const state = {
  mode: 'quick',
  quick: {
    selected: new Set(quickFactions.filter((f) => f.set === 'Base Game').map((f) => f.id)),
    players: 4,
    names: Array.from({ length: 4 }, (_, i) => `Player ${i + 1}`),
    lastResult: null,
    step: 'players'
  },
  advanced: {
    players: 4,
    names: Array.from({ length: 4 }, (_, i) => `Player ${i + 1}`),
    turnOrder: [],
    draftOrder: [],
    selectedCards: new Set(advancedCards.map((card) => card.id)),
    draftPool: [],
    delayedCardId: null,
    picks: [],
    pendingCardId: null,
    playersStage: 'entry',
    draftStage: 'pick'
  }
};

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setMode(mode) {
  state.mode = mode;
  const isQuick = mode === 'quick';
  modeQuickBtn.classList.toggle('active', isQuick);
  modeAdvancedBtn.classList.toggle('active', !isQuick);
  quickModeView.classList.toggle('hidden', !isQuick);
  advancedModeView.classList.toggle('hidden', isQuick);
}

function setQuickStep(step) {
  state.quick.step = step;
  settingsView.dataset.step = step;
  tabPlayersBtn.classList.toggle('active', step === 'players');
  tabFactionsBtn.classList.toggle('active', step === 'factions');
}

function updateQuickPlayerInputs(options = {}) {
  const { soft = false } = options;
  const raw = playerCountInput.value.trim();
  if (soft && raw === '') {
    return;
  }

  const parsed = Number.parseInt(raw, 10);
  const fallback = state.quick.players || 4;
  const count = Number.isNaN(parsed) ? fallback : Math.min(8, Math.max(1, parsed));
  if (!soft) {
    playerCountInput.value = String(count);
  }
  state.quick.players = count;

  if (state.quick.names.length < count) {
    for (let i = state.quick.names.length; i < count; i += 1) {
      state.quick.names.push(`Player ${i + 1}`);
    }
  } else if (state.quick.names.length > count) {
    state.quick.names = state.quick.names.slice(0, count);
  }

  playerInputs.innerHTML = '';
  state.quick.names.forEach((name, index) => {
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
      state.quick.names[index] = event.target.value.trim() || `Player ${index + 1}`;
    });

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    playerInputs.appendChild(wrapper);
  });

  validateQuickSelection();
}

function renderQuickFactions() {
  const term = factionSearch.value.trim().toLowerCase();
  factionList.innerHTML = '';

  const filtered = quickFactions.filter((faction) =>
    faction.name.toLowerCase().includes(term) || faction.set.toLowerCase().includes(term)
  );

  filtered.forEach((faction) => {
    const card = document.createElement('label');
    card.className = 'faction-card';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = state.quick.selected.has(faction.id);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        state.quick.selected.add(faction.id);
      } else {
        state.quick.selected.delete(faction.id);
      }
      validateQuickSelection();
    });

    const icon = document.createElement('img');
    icon.src = faction.icon;
    icon.alt = `${faction.name} icon`;
    icon.loading = 'lazy';
    icon.decoding = 'async';

    const meta = document.createElement('div');
    meta.className = 'faction-meta';
    const name = document.createElement('strong');
    name.textContent = faction.name;
    const set = document.createElement('span');
    set.textContent = faction.set;
    meta.appendChild(name);
    meta.appendChild(set);

    card.appendChild(checkbox);
    card.appendChild(icon);
    card.appendChild(meta);
    factionList.appendChild(card);
  });
}

function validateQuickSelection() {
  if (state.quick.selected.size < state.quick.players) {
    statusHint.textContent = `Select at least ${state.quick.players} factions.`;
    statusHint.style.color = '#b0472c';
    return false;
  }
  statusHint.textContent = 'Ready to randomize.';
  statusHint.style.color = 'var(--moss)';
  return true;
}

function renderQuickResults() {
  if (!state.quick.lastResult) {
    resultsContainer.className = 'results';
    resultsContainer.innerHTML = '<p>Randomize to generate assignments and turn order.</p>';
    return;
  }

  const { assignments, playerOrder } = state.quick.lastResult;
  const assignmentList = document.createElement('div');
  assignmentList.className = 'result-list';

  const orderedAssignments = playerOrder.map((player) =>
    assignments.find((item) => item.player === player)
  );

  orderedAssignments.forEach((item, index) => {
    if (!item) {
      return;
    }
    const row = document.createElement('div');
    row.className = 'result-item';

    const order = document.createElement('span');
    order.className = 'order-pill';
    order.textContent = `${index + 1}`;

    const right = document.createElement('div');
    right.className = 'result-details';

    const icon = document.createElement('img');
    icon.src = item.faction.icon;
    icon.alt = `${item.faction.name} icon`;
    icon.loading = 'lazy';
    icon.decoding = 'async';
    icon.className = 'result-icon';

    const textWrap = document.createElement('div');
    const playerName = document.createElement('strong');
    playerName.textContent = item.player;
    const factionName = document.createElement('span');
    factionName.textContent = item.faction.name;
    textWrap.appendChild(playerName);
    textWrap.appendChild(document.createElement('br'));
    textWrap.appendChild(factionName);

    right.appendChild(icon);
    right.appendChild(textWrap);
    row.appendChild(order);
    row.appendChild(right);
    assignmentList.appendChild(row);
  });

  resultsContainer.className = 'results';
  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(assignmentList);
}

function randomizeQuick() {
  if (!validateQuickSelection()) {
    return;
  }

  const selectedFactions = quickFactions.filter((f) => state.quick.selected.has(f.id));
  const chosenFactions = shuffle(selectedFactions).slice(0, state.quick.players);
  const players = [...state.quick.names];
  const playerOrder = shuffle(players);
  const assignments = shuffle(players).map((player, index) => ({
    player,
    faction: chosenFactions[index]
  }));

  state.quick.lastResult = { assignments, playerOrder };
  renderQuickResults();
  settingsView.classList.add('hidden');
  resultsView.classList.remove('hidden');
}

function copyQuickResults() {
  if (!state.quick.lastResult) {
    return;
  }
  const { assignments, playerOrder } = state.quick.lastResult;
  const lines = ['Faction Assignments'];
  assignments.forEach((item) => lines.push(`${item.player}: ${item.faction.name}`));
  lines.push('');
  lines.push('Turn Order');
  playerOrder.forEach((player, index) => lines.push(`${index + 1}. ${player}`));
  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    statusHint.textContent = 'Results copied to clipboard.';
    statusHint.style.color = 'var(--teal)';
  });
}

function resetQuickSelections() {
  state.quick.selected = new Set(quickFactions.filter((f) => f.set === 'Base Game').map((f) => f.id));
  renderQuickFactions();
  validateQuickSelection();
}

function showQuickSettings() {
  resultsView.classList.add('hidden');
  settingsView.classList.remove('hidden');
}

function syncQuickMobileActions() {
  const isMobile = window.matchMedia('(max-width: 880px)').matches;
  if (isMobile) {
    if (settingsActions && randomizeBtn.parentElement !== settingsActions) {
      settingsActions.appendChild(randomizeBtn);
    }
    if (statusHintSlot && statusHint.parentElement !== statusHintSlot) {
      statusHintSlot.appendChild(statusHint);
    }
    randomizeBtn.classList.remove('primary');
    randomizeBtn.classList.add('chip');
    resetBtn.style.display = 'none';
  } else {
    if (actionsPanel && randomizeBtn.parentElement !== actionsPanel) {
      actionsPanel.insertBefore(randomizeBtn, actionsPanel.firstChild);
      actionsPanel.appendChild(statusHint);
    }
    randomizeBtn.classList.remove('chip');
    randomizeBtn.classList.add('primary');
    resetBtn.style.display = '';
  }
}

function setAdScreen(screenId) {
  adPlayersScreen.classList.toggle('hidden', screenId !== 'players');
  adFactionsScreen.classList.toggle('hidden', screenId !== 'factions');
  adDraftScreen.classList.toggle('hidden', screenId !== 'draft');
}

function setAdPlayersStage(stage) {
  state.advanced.playersStage = stage;
  adPlayersEntryStage.classList.toggle('hidden', stage !== 'entry');
  adPlayersOrderStage.classList.toggle('hidden', stage !== 'order');
}

function setAdDraftStage(stage) {
  state.advanced.draftStage = stage;
  adDraftPickStage.classList.toggle('hidden', stage !== 'pick');
  adDraftCardStage.classList.toggle('hidden', stage !== 'card');
}

function sanitizeAdvancedNames() {
  state.advanced.names = state.advanced.names.map((name, index) => name.trim() || `Player ${index + 1}`);
}

function updateAdvancedPlayerInputs(options = {}) {
  const { soft = false } = options;
  const raw = adPlayerCount.value.trim();
  if (soft && raw === '') {
    return;
  }

  const parsed = Number.parseInt(raw, 10);
  const fallback = state.advanced.players || 4;
  const count = Number.isNaN(parsed) ? fallback : Math.min(8, Math.max(2, parsed));
  if (!soft) {
    adPlayerCount.value = String(count);
  }
  state.advanced.players = count;

  if (state.advanced.names.length < count) {
    for (let i = state.advanced.names.length; i < count; i += 1) {
      state.advanced.names.push(`Player ${i + 1}`);
    }
  } else if (state.advanced.names.length > count) {
    state.advanced.names = state.advanced.names.slice(0, count);
  }

  adPlayerInputs.innerHTML = '';
  state.advanced.names.forEach((name, index) => {
    const row = document.createElement('div');
    row.className = 'field-row';

    const label = document.createElement('label');
    label.textContent = `Player ${index + 1}`;
    label.setAttribute('for', `ad-player-${index}`);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `ad-player-${index}`;
    input.value = name;
    input.addEventListener('input', (event) => {
      state.advanced.names[index] = event.target.value;
    });

    row.appendChild(label);
    row.appendChild(input);
    adPlayerInputs.appendChild(row);
  });
}

function renderAdvancedTurnOrder() {
  if (!state.advanced.turnOrder.length) {
    adTurnOrder.innerHTML = '<p>Generate turn order to continue.</p>';
    return;
  }

  const list = document.createElement('div');
  list.className = 'result-list';
  state.advanced.turnOrder.forEach((name, index) => {
    const row = document.createElement('div');
    row.className = 'result-item';
    const rank = document.createElement('span');
    rank.className = 'order-pill';
    rank.textContent = String(index + 1);
    const text = document.createElement('strong');
    text.textContent = name;
    row.appendChild(rank);
    row.appendChild(text);
    list.appendChild(row);
  });

  adTurnOrder.innerHTML = '';
  adTurnOrder.appendChild(list);
}

function generateAdvancedOrder() {
  sanitizeAdvancedNames();
  state.advanced.turnOrder = shuffle(state.advanced.names);
  state.advanced.draftOrder = [...state.advanced.turnOrder].reverse();
  renderAdvancedTurnOrder();
  setAdPlayersStage('order');
}

function renderAdvancedFactionList() {
  adFactionList.innerHTML = '';

  advancedCards.forEach((card) => {
    const box = document.createElement('label');
    box.className = 'faction-card';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = state.advanced.selectedCards.has(card.id);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        state.advanced.selectedCards.add(card.id);
      } else {
        state.advanced.selectedCards.delete(card.id);
      }
    });

    const icon = document.createElement('img');
    icon.src = card.icon;
    icon.alt = `${card.name} icon`;

    const meta = document.createElement('div');
    meta.className = 'faction-meta';
    const name = document.createElement('strong');
    name.textContent = card.name;
    const set = document.createElement('span');
    set.textContent = card.set;
    meta.appendChild(name);
    meta.appendChild(set);

    box.appendChild(checkbox);
    box.appendChild(icon);
    box.appendChild(meta);
    adFactionList.appendChild(box);
  });
}

function canMoveToAdvancedFactions() {
  return state.advanced.turnOrder.length === state.advanced.players && state.advanced.draftOrder.length === state.advanced.players;
}

function getAdvancedDraftPool() {
  const selectedCards = advancedCards.filter((card) => state.advanced.selectedCards.has(card.id));
  const needed = state.advanced.players + 1;
  if (selectedCards.length < needed) {
    return null;
  }

  const militants = selectedCards.filter((card) => card.militant);
  if (!militants.length) {
    return null;
  }

  // Militant-seeded pool: first slot is always militant, remaining cards are random.
  const firstMilitant = shuffle(militants)[0];
  const remaining = shuffle(selectedCards.filter((card) => card.id !== firstMilitant.id)).slice(0, needed - 1);
  const pool = [firstMilitant, ...remaining];
  const maybeDelayed = pool[pool.length - 1];
  state.advanced.delayedCardId = maybeDelayed && maybeDelayed.insurgent ? maybeDelayed.id : null;
  return pool;
}

function getCardAvailability(card) {
  const chosenIds = new Set(state.advanced.picks.map((pick) => pick.cardId));
  if (chosenIds.has(card.id)) {
    return { available: false, reason: 'Already chosen' };
  }

  const militantChosen = state.advanced.picks.filter((pick) => advancedById[pick.cardId].militant).length;
  if (state.advanced.delayedCardId === card.id && militantChosen < 1) {
    return { available: false, reason: 'Locked until at least one militant faction is chosen' };
  }

  return { available: true, reason: 'Available' };
}

function renderAdvancedFinalAssignments() {
  if (state.advanced.picks.length !== state.advanced.players) {
    adFinalAssignments.classList.add('hidden');
    adFinalAssignments.innerHTML = '';
    return;
  }

  const list = document.createElement('div');
  list.className = 'result-list';
  state.advanced.picks.forEach((pick, index) => {
    const card = advancedById[pick.cardId];
    const row = document.createElement('div');
    row.className = 'result-item';

    const rank = document.createElement('span');
    rank.className = 'order-pill';
    rank.textContent = String(index + 1);

    const right = document.createElement('div');
    right.className = 'result-details';

    const icon = document.createElement('img');
    icon.src = card.icon;
    icon.alt = `${card.name} icon`;
    icon.className = 'result-icon';

    const text = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = pick.player;
    const faction = document.createElement('span');
    faction.textContent = card.name;
    text.appendChild(name);
    text.appendChild(document.createElement('br'));
    text.appendChild(faction);

    right.appendChild(icon);
    right.appendChild(text);
    row.appendChild(rank);
    row.appendChild(right);
    list.appendChild(row);
  });

  adFinalAssignments.classList.remove('hidden');
  adFinalAssignments.innerHTML = '';
  adFinalAssignments.appendChild(list);
}

function renderAdvancedDraft() {
  const pickIndex = state.advanced.picks.length;
  const finished = pickIndex >= state.advanced.players;

  if (finished) {
    adCurrentPicker.textContent = 'Advanced Setup Complete';
    adDraftStatus.textContent = 'All players have selected factions.';
    adNextToCardBtn.disabled = true;
    adDraftChoices.innerHTML = '';
    setAdDraftStage('pick');
    renderAdvancedFinalAssignments();
    return;
  }

  if (state.advanced.draftStage === 'card' && !state.advanced.pendingCardId) {
    setAdDraftStage('pick');
  }

  adCurrentPicker.textContent = `${state.advanced.draftOrder[pickIndex]} choosing`;
  adDraftStatus.textContent = `Pick ${pickIndex + 1} of ${state.advanced.players}`;
  adNextToCardBtn.disabled = !state.advanced.pendingCardId;
  adFinalAssignments.classList.add('hidden');
  adFinalAssignments.innerHTML = '';

  adDraftChoices.innerHTML = '';
  state.advanced.draftPool.forEach((card) => {
    const availability = getCardAvailability(card);
    const row = document.createElement('div');
    row.className = `draft-choice${availability.available ? '' : ' unavailable'}`;

    const icon = document.createElement('img');
    icon.src = card.icon;
    icon.alt = `${card.name} icon`;

    const text = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = card.name;
    const status = document.createElement('div');
    status.className = 'status';
    status.textContent = availability.reason;
    text.appendChild(name);
    text.appendChild(status);

    const action = document.createElement('button');
    action.textContent = state.advanced.pendingCardId === card.id ? 'Selected' : 'Select';
    action.disabled = !availability.available;
    action.addEventListener('click', () => {
      state.advanced.pendingCardId = card.id;
      renderAdvancedDraft();
    });

    row.appendChild(icon);
    row.appendChild(text);
    row.appendChild(action);
    adDraftChoices.appendChild(row);
  });

  if (state.advanced.pendingCardId) {
    const chosen = advancedById[state.advanced.pendingCardId];
    adCardStageTitle.textContent = `${chosen.name} Setup Card`;
    adSetupCardImage.src = chosen.setupCard;
    adSetupCardImage.alt = `${chosen.name} setup card`;
  }
}

function resetAdvancedToStart() {
  state.advanced.players = 4;
  state.advanced.names = Array.from({ length: 4 }, (_, i) => `Player ${i + 1}`);
  state.advanced.turnOrder = [];
  state.advanced.draftOrder = [];
  state.advanced.selectedCards = new Set(advancedCards.map((card) => card.id));
  state.advanced.draftPool = [];
  state.advanced.delayedCardId = null;
  state.advanced.picks = [];
  state.advanced.pendingCardId = null;
  state.advanced.playersStage = 'entry';
  state.advanced.draftStage = 'pick';

  adPlayerCount.value = '4';
  updateAdvancedPlayerInputs();
  renderAdvancedTurnOrder();
  renderAdvancedFactionList();
  setAdPlayersStage('entry');
  setAdDraftStage('pick');
  setAdScreen('players');
}

function initAdvancedDraft() {
  const draftPool = getAdvancedDraftPool();
  if (!draftPool) {
    adDraftStatus.textContent = `Select at least ${state.advanced.players + 1} factions and include a militant faction.`;
    return;
  }

  state.advanced.draftPool = draftPool;
  state.advanced.picks = [];
  state.advanced.pendingCardId = null;
  setAdDraftStage('pick');
  setAdScreen('draft');
  renderAdvancedDraft();
}

function completeAdvancedPick() {
  if (!state.advanced.pendingCardId) {
    return;
  }

  const player = state.advanced.draftOrder[state.advanced.picks.length];
  state.advanced.picks.push({ player, cardId: state.advanced.pendingCardId });
  state.advanced.pendingCardId = null;
  setAdDraftStage('pick');
  renderAdvancedDraft();
}

function undoAdvancedPick() {
  if (state.advanced.pendingCardId) {
    state.advanced.pendingCardId = null;
    renderAdvancedDraft();
    return;
  }

  if (state.advanced.picks.length > 0) {
    state.advanced.picks.pop();
    renderAdvancedDraft();
    return;
  }

  setAdScreen('factions');
}

modeQuickBtn.addEventListener('click', () => setMode('quick'));
modeAdvancedBtn.addEventListener('click', () => setMode('advanced'));

playerCountInput.addEventListener('change', () => updateQuickPlayerInputs({ soft: false }));
playerCountInput.addEventListener('blur', () => updateQuickPlayerInputs({ soft: false }));
playerCountInput.addEventListener('input', () => updateQuickPlayerInputs({ soft: true }));
factionSearch.addEventListener('input', renderQuickFactions);
randomizeBtn.addEventListener('click', randomizeQuick);
rerollBtn.addEventListener('click', randomizeQuick);
copyBtn.addEventListener('click', copyQuickResults);
resetBtn.addEventListener('click', resetQuickSelections);
backBtn.addEventListener('click', showQuickSettings);
tabPlayersBtn.addEventListener('click', () => setQuickStep('players'));
tabFactionsBtn.addEventListener('click', () => setQuickStep('factions'));

selectBaseBtn.addEventListener('click', () => {
  state.quick.selected = new Set(quickFactions.filter((f) => f.set === 'Base Game').map((f) => f.id));
  renderQuickFactions();
  validateQuickSelection();
});

selectAllBtn.addEventListener('click', () => {
  state.quick.selected = new Set(quickFactions.map((f) => f.id));
  renderQuickFactions();
  validateQuickSelection();
});

clearAllBtn.addEventListener('click', () => {
  state.quick.selected = new Set();
  renderQuickFactions();
  validateQuickSelection();
});

adPlayerCount.addEventListener('change', () => updateAdvancedPlayerInputs({ soft: false }));
adPlayerCount.addEventListener('blur', () => updateAdvancedPlayerInputs({ soft: false }));
adPlayerCount.addEventListener('input', () => updateAdvancedPlayerInputs({ soft: true }));
adRollOrderBtn.addEventListener('click', generateAdvancedOrder);
adRegenOrderBtn.addEventListener('click', generateAdvancedOrder);
adBackToPlayerEntryBtn.addEventListener('click', () => setAdPlayersStage('entry'));
adToFactionsBtn.addEventListener('click', () => {
  if (!canMoveToAdvancedFactions()) {
    adTurnOrder.innerHTML = `<p>Generate a ${state.advanced.players}-player turn order first.</p>`;
    return;
  }
  setAdScreen('factions');
});
adResetFromPlayersBtn.addEventListener('click', resetAdvancedToStart);
adResetFromPlayersOrderBtn.addEventListener('click', resetAdvancedToStart);

adSelectAllBtn.addEventListener('click', () => {
  state.advanced.selectedCards = new Set(advancedCards.map((card) => card.id));
  renderAdvancedFactionList();
});

adClearAllBtn.addEventListener('click', () => {
  state.advanced.selectedCards = new Set();
  renderAdvancedFactionList();
});

adBackToPlayersBtn.addEventListener('click', () => {
  setAdScreen('players');
  setAdPlayersStage(state.advanced.turnOrder.length ? 'order' : 'entry');
});
adToDraftBtn.addEventListener('click', initAdvancedDraft);
adResetFromFactionsBtn.addEventListener('click', resetAdvancedToStart);

adPrevPickBtn.addEventListener('click', undoAdvancedPick);
adNextToCardBtn.addEventListener('click', () => {
  if (!state.advanced.pendingCardId) {
    return;
  }
  setAdDraftStage('card');
  renderAdvancedDraft();
});
adPrevFromCardBtn.addEventListener('click', () => {
  setAdDraftStage('pick');
  renderAdvancedDraft();
});
adCompletePickBtn.addEventListener('click', completeAdvancedPick);
adResetFromDraftBtn.addEventListener('click', resetAdvancedToStart);
adResetFromCardStageBtn.addEventListener('click', resetAdvancedToStart);

document.addEventListener('focusin', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  if (!target.matches('input[type=\"text\"], input[type=\"number\"]')) {
    return;
  }
  if (target.value === '') {
    return;
  }
  target.value = '';
  target.dispatchEvent(new Event('input', { bubbles: true }));
});

window.addEventListener('resize', syncQuickMobileActions);

updateQuickPlayerInputs();
renderQuickFactions();
renderQuickResults();
setQuickStep('players');
syncQuickMobileActions();

resetAdvancedToStart();
setMode('quick');
