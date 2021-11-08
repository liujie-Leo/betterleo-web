export default function (object) {
  if (!(object instanceof Object)) {
    return null
  }
  var newObject = null
  if (object instanceof Array) {
    newObject = []
  }
  if (object instanceof Object) {
    newObject = {}
  }
  for (const key in object) {
    if (object[key] instanceof Object) {
      continue
    }
    newObject[key] = object[key]
  }
}
