# Groundfloor Frontend Coding Challenge

Oh hi, I didn't see you there. Welcome to the challenge. This repo contains a simple Vue app that describes a problem and provides a space to solve it. Just fork the repo, install the app and run it locally to see the challenge itself. Once you're done make a pull request and we'll go over your app in the interview.

## Installation

This project has been tested on node v12. Other major versions may work, but for the smoothest experience v12 will serve you best. Otherwise, just `npm install` to install and `npm run dev` to start coding. The instructions are contained in the code, run the app to learn more.

## CLI Commands

* `npm run dev` : Start the local dev server
* `npm run build` : Build for production

## Notes

This is a fairly standard Vue CLI project with a few modifications added. Here's some things to know. 
* The project has typescript, vuex, vue-router, [Buefy](https://buefy.org/documentation) and [Bulma](https://bulma.io/documentation/).
* Style resource loader is installed, so all Buefy/Bulma global scss variables are available in all components.
* Fontawesome is in place for icons. To add additional icons you'll need to import them in `main.ts`.
