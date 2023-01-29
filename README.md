# Team Profile Generator

This application takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project us a commad Line application that accepts user input using inquirer with the help of Node.js.The user will be presented with a series of question prompts to gather information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## User Story

As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

  * When a user starts the application then they are prompted to enter the **team manager**’s:
    * Name
    * Employee ID
    * Email address
    * Office number
  * When a user enters those requirements then the user is presented with a menu with the option to:
    * Add an engineer
    * Add an intern 
    * Finish building the team
  * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
    * Engineer's Name
    * ID
    * Email
    * GitHub username
  * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
    * Intern’s name
    * ID
    * Email
    * School
  * When a user decides to finish building their team then they exit the application, and the HTML is generated.


---

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/14-object-oriented-programming-challenge-demo.png)

The styling in the image is just an example, so feel free to add your own.

---

## Technologies required

*  [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. 
The application will be invoked by using the following command:

```bash
node index.js
```

---

## Hints

* You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

* The different employee types should all inherit some methods and properties from a base class of `Employee`.
 
* Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work!
  
* You may need to check if the `output` folder exists and create it if it does not.

---

