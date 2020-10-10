const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const { writeFile } = require('../src/generate-file.js');
const generatePage = require('../src/html-template.js');



/////////////////// Class InitProgram  ////////////////////////

class InitProgram {
    constructor(){
        this.manager;
        this.team = [];
    }

    
    //function to get manage the logic of the program
    getStart(){


        console.log(
                `
                *********************************************
                            Initializing Program
                *********************************************
                `
        );

        this.getPromptManager();
      
    }

    callGenerateHTML(){
        generatePage(this.manager, this.team);
    }

    //Method to get the information from user
    getPromptManager(){

       // this. manager;
        inquirer
        .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the Manager\'s name? ',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please you must give the Manager\'s Name! ');
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'What is Manager\'s ID?',
                    validate: idInput => {
                        if (typeof idInput === 'number') {
                            return true;
                        } else {
                            console.log('Please you must give the Manager\'s ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is Manager\'s Email?',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please you must give the Manager\'s Email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'officeNumber',
                    message: 'What is Manager\'s Office Number?',
                    validate: officeNumberInput => {
                        if (typeof officeNumberInput === 'number') {
                            return true;
                        } else {
                            console.log('Please you must give the Manager\'s Office Number!');
                            return false;
                        }
                    }
                }
        ])
        .then( ({name, id, email, officeNumber}) => {
            this.manager = new Manager(name, id, email, officeNumber);
            
            console.log(this.manager);
            //calling the function to get prompt from Employees Data
            this.getPromptEmployees();

        });
    }

    getPromptEmployees(){

        inquirer
            .prompt({
                type: 'rawlist',
                message: 'What would you like include a member to your Team?',
                name: 'confirmEmployee',
                choices: ['Engineer', 'Intern']
            })
            .then(({ confirmEmployee }) => {
                if(confirmEmployee === 'Engineer')
                {
                    inquirer
                    .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is The Engineer\'s name? ',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Enginner\'s Name! ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'number',
                                name: 'id',
                                message: 'What is Engineer\'s ID?',
                                validate: idInput => {
                                    if (typeof idInput === 'number') {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Engineer\'s ID!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is Engineer\'s Email?',
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Enginner\'s Email! ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'What is Engineer\'s Github user?',
                                validate: githubInput => {
                                    if (githubInput) {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Engineer\'s Github user! ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'confirm',
                                name: 'confirmAddEmployee',
                                message: 'Would you like to Add Other Employee?',
                                default: false
                              }
                    ]).then( ({name, id, email, github, confirmAddEmployee}) => {
                        //adding a new employee (Engineer) to team array
                        this.team.push(new Engineer(name, id, email, github));

                        if(confirmAddEmployee) {
                             //calling the function to get prompt from Employees Data
                            this.getPromptEmployees();
                        }                   
                        else{
                        
                            writeFile(generatePage(this.manager, this.team)).
                            then (writeFileResponse => {
                                console.log(`
                            ================================================
                            Finilizing. Wait while the App create the file
                            ================================================
                            `);
                                console.log(writeFileResponse);
                               })
                              .catch(err => {
                                console.log(err);
                              });
                        }
                        
                    });
                }
                else{
                    //adding Intern

                    inquirer
                    .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is The Intern\'s name? ',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Intern\'s Name! ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'number',
                                name: 'id',
                                message: 'What is Intern\'s ID?',
                                validate: idInput => {
                                    if (typeof idInput === 'number') {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Intern\'s ID!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is Intern\'s Email?',
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Intern\'s Email! ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'school',
                                message: 'What is the Intern\'s School Name?',
                                validate: githubInput => {
                                    if (githubInput) {
                                        return true;
                                    } else {
                                        console.log('Please you must give the Intern\'s School Name! ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'confirm',
                                name: 'confirmAddEmployee',
                                message: 'Would you like to Add Other Employee?',
                                default: false
                              }
                    ]).then( ({name, id, email, school, confirmAddEmployee}) => {
                        //adding a new employee (Engineer) to team array
                        this.team.push(new Intern(name, id, email, school));

                        if(confirmAddEmployee) {
                             //calling the function to get prompt from Employees Data
                            this.getPromptEmployees();
                        }                   
                        else{
                            
                            writeFile(generatePage(this.manager, this.team)).
                            then (writeFileResponse => {
                                console.log(`
                            ================================================
                            Finilizing. Wait while the App create the file
                            ================================================
                            `);
                                console.log(writeFileResponse);
                               })
                              .catch(err => {
                                console.log(err);
                              });
                        }
                        
                    });
                }
                //console.log(this.team);
            });
        }

}

////////////////////////////////////////////////////////////

module.exports = InitProgram;