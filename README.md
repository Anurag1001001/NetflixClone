# Netflix Clone(Video Link): https://cutt.ly/TkgfbnK

A Netflix clone using JavaScript, React, React Hooks,Styled Components.
In this React Project, I build a Netflix clone! This React project has multiple pages: Home, Browse (which uses Firebase authentication), sign in, and sign up. The sign in will connect to Firebase when a user tries to sign in, and when a user signs up, i have used Firebase auth to store the user in the Firebase auth database. I build this app using React and uses Styled Components for all the styling i implemented. I also used Fuse.js for live search, and of course i used React router for navigation!

## Tools ans libraries used

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=200><img src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png" width=125><img src='https://miro.medium.com/max/2880/1*xcDT-neKHP7E3quS9n30gw.png' width=125><img src='https://www.styled-components.com/atom.png' width=125><img src='https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png'  width=125>

1. React
2. Redux
3. React Hooks
4. Styled-Components
5. Firebase
6. Fuse.js

## Features and Screenshots

### 1. Home Page

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/Home/1.PNG" width=500>

### 1.1. Jumbotron

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/Home/2.PNG" width=500>

### 1.2. Accordion

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/Home/3.PNG" width=500>

### 1.3. Footer

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/footer.PNG" width=500>

### 2. Login Component

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/signin.PNG" width=500>

### 3. SignUp Component

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/signup.PNG" width=500>

### 4. Browse

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/browse.PNG" width=500>

### 4.1. Browse

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/browse1.PNG" width=500>

### 5. Movie and Series

<img src="https://github.com/Anurag1001001/NetflixClone/blob/master/src/images/5.PNG" width=500>

## File Structure

```
├───components
│       accordion
│       card
│       feature
│       footer
│       form
│       header
│       jumbotron
│       loading
│       opt-form
│       player
│       profile
│       index.js
│
├───constants
│       routes.js
│
├───containers
│       browse.js
│       faq.js
│       footer.js
│       header.js
│       jumbotron.js
│       profile.js
│
├───context
│       firebase.js
│
├───fixtures
│       faqs.js
│       jumbo.json
├───helpers
│       routes.js
│
├───hooks
│       use-auth-listener.js
│       use-content.js
├───images
│       1.PNG
│       2.PNG
│       3.PNG
│       4.PNG
│       5.PNG
│       6.PNG
│       7.PNG
│
├───lib
│       firebase.prod.js
│
├───pages
│       browse.js
│       home.js
│       index.js
│       signin.js
│       signup.js
│
├───utils
│       index.js
│       selection-filter.js
│
├───app.js
│
└───index.js
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
