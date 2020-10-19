const { Validator } = require('../src/components/Validate');

test('validate card number', () => {
  document.body.innerHTML = '<div id=\'container\'></div>';

  const container = document.querySelector('#container');
  const validator = new Validator(container);

  validator.bindToDOM();

  const input = container.querySelector(Validator.inputSelector);
  input.value = '5555555555554444';

  const submit = container.querySelector(Validator.submitSelector);
  submit.click();

  expect(input.classList.contains('valid')).toBeTruthy();
});

test('validate card number', () => {
  document.body.innerHTML = '<div id=\'container\'></div>';

  const container = document.querySelector('#container');
  const validator = new Validator(container);

  validator.bindToDOM();

  const input = container.querySelector(Validator.inputSelector);
  input.value = '55555555555544442';

  const submit = container.querySelector(Validator.submitSelector);
  submit.click();

  expect(input.classList.contains('valid')).toBeFalsy();
});
