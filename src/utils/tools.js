export function Throttle (fn, delay) {
  let valid = true
  return function () {
    if (!valid) {
      return false
    }
    valid = false
    setTimeout(() => {
      fn()
      valid = true
    }, delay)
  }
}

// 深拷贝
export function deepClone (obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  const newObj = new obj.constructor()

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
