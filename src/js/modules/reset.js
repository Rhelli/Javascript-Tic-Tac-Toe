import * as domElements from './domElements';

const reset = (formContainer) => {
  localStorage.clear();
  location.reload();
  formContainer.style.display = 'flex';
  return true;
};

export default reset;