# Team-Profile-Generator

## Description
The hardest part about this project was trying to render my project. My data keeps showing up as undefined and it took me awhile to figure out why. I realized in the index.js I accidentally added teamArray into generateTeam () as a parameter, which caused the team value to be undefined in the template.js. After, I had to figure out where in my template.js I messed up because my data would not render, until I saw that I forgot to push my data. After that it finally went through. However, it took hours for me to figure out where I messed up and kept changing my codes to see where it would be.

It's working now and I'm proud I got it done.

## Installation
1. Clone the repository
2. Application uses Jest and Inquirer
3. Run `npm install`

## Usage
Went into terminal to run `npm run test` to use Jest application and making sure all test passed. Then ran `npm start` to start the application with inquirer asking prompt questions and creating a team generator.

![demo gif of team generator](dist/Team%20Generator.gif)

## Deployed Site
[Link](https://drive.google.com/file/d/104KnGzdFJkJLRxsPMkydsspWGBZtrakK/view)

[Github](https://github.com/gt1222/Team-Profile-Generator)