const Employee = require('../lib/Employee.js');


test('Creates an Employee object', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('Check getName method', () => {
    const employee = new Employee('Dania', 2, 'dania@email.com');
  
    expect(employee.getName()).toEqual(expect.any(String));
  });

  test('Check getId method', () => {
    const employee = new Employee('Dania', 2, 'dania@email.com');
  
    expect(employee.getId()).toEqual(expect.any(Number));
  });

  test('Check getEmail method', () => {
    const employee = new Employee('Dave', 1, 'dave@email.com');
  
    expect(employee.getEmail()).toEqual(expect.any(String));
  });

  test('Get the Role in the Manager\'s Team', () => {
    const employee = new Employee('Dave', 1, 'dave@email.com');
  
    expect(employee.getRole()).toBe('Employee');
  });

