export const last = (arr) => {
  if (arr == null || arr.length < 1) return undefined

  return arr[arr.length - 1]
}
