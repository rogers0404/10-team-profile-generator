const Enemy = require('../lib/Employee.js');


test('creates an Employee object', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.name).toEqual(String);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});