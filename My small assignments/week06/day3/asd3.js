function Call() {
    document.write("Suman’s Icecream Land" + "<br>" + "<br>");
    for (var i = 0; i < 5; i++) {
      var test = prompt("Enter Icecream Name:");
      var test1 = prompt("Enter Price:");
      document.write(
        test + "  " + "  " + "-" + "  " + "  " + test1 + "$" + "<br/>"
      );
    }
  }

