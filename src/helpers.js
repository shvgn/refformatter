/**
 * Inner function for `moveBackward` and `moveForward` to move the lement in the array
 * @param {Array} arr array of elemts
 * @param {any} elem an element that is present in the array
 * @param {Number} direction 1 or -1, defining where to move
 */
function moveElem (arr, elem, direction) {
  if (direction !== 1 && direction !== -1) {
    throw new Error('Invalid direction, expected 1 or -1, but got: ' + direction)
  }

  const idx = arr.findIndex(x => x === elem) // 3
  const notFound = (idx === -1)
  const isAlone = (arr.length === 1)

  let onEdge
  if (direction === 1) {
    onEdge = (idx === arr.length - 1)
  } else {
    onEdge = (idx === 0)
  }

  if (notFound || onEdge || isAlone) return arr

  const idx2 = idx + direction
  const swapper = arr[idx2]
  arr[idx2] = arr[idx]
  arr[idx] = swapper
  return arr
}

/**
 * moveBackward moves the element in the array on one position to the beginning
 * @param {Array} arr - the array to move en element in
 * @param {any} elem - the elemnt to move backwards
 */
export function moveBackward (arr, elem) {
  return moveElem(arr, elem, -1)
}

/**
 * moveForward moves the element in the array on one position to the end
 * @param {Array} arr - the array to move en element in
 * @param {any} elem - the elemnt to move forward
 */
export function moveForward (arr, elem) {
  return moveElem(arr, elem, 1)
}

/**
 * Construct the string date based on provided parst
 * @param {Array} parts - [Y, M, D] or [D, M, Y], D can be omitted
 */
export function dateFromParts (_parts) {
  let parts = _parts
  if (!parts || parts.length === 0) return ''
  if (parts[0] > 1000) parts = parts.reverse()
  return parts.map(x => (x < 10) ? '0' + x : x)
    .join('/')
}
