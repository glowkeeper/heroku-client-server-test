# Heroku Deploy Client Server with GitHub Actions

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=glowkeeper&style=flat)

This repo demonstrates how to deploy an [Express](https://expressjs.com/) server to [Heroku](https://dashboard.heroku.com/apps), which, as well as serving up its own routes, also uses the [express.static built-in middleware](https://expressjs.com/en/starter/static-files.html) to serve up a [React](https://reactjs.org/) app built using [Create React App](https://reactjs.org/).

This repo also demonstrates how to uses [GitHub Actions](https://docs.github.com/en/actions) to deploy the Express server to [Heroku](https://dashboard.heroku.com/apps).

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

To see the [React](https://reactjs.org/) app' deployed from this repo', visit [https://glowkeeper.herokuapp.com](https://glowkeeper.herokuapp.com/).

To see this repo's deployed Express server serve something other that the react app', visit [https://glowkeeper.herokuapp.com/hello](https://glowkeeper.herokuapp.com/hello).

## Built Using

+ [node](https://nodejs.org/en/)
+ [Express](https://expressjs.com/)
+ [nodemon](https://www.npmjs.com/package/nodemon)
+ [Create React App](https://reactjs.org/)
+ [ESLint](https://eslint.org/)

## Install

1. Clone this repository
2. In the repository's home directory, type `npm install`

Every time you push to the main branch on GitHub, this repo uses a GitHub Actions workflow to first run `eslint src`, and if that's successful (i.e. if the files in the [src](src) directly lint correctly), it then tries to deploy the Express server to Heroku. However, if you've cloned this repo' and wish that to work for you, there's some dependencies to configure beforehand. See below.

### Dependencies

For the Heroku deployment to work, you must visit _Account Settings_ in your Heroku account (you have one of those, right?) and scroll to the bottom until you see _API Key_. Copy this key. Now go to your cloned project's repository on GitHub. Go to _Settings_, _Secrets_ and click on _New repository secret_. Then enter _HEROKU_API_KEY_ as the name and paste the copied API Key as the value.

Finally, you must configure your GitHub Actions workflow [configuration file](/.github/workflows/main.yml) - change the value for _heroku\_app\_name_ to some unique name for your Heroku application (it must be unique otherwise your app will fail to deploy), and change _heroku\_email_ to your email address.

To monitor your newly configured workflow, whenever you push to main on your repository, visit the GitHub repo, and click _Actions_. Then click on the _Deploy_ workflow, and click on the latest workflow run - if you've been fast enough, it should still be running (since the linter has to `npm install`, which should take a minute or two, and the Heroku deploy takes equally as long).

## Run Locally

Type `npm run build` to build the react app on your local machine. Type `npm run devstart` to run the express server. Type `npm run lint` to run the linter.

## Maintainer

[Steve Huckle](https://glowkeeper.github.io/).

## Contributing

Contributions welcome - please email the maintainer.

## License

Creative Commons [Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/)

![CC BY-NC-ND](https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png)
