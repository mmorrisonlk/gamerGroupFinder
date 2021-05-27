# project2

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Table of Contents

1. [Description](#Description)
2. [User Story](#UserStory)
3. [Elevator Pitch](#ElevatorPitch)
4. [Criteria](#Criteria)
5. [Wireframe](#Wireframe)
6. [User Flow](#UserFlowDiagram)
7. [Installation](#Installation)
8. [Usage](#Usage)
9. [Contributions](#Contributing)
10. [Issues](#Issues)
11. [Credits](#Credits)
12. [License](#License)

## Description

This is an application created so that gamers can connect with other gamers in order to fill needed positions for a team. It is a full-stack web application designed and built on the MVC paradigm. It includes our own server-side API, user authentication, and connects to a database using MySQL.

Our original goals were to be able to:
* Post a game group looking to find people to play with
* Look at available game listings
* Login to make a game group and view the listings
* Include contact information on the game group listing
* Comment on posting to contact the creator and other players

Our stretch goals were:
* Include a waitlist
* Mark filled groups as red
* Edit and delete user comments

## UserStory

    As a game player, I want a website that helps me find game groups to play with that will provide me what game they play, their schedule, their play style, and how to contact them.

## ElevatorPitch

    This website is made to provide an easier way for users to find or make groups for playing games together.

## Criteria

* Use Node.js and Express.js to create a RESTful API.

* Use Handlebars.js as the template engine.

* Use MySQL and the Sequelize ORM for the database.

* Have both GET and POST routes for retrieving and adding new data.

* Use at least one new library, package, or technology that we haven’t discussed.

* Have a folder structure that meets the MVC paradigm.

* Include authentication (express-session and cookies).

* Protect API keys and sensitive information with environment variables.

* Be deployed using Heroku (with data).

* Have a polished UI.

* Be responsive. (works on other size screens)

* Be interactive (i.e., accept and respond to user input).

* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Wireframe

### Page - List
![Wireframe - list of groups](./public/images/wireframeList.png)

### Page - Login
![Wireframe - Login page](./public/images/wireframeLogin.png)

### Page - Create a group
![Wireframe - Create a Group](./public/images/wireframeCreate.png)

### Page - List of user's created groups
![Wireframe - User created groups](./public/images/wireframeUserGroups.png)

## UserFlowDiagram

![User flow diagram](./public/images/userFlow.png)

## Installation

Files must be downloaded from Github. Then, run npm install to get the necessary node modules. Edit or duplicate the .env.EXAMPLE file to be just a .env file and fill in your MySql username and password. Open the schema.sql in MySql and run the file. Back in the code application, run node seeds to fill information into the database. Last, run npm start.

A ready version is also available at the [deployed website](https://gamer-groups.herokuapp.com/)

## Usage

Users can create a post with a group and its information, including the user's contact info, and view other created groups. They can create comments on the posts. They can edit or delete their own posts.

## Contributing

For contributions, please create a fork to work on then, when done, create a Pull Request.

## Issues

Submit an Issue through Github for any bugs or problems.

## Credits

Assignment was developed as part of the SMU Coding Bootcamp.

## License

Copyright Ashley Wright, Marquell Thompson, Mark Morrison 2021

This is covered under the <a href='https://opensource.org/licenses/ISC'>ISC</a> license.