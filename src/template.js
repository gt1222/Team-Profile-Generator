// template helper codes to generate html so using template literals
// create the team
const generateTeam = team => {
// console.log(team)

    // create Manager card
    const generateManager = manager => {
        return `
        <div class="card my-5 mx-2 h-100 w-35 shadow bg-body rounded">
        <div class="card-header bg-primary text-white">
          <h2>${manager.getName()}</h2>
          <h3> <i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush mx-2 my-4">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
              </ul>
        </div>
    </div>
        `;
    };

    // create Engineer card
    const generateEngineer = engineer => {
        return `
        <div class="card my-5 mx-2 h-100 w-35 shadow bg-body rounded">
        <div class="card-header bg-primary text-white">
          <h2>${engineer.getName()}</h2>
          <h3> <i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush mx-2 my-4">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
              </ul>
        </div>
    </div>
        `;
    };

    // create Intern card
    const generateIntern = intern => {
        return `
        <div class="card my-5 mx-2 h-100 w-35 shadow bg-body rounded">
        <div class="card-header bg-primary text-white">
          <h2>${intern.getName()}</h2>
          <h3><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush mx-2 my-4">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    for(let i = 0; i < team.length; i++) {
        const employee = team[i]
        const role = employee.getRole();

        switch(role) {
            case 'Manager':
                const manager = generateManager(employee);
                html.push(manager);
                break;
            case 'Engineer':
                const engineer = generateEngineer(employee);
                html.push(engineer);
                break;
            case 'Intern':
                const intern = generateIntern(employee);
                html.push(intern);
                break;
        }
    }
    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/0a6418a6a1.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="bg-danger text-center text-white p-4">
            <header>
                <h1>My Team</h1>
            </header>
        </div>
    
        <div class="container d-flex flex-wrap justify-content-center">
            ${generateTeam(team)}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};