const Engineer = require('../lib/Engineer.js');


test('Creates an Engineer object', () => {
  const eng = new Engineer('Dave', 1, 'dave@email.com', 'dave15');

  expect(eng.name).toEqual(expect.any(String));
  expect(eng.id).toEqual(expect.any(Number));
  expect(eng.email).toEqual(expect.any(String));
  expect(eng.github).toEqual(expect.any(String));

});

test('Check getName method', () => {
    const eng = new Engineer('Dania', 2, 'dania@email.com', 'dave15');
  
    expect(eng.getName()).toEqual(expect.any(String));
  });

  test('Check getId method', () => {
    const eng = new Engineer('Dania', 2, 'dania@email.com', 'dave15');
  
    expect(eng.getId()).toEqual(expect.any(Number));
  });

  test('Check getEmail method', () => {
    const eng = new Engineer('Dave', 1, 'dave@email.com', 'dave15');
  
    expect(eng.getEmail()).toEqual(expect.any(String));
  });

  test('Get the Role in the Manager\'s Team', () => {
    const eng = new Engineer('Dave', 1, 'dave@email.com', 'dave15');
  
    expect(eng.getRole()).toBe('Engineer');
  });

  test('Check getGithub method', () => {
    const eng = new Engineer('Dave', 1, 'dave@email.com', 'dave15');
  
    expect(eng.getGithub()).toEqual(expect.any(String));
  });

