function traverseObjectArray(data) {
    for (i = 0; i < data.length; i++) {
      var names = data[i].name;
      var age = data[i].age;
      var address = data[i].address;
      var total = `{"name: ${names}
    Age: ${age}
    Address:${address}}`;
      console.log(total);
    }
  }
  function addAgeToObjectPosition(age, position, op) {
    var Age = age;
    var position = position;
    var select = "";
    for (i = 0; i < op.length; i++) {
      var select = (op[`${position}`].age = Age);
    }
    console.log(select);
    return op;
  }
  
  module.exports = {
    traverseObjectArray: traverseObjectArray,
    addAgeToObjectPosition: addAgeToObjectPosition
  };
  