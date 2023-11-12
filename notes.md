## Important

- `/docs` is where the site build goes and reflects the version of the site that goes live

## How I set it up

- install node with brew, also installs npm
- initialize new project: `npm init -y` creates package.json file with default values and installs node module folder
- dependency installation, these get added automatically to package.json with `--save-dev` flag
    - [x] `npm install sass --save-dev`
    - [x] `npm install live-server --save-dev`
- set up scripts
    ```
    "scripts": {
        "sass": "sass --watch scss:css",
        "start": "live-server"
    }
    ```
    - In this setup, scss is the directory where you'd place your Sass files, and css is where the compiled CSS files would go.

## Installing on new machine

- Make sure you have node and npm (which comes with node) via brew
- Best case: run `npm install` to automatically install dependencies in package.json. Otherwise:
    - [x] `npm install sass`
    - [x] `npm install live-server`

## Running the dev environment

- run dev environment, open each in new tab
    - `npm run sass`
    - `npm run start` - will open local server
    - (explore gulp or webpack to streamline turning these on)

## Important changes I've made

- I moved all the stuff that will live in `gh-pages` branch into the `/docs` directory to keep things clean. This includes:
    -  `index.html`
    - cname
    - `/images`
    - **the compiled** `/css` directory.
- Stuff I do not want live on gh-pages include:
    - `package.json` and node modulea
    - all the SASS stuff in `/scss`
- I updated the live-server `start` script to to reflect `/docs` as the main directory to watch
    - Use `docs/index.html` as the home page to load
    - Treat `/docs` as the localhost root
    - See: `"start": "live-server --entry-file=docs/index.html --mount=/:docs"`    

## To do

- [ ] Start refactoring main.scss into individual scss files
- [ ] explore how to do axe scanning
- [ ] ~~explore index.js to `npm install` and download required packages automatically~~ should be covered already by `npm install`
- [ ] explore index.js to run scripts automically