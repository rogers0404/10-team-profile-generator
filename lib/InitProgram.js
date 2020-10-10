const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

/////////////////// Class InitProgram  ////////////////////////

class InitProgram {
    
    //function to get manage the logic of the program
    getStart(){


        console.log(
            `
            ********************
            Initializing Program
            ********************
            `
        );
        const dataManager = this.getPromptManager();

        return 
        // destructure name from the prompt object
        .then(({ name }) => {
          this.player = new Player(name);
      
          // test the object creation
          //console.log(this.currentEnemy, this.player);
          this.startNewBattle()
        });
    }

    //Method to get the information from user
    getPromptManager(){

        return inquirer
        .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is Manager\'s name?',
                    validate: testInput => {
                        if (testInput) {
                            return true;
                        } else {
                            console.log('Please you must give the Manager\'s Name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'What is Manager\'s ID?',
                    validate: testInput => {
                        if (typeof testInput === 'number') {
                            return true;
                        } else {
                            console.log('Please you must give the Manager\'s ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is Manager\'s Email?',
                    validate: testInput => {
                        if (testInput) {
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
                    validate: testInput => {
                        if (typeof testInput === 'number') {
                            return true;
                        } else {
                            console.log('Please you must give the Manager\'s Office Number!');
                            return false;
                        }
                    }
                }
        ]);
    }

    //function to get the email property of the object
    getPromptTeam(){
        return this.email;
    }

    //function to getthe role of the InitProgram
    getRole(){
        return 'InitProgram';
    }
}

////////////////////////////////////////////////////////////

module.exports = InitProgram;