// program to calculate the wattage used by Shinomi Akatsuki robot of SKU Code.

// function to calculate the power based on the distance travled
function power(distance) {
    var watt;
    if (distance > 0) {
      watt = distance * 10;
    } else {
      watt = 0;
    }
    return watt;
  }
  
  //function to calculate the total power based on the total distance.
  function sku(array) {
    var totWatt, totDistance, remender;
    totDistance = 0;
    totWatt = 0;
    remender = 0;
    for (i = 0; i < array.length; i++) {
      var arr = array[i];
      var mile = arr[1];
  
      if (mile === 0) {
        null;
      } else if (mile < 0) {
        remender = totDistance + mile;
      } else {
        if (remender === 0) {
          totDistance = totDistance + mile;
        } else {
          totDistance = remender + mile;
          remender = 0;
        }
      }
    }
    totWatt = power(totDistance);
    console.log(totWatt + "Watt");
  }
  
  //calling the function
  sku([
    ["PS4", 3],
    ["XBOX", 5],
    ["Samsung QLED", 8]
  ]);
  