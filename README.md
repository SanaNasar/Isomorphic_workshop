# IsomorphicJS_workshop

## Overview

This is a small sample app built to demonstrate Isomorphic JavaScript concepts.
This was a workshop taught by *Spike Brehm*

## Under the hood (What's going on??)

We combine a few modules together to build an isomorphic JavaScript app. Each
of these modules was built to support both the client and the server, and by
creating some small shims around them, we can abstract out the differences to
create the same API for both client and server.

We use the following modules on both client and server:

* [React](https://github.com/facebook/react) (UI components)
* [Director](https://github.com/flatiron/director) (routing)
* [Superagent](https://github.com/visionmedia/superagent) (HTTP requests)

On top of a basic [Express](https://github.com/visionmedia/express) app.

We use [Browserify](http://browserify.org/) and [Grunt](http://gruntjs.com/) to
package our server-side CommonJS modules in a way that allows us to use them in
the client-side.

## Getting it running

### Install Node.js >= 0.10.x

If Node.js version >= 0.10.x is not already installed on your system, install it so you can run this app.

#### Check if it's installed

The command `which node` will return a path to your installed version of Node.js, if it exists on your system.

    $ which node
    /usr/local/bin/node

If it is installed, make sure it's >= 0.10.x.

    $ node --version
    v0.10.33

#### To install

##### Mac

Preferably install using Homebrew:

    $ brew install node

##### Else

Otherwise, go to the [nodejs.org](http://nodejs.org/) and download the binary to install on your system.

### Install `grunt-cli`

This app uses [Grunt](http://gruntjs.com/) to build its assets. To run Grunt, we need to install the `grunt-cli` package globally on your system using NPM.

    $ npm install -g grunt-cli

### Clone this repo onto your machine

    $ cd ~/code
    $ git clone
    $ cd isomorphic-tutorial

### Run `npm install` to install dependenices

  $ npm install
    ...

### Run the app!

We'll start up our local Node.js web server using Grunt, so it can automatically do useful things for us when we change files like recompile our assets and restart the server.

    $ grunt server

This will start our local web server on port `3030`.

You can view it in your web browser at `http://localhost:3030/`

## License

MIT