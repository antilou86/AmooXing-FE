# AmooXing
a companion app for Animal Crossing New Horizon players to gather information about the game as they play
currently contains information about collectable items (Sea critters, Bugs, and Fish) at "base url + /sellables", and a compendium of non-playable characters at "base url + /villagers" 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

pushes to init are for staging and will be deployed to -> [vercel](https://amoo-xing-fe.antilou86.vercel.app/)
pushes to master are for production and will be deployed to [aws Amplify](https://master.d3u1c7xm8qrvaq.amplifyapp.com/)

## Known issues
3 known issues so far, ordered by severity
1. there is a bug with master deploy, but not staging that wont allow client side routing
2. there is a bug in sell price of the "Giga Clam" item, it is showing as 1,500 but is really 15,000
3. there is a bug in the image tag on the villager named "Timmy"

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will show changes only after running yarn build and refreshing.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
the app is deployed using a static node-webserver, so run yarn build to ensure changes pop up locally before pushing up to github.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
