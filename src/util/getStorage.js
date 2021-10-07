function getStorage() {
  const storage = JSON.parse(localStorage.getItem('objectEvoque'));
  if (storage) {
    console.log(storage);
  }
}

export default getStorage;
