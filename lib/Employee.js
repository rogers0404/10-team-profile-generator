/////////////////// Class Employee  ////////////////////////

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }
    
    //function to get the name property of the object
    getName(){
        return this.name;
    }

    //function to get the id property of the object
    getId(){
        return this.id;
    }

    //function to get the email property of the object
    getEmail(){
        return this.email;
    }

    //function to getthe role of the employee
    getRole(){
        return 'Employee';
    }
}

////////////////////////////////////////////////////////////

module.exports = Employee;