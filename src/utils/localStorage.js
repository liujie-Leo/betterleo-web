export var setLocalStorage = (name, value) => {
  var storage = window.localStorage
  storage[name] = value
}

export var getLocalStorage = (name) => {
  var storage = window.localStorage
  return storage[name]
}
