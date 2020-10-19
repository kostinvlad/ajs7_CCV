import { sysAffiliation } from './affiliations';
import Moon from './luna';

document.getElementById('verify').addEventListener('click', (event) => {
  const cardNumber = document.getElementById('input').value;
  event.preventDefault();
  if (Moon(cardNumber)) {
    document.getElementById('input').classList.add('valid');
    document.getElementById('input').classList.remove('invalid');
  } else {
    document.getElementById('input').classList.add('invalid');
    document.getElementById('input').classList.remove('valid');
  }

  sysAffiliation(cardNumber);
});
