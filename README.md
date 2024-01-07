# Social Network API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
The Social Network API is a backend application designed for a social media startup. It manages user interactions on a social media platform, using Express.js and MongoDB. This API allows users to share thoughts, react to friends' thoughts, and create a friend list. It addresses the need for handling large amounts of unstructured data in a NoSQL database, providing a robust and efficient solution for modern social networking requirements.

- **Motivation**: To create an efficient backend solution for social media platforms, capable of managing complex user interactions and data.
- **Problem Solved**: Enables handling of large unstructured data sets typical in social networks, with features like user creation, thought sharing, reaction management, and friend list updates.
- **Learning Experience**: Gained insights into Express.js, MongoDB, Mongoose ODM, and the intricacies of building a RESTful API for real-world applications.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [Technical Acceptance Criteria](#technical-acceptance-criteria)
- [Credits](#credits)
- [License](#license)

## Installation
To install the necessary dependencies, run the following command: npm install

## Usage
To use this application, run the following command to start the server: npm start

Then use an API testing tool like Insomnia or Postman to interact with the API endpoints.

## Features
- User management: Create, update, and delete users.
- Thought sharing: Users can post, update, and delete thoughts.
- Reactions: Add and remove reactions to thoughts.
- Friend List: Manage a user's friend list with add and remove functionality.

## Walkthrough Video
A comprehensive walkthrough video demonstrating the functionality of the Social Network API can be found here: 
[Walkthrough Video](https://drive.google.com/file/d/1qm6IS90ZD6zPcPODVbyF51YWayMRUK5A/view?usp=sharing)

## Technical Acceptance Criteria
- Mongoose package to connect to a MongoDB database.
- Includes User and Thought models.
- Reactions as the reaction field's subdocument schema in the Thought model.
- Functionality to format queried timestamps properly.

## Credits
Developed by Isaac Masterman. Special thanks to the Mongoose and Express.js documentation teams.

## License
This project is covered under the MIT License. For more information, see the [LICENSE](LICENSE) file.
