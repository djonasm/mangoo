import { isEmpty } from 'array'

export const tail = (arr) => {
  return isEmpty(arr) ? [] : arr.slice(1, arr.length)
}
