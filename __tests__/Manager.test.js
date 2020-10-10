const Manager = require('../lib/Manager.js');


test('Creates an Manager object', () => {
  const manager = new Manager('Dave', 1, 'dave@email.com', 45);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('Check getName method', () => {
    const manager = new Manager('Dania', 2, 'dania@email.com', 34);
  
    expect(manager.getName()).toEqual(expect.any(String));
  });

  test('Check getId method', () => {
    const manager = new Manager('Dania', 2, 'dania@email.com', 23);
  
    expect(manager.getId()).toEqual(expect.any(Number));
  });

  test('Check getEmail method', () => {
    const manager = new Manager('Dave', 3, 'dave@email.com', 44);
  
    expect(manager.getEmail()).toEqual(expect.any(String));
  });

  test('Get the Role in the Manager\'s Team', () => {
    const manager = new Manager('Dave', 1, 'dave@email.com', 21);
  
    expect(manager.getRole()).toBe('Manager');
  });

  test('Check getOfficeNumber method', () => {
    const manager = new Manager('Dave', 1, 'dave@email.com', 55);
  
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  });

