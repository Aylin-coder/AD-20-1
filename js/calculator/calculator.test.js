//Estas son las pruebas para verificar que funciona el pograma

const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


// TAREA 1: Pruebas para divide (2 pruebas)
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 15 / 3 to equal 5', () => {
  expect(calculator.divide(15, 3)).toBe(5);
});

//Pruebas para multiply (2 pruebas)

test('multiply 3 * 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('multiply 7 * 6 to equal 42', () => {
  expect(calculator.multiply(7, 6)).toBe(42);
});

// TAREA 3: Prueba de división entre cero
test('Dividir entre cero retorna un mensaje de error', () => {
  expect(calculator.divide(10, 0)).toBe('No se puede dividir entre cero!');
});