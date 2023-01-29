const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = []

buildTeam()

//Function runs the team manager prompts and calls the menu.
function buildTeam() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter name of the team manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Employee ID of the team manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the team manager?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'Enter office Number of the team manager?'
    }]).then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.number
        )
        team.push(manager)

        chooseFromMenu();
    })
}

function chooseFromMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Choose a catergory to add?',
            choices: [
                'Add an Engineer',
                'Add an Intern',
                'Finish building the team'
            ]
        }
    ]).then(function (answers) {
        if (answers.menu === 'Add an Engineer') {
            promptEngineerDetails()
                .then((answers) => {
                    const engineer = new Engineer(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.github
                    )
                    team.push(engineer)
                }).then(() => chooseFromMenu())

        } else if (answers.menu === 'Add an Intern') {
            promptInternDetails()
                .then((answers) => {
                    const intern = new Intern(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.school
                    )
                    team.push(intern)
                }).then(() => chooseFromMenu())

        } else {
            console.log("You are building team..")
            console.log(team)

            const htmlFile = render(team)
            fs.writeFileSync(outputPath, htmlFile)
        }

    })

}