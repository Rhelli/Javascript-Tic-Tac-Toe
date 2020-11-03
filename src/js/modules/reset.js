const reset = () => {
  window.localStorage.clear();
  window.location.reload();
  const formContainer = document.getElementById('form-container');
  formContainer.style.display = 'flex';
};

export default reset;