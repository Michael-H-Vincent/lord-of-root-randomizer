# Root Table Randomizer

A lightweight, static web app for randomizing factions and turn order when playing Root. Pick the factions you want available, add player names, then roll a quick assignment.

## Features
- Select exactly the factions you want in the pool (base game + expansions + upcoming).
- Add any number of players (1-8) and set player names.
- Randomly assigns a player to a faction and generates a turn order.
- Copy results to clipboard.
- Fully static site that can be hosted on GitHub Pages.

## Getting Started

### Local
Open `index.html` in a browser. No build step required.

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

