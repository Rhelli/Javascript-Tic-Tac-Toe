import * as domElements from './domElements';

const reset = (formContainer) => {
  window.localStorage.clear();
  window.location.reload();
  formContainer.style.display = 'flex';
};

export default reset;