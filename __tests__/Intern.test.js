const Intern = require('../lib/Intern.js');


test('Creates an Intern object', () => {
  const student = new Intern('Dave', 1, 'dave@email.com', 'UCF');

  expect(student.name).toEqual(expect.any(String));
  expect(student.id).toEqual(expect.any(Number));
  expect(student.email).toEqual(expect.any(String));
  expect(student.school).toEqual(expect.any(String));

});

test('Check getName method', () => {
    const student = new Intern('Dania', 2, 'dania@email.com', 'UCF');
  
    expect(student.getName()).toEqual(expect.any(String));
  });

  test('Check getId method', () => {
    const student = new Intern('Dania', 2, 'dania@email.com', 'UCF');
  
    expect(student.getId()).toEqual(expect.any(Number));
  });

  test('Check getEmail method', () => {
    const student = new Intern('Dave', 3, 'dave@email.com', 'UCF');
  
    expect(student.getEmail()).toEqual(expect.any(String));
  });

  test('Get the Role in the Manager\'s Team', () => {
    const student = new Intern('Dave', 1, 'dave@email.com', 'UCF');
  
    expect(student.getRole()).toBe('Intern');
  });

  test('Check getSchool method', () => {
    const student = new Intern('Dave', 1, 'dave@email.com', 'UCF');
  
    expect(student.getSchool()).toEqual(expect.any(String));
  });

