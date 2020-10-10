const inquirer = require('inquirer');
const Employee = require('./Employee');

/////////////////// Class Manager  ////////////////////////

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    //Overriden function from employee
    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

////////////////////////////////////////////////////////////

module.exports = Manager;