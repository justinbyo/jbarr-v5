- install node with brew, also installs npm
- initiatlize new project: `npm init y` creates package.json file and installs node module folder
- dependency installation, these get added automatically to package.json
    - [ ] `npm install sass --save-dev`
    - [x] `npm install live-server --save-dev`
    - [ ] `npm install axe-core --save-dev`
- set up scripts
    ```
    "scripts": {
        "sass": "sass --watch scss:css",
        "start": "live-server",
        "axe": "axe http://localhost:8080"
    }
    ```
    - In this setup, scss is the directory where you'd place your Sass files, and css is where the compiled CSS files would go.
- run dev environment, open each in new tab
    - `npm run sass`
    - `npm run start` - will open local server
    - `npm run axe`
    - (explore gulp or webpack to streamline turning these on)
