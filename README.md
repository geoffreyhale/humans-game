# humans-game

## Deploy

### TLDR

```
npm install
npm run js
```

### Install Dependencies

`npm install`

### Run Babel

`npm run js`

> The '`js`' above is defined in package.json:
> ```
> {
>   "scripts": {
>    "js": "babel src/app.js --out-file public/app.js",
>   }
> }
> ```

## Initial Setup (First Time Deploy in New Environment)

### TLDR (Ubuntu 16)

```
apt install npm
npm install
sudo apt-get install nodejs-legacy
mkdir public
npm run js
```

> Read more about
> '`sudo apt-get install nodejs-legacy`':
> https://stackoverflow.com/questions/26320901/cannot-install-nodejs-usr-bin-env-node-no-such-file-or-directory#comment48123533_26320915

### Auth

Register an app at Firebase.

### Configs

Create the directories and files if necessary:

```vim app/config/firebase.js```

firebase.js (example (sanitized)):

```
var config = {
    apiKey: "tHiSiSjUsTaNeXaMpLeYoUrSsHoUlDcOmEfRoMyOuRoWnFiReBaSeAcCoUnT",
    authDomain: "your-app-name-here.firebaseapp.com",
    databaseURL: "https://your-app-name-here.firebaseio.com",
    projectId: "your-app-name-here",
    storageBucket: "your-app-name-here.appspot.com",
    messagingSenderId: "1234567890"
};
```
(don't use this one, it's an example, get your own at Firebase)