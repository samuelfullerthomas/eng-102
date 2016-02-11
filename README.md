# eng-102
Engineering 102


The purpose of this repo is to have a good resource for learning for U.S. CSEs

## Getting Started
First, you'll want a copy of Sublime Text 3 (or your favorite text editor) and the Standard and ES6 linter packages installed. To install packages into Sublime, you'll want to have have installed [package.io](http://package.io/)

Other fun additions: JS Gutter is a good one, as it helps show you the changes that you've made to your file

## The repo
The repo is a skeleton structure for a React app, written in ES6 and JSX, running a node/express server. It uses [Babel](https://babeljs.io/) to transpile and [Webpack](https://webpack.github.io/) as a module packager. Read more about them both here at their respective websites.

## Up an running
So, this project uses a makefile to run it's tasks. Makefiles let you create a file that runs commands in the commandline in a local repository. So kind of like Grunt. But much older.

After running an npm install, you're almost there. You'll want to run webpack --watch and then node index.js, and then you can naviagte to localhost:3000/index.html and you'll see a friendly message!

## Learning to do
The first thing that you should get up to speed on is ES6. I found that this tutorial was probably the most helpful : http://ccoenraets.github.io/es6-tutorial/

Next, this react tutorial from the react devs is a great place to start

https://facebook.github.io/react/docs/tutorial.html

Finally, if you're wanting to get back up to speed on node and express (and maybe connecting that with a database), this is the tutorial for you : http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/