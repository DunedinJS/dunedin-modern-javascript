# Exploring the starter project

Create React App has a comprehensive [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
but we'll cover the most important parts here.

## Directory structure

The `create-react-app my-app` should have generated a directory structure like below.

```
my-app/
  README.md
  node_modules/   <-- third-party dependencies are stored in here
  package.json    <-- defines project information including it's dependencies
  public/         <-- the directory which will be exposed by the web server
    index.html    <-- must be here -- it's the web entry point
    favicon.ico
  src/            <-- contains application source code -- only files in here will be processed
    App.css
    App.js
    App.test.js
    index.css
    index.js      <-- must be here -- it's the entry point to compile the application
    logo.svg
```

As you can see, the `src/` directory contains some sample files which give a base to work from.

## Scripts

NPM provides a basic task runner. The scripts we will use are:

### `npm start`

Compiles and serves the app in the development mode.
View it at http://localhost:3000 in your browser.

The application will be re-compiled and automatically reloaded when source files are editted.
Any lint errors will appear in the console.

### `npm test`

Starts the Jest test runner in watch mode so that it re-tests when source files are editted.
By default this will only run tests related to files which have changes since the last commit.
If you'd like to run all tests press `a`.

### `npm run build`

Builds the app to the `build` folder in production mode.
The build is optimised for the performance and ready to deploy.
It is minified with hashed filenames.

## Up and running

Make sure you've moved into the project directory `cd my-app`.
Then run `npm start` in one terminal window/tab and run `npm test` in another.
You'll make use of both of these during development.

Open [`http://localhost:3000`](http://localhost:3000) in your web browser.

## Next

[Exploring the source code](./exploring-code.md)

## Resources

* Create React App - [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
