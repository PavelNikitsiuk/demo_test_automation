const Kek = require('./index');

describe('Kek', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const mathLib = new Kek();
      const result = mathLib.add(1, 2);
      expect(result).toBe(3);
    });
  });

  describe('multiply', () => {
    it('multiply two numbers', () => {
      const mathLib = new Kek();
      const result = mathLib.multiply(3, 3);
      expect(result).toBe(9);
    });
  });

  describe('fibonacci', () => {
    it('generates a valid fibonacci sequence', () => {
      const mathLib = new Kek();
      const result = mathLib.fibonacci(12);
      expect(result[12]).toBe(144);
    });
  });
});
