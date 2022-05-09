# Kiwi Backend [![Known Vulnerabilities](https://snyk.io/test/github/basilisSam/Kiwi_Backend/badge.svg)](https://snyk.io/test/github/basilisSam/Kiwi_Backend) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/8f53b67475a84853b1cdf1fcea71d0eb)](https://www.codacy.com/gh/basilisSam/Kiwi_Backend/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=basilisSam/Kiwi_Backend&amp;utm_campaign=Badge_Grade)

This is a project done for Kiwi interview. Please find the instructions [here](https://github.com/basilisSam/Kiwi/wiki/Kiwi-Assignment).

You can find the kanban board of this project [here](https://github.com/basilisSam/Kiwi_Backend/projects/2).

## Teck Stack

The project is build with [Nestjs](https://nestjs.com/). It uses [jest](https://jestjs.io/) and [testing-library](https://testing-library.com/) for testing. It also uses [GraphQL](https://graphql.org/) and [Apollo](https://www.apollographql.com/).

The project is deployed using [Heroku](https://dashboard.heroku.com/). The project has been deployed here: [kiwi-backend.herokuapp.com/graphql](kiwi-backend.herokuapp.com/graphql)

The project is also using [Snyk](https://snyk.io/) for security vulnerabilities, and [Codacy](https://www.codacy.com/) for code static analysis.

### Run it locally

1. Clone the project on your local machine. <br/>
   `$ git clone https://github.com/basilisSam/Kiwi_Backend.git`

1. Navigate to the project folder and install the dependencies with the following command. <br/>
   `$ npm install`

1. Run the application locally (the application can be accessed from [localhost:3000](http://localhost:3000/)) <br/>
   `$ npm run start`

### Available scripts

#### Run app locally
You can run the application locally by using `npm run start`.

#### Test
You can run the tests of the application with `npm run test`

#### Test with watch
You can run the tests of the application and enable watching for any updates with `npm run test:watch`

#### Test with coverage

You can run the tests of the application and generate a coverage report with `npm run test:coverage`

The report can be found in the `/coverage/` folder.

#### Build

You can build the application in production mode with `npm run build`

> **Note:** You can use `yarn` instead of `npm`
