//save states changeable by user to local storage
const saveToStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

//get state information from local storage
const loadFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//when app component mounts, update hooks
const updateHooks = (data, setFavorites, setVegan, setPalette) => {
  const { favorites, vegan, palette } = data;
  setFavorites(favorites);
  setVegan(vegan);
  setPalette(palette);
};

export { saveToStorage, loadFromStorage, updateHooks };
