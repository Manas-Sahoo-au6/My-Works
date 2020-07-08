let ac = (str) => {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == '#') {
      arr.pop()
      continue
    }
    else {
      arr.push(str.charAt(i))
    }
  }
  let x = arr.join('')
  console.log(x)
}
ac('abc#d##c')