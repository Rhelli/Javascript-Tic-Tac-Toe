import * as domElements from './domElements';

const reset = (formContainer) => {
  localStorage.clear();
  location.reload();
  formContainer.style.display = 'flex';
};

export default reset;