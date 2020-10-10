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
        )
        inquirer
        .prompt({
          type: 'text',
          name: 'name',
          message: 'What is your name?'
        })
        // destructure name from the prompt object
        .then(({ name }) => {
          this.player = new Player(name);
      
          // test the object creation
          //console.log(this.currentEnemy, this.player);
          this.startNewBattle()
        });
    }

    //function to get the id property of the object
    getId(){
        return this.id;
    }

    //function to get the email property of the object
    getEmail(){
        return this.email;
    }

    //function to getthe role of the InitProgram
    getRole(){
        return 'InitProgram';
    }
}

////////////////////////////////////////////////////////////

module.exports = InitProgram;