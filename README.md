# Heroku Deploy Client Server with GitHub Actions

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=glowkeeper&style=flat)

This repo demonstrates how to deploy an [Express](https://expressjs.com/) server that uses the [express.static built-in middleware](https://expressjs.com/en/starter/static-files.html) to serve up a [React](https://reactjs.org/) app built using [Create React App](https://reactjs.org/).

Additionally, this repo uses [GitHub Actions](https://docs.github.com/en/actions) so that, when you push to the main branch, it first runs [ESLint](https://eslint.org/), and if that's successful, it then deploys the Express server to [Heroku](https://dashboard.heroku.com/apps).

## Table of Contents

- [Demo](#demo)
- [Built Using](#built-using)  
- [Install](#install)
  - [Dependencies](#dependencies)
- [Run Locally](#run-locally)  
- [Maintainer](#maintainer)
- [Contributing](#contributing)
- [License](#license)

## Demo

To see the deployed [React](https://reactjs.org/) app', visit [glowkeeper.herokuapp.com](https://glowkeeper.herokuapp.com/).

To see the deployed [Express](https://expressjs.com/) server in action, visit [glowkeeper.herokuapp.com/hello](https://glowkeeper.herokuapp.com/hello].

## Built Using

+ [node](https://nodejs.org/en/)
+ [Express](https://expressjs.com/)
+ [Create React App](https://reactjs.org/)
+ [ESLint](https://eslint.org/)
+ [Heroku](https://dashboard.heroku.com/apps)

## Install

1. Clone this repository to your local machine
2. In the repository's home directory, type `npm install`

Every time you push to the main branch on GitHub, this repo uses a [GitHub Actions](https://docs.github.com/en/actions) workflow to first run [ESLint](https://eslint.org/), and if that's successful (i.e. if the files in the [src](src) directly lint correctly), it then deploys the Express server to [Heroku](https://dashboard.heroku.com/apps).

### Dependencies

For the [Heroku](https://dashboard.heroku.com/apps) deployment to work, you must visit _Account Settings_ in your Heroku account (you have one of those, right?) and scroll to the bottom until you see _API Key_. Copy this key. Now go to your cloned project's repository on GitHub. Go to _Settings_, _Secrets_ and click on _New repository secret_. Then enter _HEROKU_API_KEY_ as the name and paste the copied API Key as the value.

Finally, configure your [GitHub Actions](https://docs.github.com/en/actions)  workflow configuration file, [](/.github/workflows/main.yml); there, change the value for _heroku\_app\_name_ to some unique name for your Heroku application (it must be unique otherwise your app will fail to deploy), and change _heroku\_email_ to your email address.

## Run Locally

Type `npm run build` to build the react app on your local machine. Type `npm run devstart` to run the express server. Type `npm run lint` to run the linter.

## Maintainer

[Steve Huckle](https://glowkeeper.github.io/).

## Contributing

Contributions welcome - please email the maintainer.

## License

Creative Commons [Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/)

![CC BY-NC-ND](https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png)
