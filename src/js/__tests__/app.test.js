const { default: Moon } = require("../luna");


test.each([
  ['valid', '5555555555554444', true],
  ['valid', '4111111111111111', true],
  ['invalid', '55555555555544441', false],
  ['invalid', '-4111111111111111', false],
  ['invalid', '4111111111111111a', false],
  ['invalid', '', false],
  ['invalid', '0', false],
])(('its should be %s'), (_, input, expected) => {
  expect(Moon(input)).toBe(expected);
});
