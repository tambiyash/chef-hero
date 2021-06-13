const removeDuplicates = (arr) => arr.filter((v, i, a) => a.indexOf(v) === i)

export {
  removeDuplicates,
}