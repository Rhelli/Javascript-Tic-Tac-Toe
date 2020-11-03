const saveItem = (string, object) => {
  localStorage.setItem(string, JSON.stringify(object));
};

const retrieveItem = (string) => JSON.parse(localStorage.getItem(string));

export { saveItem, retrieveItem };