const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');



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
********************
Initializing Program
********************
`
        );

        this.getPromptManager();
      
    }

    //Method to get the information from user
    getPromptManager(){

       // this. manager;
        return inquirer
        .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is Manager\'s name? ',
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
            
        });
    }

}

////////////////////////////////////////////////////////////

module.exports = InitProgram;