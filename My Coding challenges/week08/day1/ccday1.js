fetch('https://api.jsonbin.io/b/5e255a4e8d761771cc941bc0')
  .then(function(response) {
    console.log(response);
    return response.json(); // Converts into JSON as well as parses into object.
  })
  .then(function(responseObj) {
    for (var index = 0; index < responseObj.length; index++) {
      document.write(responseObj[index].title);
    }
  })
  .catch(function(m) {
    console.log(m);
  });
