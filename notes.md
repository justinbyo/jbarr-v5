## Basic set up

- install node with brew, also installs npm
- initiatlize new project: `npm init y` creates package.json file and installs node module folder
- dependency installation, these get added automatically to package.json
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

## Running the dev environment

- run dev environment, open each in new tab
    - `npm run sass`
    - `npm run start` - will open local server
    - (explore gulp or webpack to streamline turning these on)

## To do

- [ ] Start refactoring main.scss into individual scss files
- [ ] explore how to do axe scanning
