const inquirer = require('inquirer');
const Employee = require('./Employee');

/////////////////// Class Engineer  ////////////////////////

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    
    //Overriden function from employee
    getRole(){
        return 'Engineer';
    }
}

////////////////////////////////////////////////////////////

module.exports = Engineer;