var data = [
        {
          id: 'newspaper-01',
          name: 'Hindu',
          languages: [{ name: 'Tamil' }, { name: 'English' }],
          publishers: [
            {
              name: 'Ramanathan',
              address: {
                streetNumber: 123,
                district: 'Krishnagiri',
                state: 'Tamil nadu'
              },
              designation: 'Head'
            },
            {
              name: 'Shubham',
              address: {
                streetNumber: 142,
                district: 'Hyderabad',
                state: 'Telangana'
              },
              designation: 'CPO'
            }
          ]
        },
  {
    id: 'newspaper-02',
    name: 'Times Of India',
    languages: [{ name: 'Tamil' }, { name: 'Telugu' }, { name: 'English' }],
    publishers: [
      {
        name: 'Prathiba Nair',
        address: {
          streetNumber: 409,
          district: 'Thalassery',
          state: 'Kerala'
        },
        designation: 'Deputy Publisher'
      },
      {
        name: 'Anmol Prathap',
        address: {
          streetNumber: 278,
          district: 'Mumbai',
          state: 'Maharashtra'
        },
        designation: 'Chief Technical writer'
      },
      {
        name: 'Palwinder Singh',
        address: {
          streetNumber: 985,
          district: 'Jalandhar',
          state: 'Punjab'
        },
        designation: 'Publication Manager'
      }
    ]
  }
];
    var item1 = data[0].name;
    var item2 = data[0].id;
    var item3 = data[0].languages[0].name;
    var item3a = data[0].languages[1].name;
    
   

    var item4 = data[0].publishers[0].name;
    var item6 = data[0].publishers[0].address.streetNumber;
    var item6a = data[0].publishers[0].address.district ;
    var item6b = data[0].publishers[0].address.state ;

    var item7 = data[0].publishers[0].designation;

    var item8 = data[0].publishers[1].name;
    var item9 = data[0].publishers[1].address.streetNumber;
    var item9a = data[0].publishers[1].address.district ;
    var item9b = data[0].publishers[1].address.state ;
    var item10 = data[0].publishers[1].designation;

    console.log("NEWSPAPER :")
    console.log (item1 + ":"+ item2 );
console.log("Available in " + item3 +" , "+ item3a );
console.log("Publishers: ");
console.log("1) " + item4 + ":" + item6 + item6a +  item6b +" " + item7);
console.log("2) " + item8 + ":" +item9  +item9a +item9b +  " " + item10);



    var item1 = data[1].name;
    var item2 = data[1].id;
    var item3 = data[1].languages[0].name;
    var item3a = data[1].languages[1].name;
    var item3b = data[1].languages[2].name;

    var item4 = data[1].publishers[0].name;
    var item6 = data[1].publishers[0].address.streetNumber;
    var item6a = data[1].publishers[0].address.district ;
    var item6b = data[1].publishers[0].address.state ;

    var item7 = data[1].publishers[0].designation;

    var item8 = data[1].publishers[1].name;
    var item9 = data[1].publishers[1].address.streetNumber;
    var item9a = data[1].publishers[1].address.district ;
    var item9b = data[1].publishers[1].address.state ;
    var item10 = data[1].publishers[1].designation;

    var item11 = data[1].publishers[2].name;
    var item12 = data[1].publishers[2].address.streetNumber;
    var item12a = data[1].publishers[2].address.district ;
    var item12b= data[1].publishers[2].address.state ;
    var item13 = data[1].publishers[2].designation;

console.log (item1 + ":"+ item2 );
console.log("Available in " + item3 +" , "+ item3a + " ," + item3b);
console.log("Publishers: ");
console.log("1) " + item4 + ":" + item6 + item6a +  item6b +" " + item7);
console.log("2) " + item8 + ":" +item9  +item9a +item9b +  " " + item10  );
console.log("3) " + item11 + ":" +item12  +item12a +item12b +  " " + item13)
