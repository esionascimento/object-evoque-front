function setStorage(values) {
  const { email, password } = values;
  const salve = { 
    email, password
  }
  localStorage.setItem('objectEvoque', JSON.stringify(salve));
}

export default setStorage;
