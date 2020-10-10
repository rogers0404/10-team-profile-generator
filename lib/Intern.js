const inquirer = require('inquirer');
const Employee = require('./Employee');

/////////////////// Class Intern  ////////////////////////

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.github;
    }
    
    //Overriden function from employee
    getRole(){
        return 'Intern';
    }
}

////////////////////////////////////////////////////////////

module.exports = Intern;