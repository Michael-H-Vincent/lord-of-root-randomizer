# Root Table Randomizer

A lightweight, static web app for randomizing factions and turn order when playing Root. Pick the factions you want available, add player names, then roll a quick assignment.

## Features
- Select exactly the factions you want in the pool (base game + expansions + upcoming).
- Add any number of players (1-8) and set player names.
- Randomly assigns a player to a faction and generates a turn order.
- Copy results to clipboard.
- Separate `Advanced Setup` mode with official AdSet-style draft constraints.
- Fully static site that can be hosted on GitHub Pages.

## Getting Started

### Local
Open `index.html` in a browser. No build step required.

### Local Dev Server
Run a simple static server so you can test on other devices:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

### GitHub Pages
1. Push this repo to GitHub.
2. In your GitHub repo settings, open `Pages`.
3. Set the branch to `main` and the folder to `/ (root)`.
4. Save and wait for the site to publish.

## Customizing Factions and Art
The app uses placeholder SVG icons in `assets/icons`. Replace them with your own PNG/SVG files if you have official art.

To add or edit factions, update the list in `js/app.js`. Each faction needs:
- `id`: short unique string
- `name`: faction display name
- `set`: expansion name
- `icon`: path to an image asset

## Notes
This project is fan-made and not affiliated with Leder Games. Please add your own faction icons if you want official art.

## Advanced Setup Flow
1. Switch to `Advanced Setup` at the top.
2. Enter player names and generate turn order.
3. Choose the faction cards available for the draft pool (includes `Vagabond I` and `Vagabond II`).
4. Start draft:
   - Draft pool is randomized from selected cards using `players + 1` cards.
   - Players choose in generated turn order.
   - `Prev` undoes the current or last decision.
   - `Reset` returns to the first advanced setup screen.

### AdSet Rules Enforced
- Draft pool uses one extra card (`players + 1` total) from selected setup cards.
- Draft pool is seeded with a militant faction first, then remaining cards are random.
- A faction already chosen is no longer available.
- Only the final randomly drawn card in the `players` draw step can be locked, and only when that specific card is insurgent. It unlocks after at least one militant faction has been chosen.
