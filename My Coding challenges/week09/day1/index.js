String.prototype.jumpText = function () {
    var splitarray = this.split('')
  
  
    for (let i = 0; i < splitarray.length; i += 2) {
      splitarray[i] = splitarray[i].toUpperCase()
    }
    return splitarray.join('')
  }
  
  
  var output = "abcd2345".jumpText()
  console.log(output);