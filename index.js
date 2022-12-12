const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/template.js');
const teamArray = [];


const addManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addManager',
      message: "What is the name of the manager?",
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the manager's employee ID?",
    },
    {
      type: 'input',
      name: 'addEmail',
      message: "What is the manager's email?",
    },
    {
      type: 'input',
      name: 'addOffice',
      message: "What is the manager's office number?",
    }

  ]).then(res => {
    const manager = new Manager(res.addManager, res.managerId, res.addEmail, res.addOffice);
    teamArray.push(manager);
    // console.log(manager)
    addTeam();
  }
  );
};

const addTeam = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'addRole',
      message: "Add another Role",
      choices: ['Engineer', 'Intern', 'Finished']
    }
  ]).then(res => {
    switch (res.addRole) {
      case 'Engineer':
        addEngineer();
        break;
      case 'Intern':
        addIntern();
        break;
      case 'Finished':
        generateTeam();
        break;
    }
  });
};

const addEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: "What is the engineer's name?",
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is the engineer's employee ID?",
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the engineer's email?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's github username?",
    }

  ]).then(res => {
    const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.github);
    teamArray.push(engineer);
    addTeam();
  }
  );
};

const addIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is the intern's name?",
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is the intern's employee ID?",
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the intern's email?",
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
    }

  ]).then(res => {
    const intern = new Intern(res.internName, res.internId, res.internEmail, res.school);
    teamArray.push(intern);
    addTeam();
  }
  );
};

const generateTeam = () => {
  const htmlContent = generateHTML(teamArray);
  fs.writeFile('./dist/index.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Team profile successfully created!'));
};

addManager();
