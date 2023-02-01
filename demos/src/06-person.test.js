const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  // AAA
  // Arrange / Given // preparar

  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });
  test('should return down', () => {
    // Arrange / Given // preparar
    person.weight = 45;
    // Act / When // actuar
    const imc = person.calcIMC();
    // Assert / Then // acertar
    expect(imc).toBe('down');
  });
  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
