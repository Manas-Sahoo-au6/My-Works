/* 1. List Users*/
// var data = {

// }
// var endpoint = "https://reqres.in/api/users?page=2";

// fetch(endpoint).then(function (response) {
//   return response.json()
// }).then(function (jsonData) {
//   console.log(jsonData.data);
//   var realData = jsonData.data;
//   realData.forEach(element => {
//     console.log(element.id);
//     console.log(element.email);
//     console.log(element.first_name);
//     console.log(element.last_name);
//   });
// })

// /*2. Get Single User*/

// var endpoint = "https://reqres.in/api/users/2";

// fetch(endpoint).then(function (response) {
//   return response.json()
// }).then(function (jsonData) {
//   console.log(jsonData.data);
//   var finalData = jsonData.data;
//   console.log(finalData.id);
//   console.log(finalData.email);
//   console.log(finalData.first_name);
//   console.log(finalData.last_name);
// })

// /*3. Single User not found*/
// var endpoint = "https://reqres.in/api/users/23";

// fetch(endpoint).then(function (response) {
//   return response.json();
//   console.log(response);
// }).then(function (jsonData) {
//   console.log(jsonData);
//   if (jsonData === null) {
//     console.log("No Data Found");
//   }
// }).catch(function (err) {
//   console.log("Not Available");
// })

/*3. List Unknown Resource*/
// var endpoint = "https://reqres.in/api/unknown";

// fetch(endpoint)
//   .then(function(response) {
//     return response.json();
//     console.log(response);
//   })
//   .then(function(jsonData) {
//     console.log(jsonData);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

/*4. List Resource*/
// var endpoint = "https://reqres.in/api/unknown/2";

// fetch(endpoint)
//   .then(function (response) {
//     return response.json();
//     console.log(response);
//   })
//   .then(function (jsonData) {
//     console.log(jsonData);
//     console.log(typeof jsonData);
//     for (const key in jsonData) {
//       console.log(jsonData[key].id);
//       console.log(jsonData[key].name);
//       console.log(jsonData[key].year);
//       console.log(jsonData[key].color);
//       console.log(jsonData[key].pantone_value);
//       document.body.innerHTML = `<ol><li>${jsonData[key].id}</li>
//                                   <li>${jsonData[key].name}</li>
//                                   <li>${jsonData[key].year}li>
//                                   <li>${jsonData[key].color}</li>
//       </ol>`
//     }
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// /*5. Single Resource  not found*/
// var endpoint = "https://reqres.in/api/unknown/23";

// fetch(endpoint).then(function (response) {
//   return response.json();
//   console.log(response);
// }).then(function (jsonData) {
//   console.log(jsonData);
//   if (jsonData === null) {
//     console.log("No Data Found");
//   }
// }).catch(function (err) {
//   console.log("Not Available");
// })

/*6. Post Request Create Data and post*/
// var data = {
//   name: "sawan",
//   job: "MERN Stack Developer"
// };
// var endpoint = "https://reqres.in/api/users";
// fetch(endpoint, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(data => {
//     document.body.append = `${data[0]}${data[0]}`;
//     console.log("Success:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });

/*7. Delete request */
// var data = {
//   name: "sawan",
//   job: "Data Scientist"
// };
// var endpoint = "https://reqres.in/api/users/2";
// fetch(endpoint, {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
//   .then(response => console.log(response + "deleted"))
//   .catch(error => {
//     console.error("Error:", error);
//   });


/* 8 Post Request Register*/
// var data = {
//   "email": "eve.holt@reqres.in",
//   "password": "pistol"
// };
// var endpoint = "https://reqres.in/api/register";
// fetch(endpoint, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(data => {

//     console.log("Success:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });



/* 9 Post Request Register unsuccessful*/
// var data = {
//   "email": "sydney@fife",

// };
// var endpoint = "https://reqres.in/api/register";
// fetch(endpoint, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(data => {

//     console.log("Success:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


// /*10 Login Successful*/
// var data = {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"

// };
// var endpoint = "https://reqres.in/api/login";
// fetch(endpoint, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(data => {

//     console.log("Success:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


/*10 Login UnSuccessful*/
// var data = {
//   "email": "eve.holt@reqres.in",


// };
// var endpoint = "https://reqres.in/api/login";
// fetch(endpoint, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(data => {

//     console.log("Success:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


// 11 Delay request by 3 sec and then get data 
var endpoint = "https://reqres.in/api/users?delay=3";

fetch(endpoint).then(function (response) {
  return response.json()
}).then(function (jsonData) {
  console.log(jsonData.data);
  var realData = jsonData.data;
  realData.forEach(element => {
    console.log(element.id);
    console.log(element.email);
    console.log(element.first_name);
    console.log(element.last_name);
  });
})

