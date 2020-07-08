//global
var product = [];

var cartItems = [];

var cart_n = document.getElementById("cart_n");

//DIVs
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");

var saladDIV = document.getElementById("saladDIV");

// INFORMATIONS ABOUT ITEMS

var FRUIT = [
  { name: "Pomegranate ", price: 1 },
  { name: "Banana ", price: 1 },
  { name: "Watermilon ", price: 1 },
  { name: "Mango ", price: 1 },
  { name: "Guava ", price: 1 },
  { name: "Kiwi ", price: 1 }
];

var JUICE = [
  { name: "Mango #1", price: 10 },
  { name: "Pomegranate #2 ", price: 11 },
  { name: "Orange #3 ", price: 12 }
];

var SALAD = [
  { name: "Salad #1", price: 1 },
  { name: "Salad #2", price: 1 },
  { name: "Salad #3", price: 1 }
];

// fruits HTML
function HTMLfruitProduct(con) {
  let URL = `../img/fruits/fruit${con}.jpg`;
  let btn = `btnFruit${con}`;
  return `<div class="col-md-4">
  <div class="card mb-4 shadow-sm">
    <img class="card-img-top" style="height: 16rem;" src="${URL}" alt="Card imgage cap">
    <div class="card-body">
      <i style="color: orange;" class="fa fa-star" ></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <p class="card-text" >${FRUIT}[con-1].name} </p>
      <p class="card-text"> Price : ${FRUIT[con - 1].price}.00</p>
      <div class="d-flex justify-content-between  align-items-center">
        <div class="btn-group">
          <button type="button" oneClick ="cart2('${FRUIT[con - 1].name}',
          '${FRUIT[con - 1].price}', 
          '${URL}', '${con}', '${btn}'  ) "   class=" btn btn-sm btn-outline-secondary"><a style="color: inherit;" href="/cart">BUY</a>  
        </button>

            <button  id = "${btn}" type="button" oneClick="cart2('${
    FRUIT[con - 1].name
  }',
                      '${FRUIT[con - 1].price}', 
                      '${URL}', '${con}', '${btn}'  ) "
              class=" btn btn-sm btn-outline-secondary">Add to cart
            </button>
        </div>
        <small  class="text-muted"> free shippinng</small>
      </div>
    </div>

  </div>
</div>
`
}


//Juice html rendering 

function HTMLjuiceProduct(con) {
  let URL = `../img/juice/juice${con}.jpg`;
  let btn = `btnFruit${con}`;
  return `<div class="col-md-4">
  <div class="card mb-4 shadow-sm">
    <img class="card-img-top" style="height: 16rem;" src="${URL}" alt="Card imgage cap">
    <div class="card-body">
      <i style="color: orange;" class="fa fa-star" ></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <p class="card-text" >${JUICE}[con-1].name} </p>
      <p class="card-text"> Price : ${JUICE[con - 1].price}.00</p>
      <div class="d-flex justify-content-between  align-items-center">
        <div class="btn-group">
          <button type="button" oneClick ="cart2('${JUICE[con - 1].name}',
          '${JUICE[con - 1].price}', 
          '${URL}', '${con}', '${btn}'  ) "   class=" btn btn-sm btn-outline-secondary"><a style="color: inherit;" href="/cart">BUY</a>  
        </button>

            <button  id = "${btn}" type="button" oneClick="cart2('${
    JUICE[con - 1].name
    }',
                      '${JUICE[con - 1].price}', 
                      '${URL}', '${con}', '${btn}'  ) "
              class=" btn btn-sm btn-outline-secondary">Add to cart
            </button>
        </div>
        <small  class="text-muted"> free shippinng</small>
      </div>
    </div>

  </div>
</div>
`
}

//SALAD HTML RENDERING

function HTMLsaladProduct(con) {
  let URL = `../img/salads/salad${con}.jpg`;
  let btn = `btnFruit${con}`;
  return `<div class="col-md-4">
  <div class="card mb-4 shadow-sm">
    <img class="card-img-top" style="height: 16rem;" src="${URL}" alt="Card imgage cap">
    <div class="card-body">
      <i style="color: orange;" class="fa fa-star" ></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <i style="color: orange;" class="fa fa-star"></i>
      <p class="card-text" >${SALAD}[con-1].name} </p>
      <p class="card-text"> Price : ${SALAD[con - 1].price}.00</p>
      <div class="d-flex justify-content-between  align-items-center">
        <div class="btn-group">
          <button type="button" oneClick ="cart2('${SALAD[con - 1].name}',
          '${SALAD[con - 1].price}', 
          '${URL}', '${con}', '${btn}'  ) "   class=" btn btn-sm btn-outline-secondary"><a style="color: inherit;" href="/cart">BUY</a>  
        </button>

            <button  id = "${btn}" type="button" oneClick="cart2('${
    SALAD[con - 1].name
    }',
                      '${SALAD[con - 1].price}', 
                      '${URL}', '${con}', '${btn}'  ) "
              class=" btn btn-sm btn-outline-secondary">Add to cart
            </button>
        </div>
        <small  class="text-muted"> free shippinng</small>
      </div>
    </div>

  </div>
</div>
`
}


//ANIMATION EFFECTS 

function animation (){
  const toast = swal.mixin({
    toast :true,
    position: 'top-end',
    showConfirmButton : false,
    timer : 1000
  });
  toast({
    type :'success',
    title : 'Added to Shopping Cart'
  });
}


// cart Functions

function cart(name , price,con,btncart){
    var item = {
      name: name ,
      price: price,
      url:url 
    }

    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null){
      products.push(item);
      localStorage.setItem("cart",JSON.stringify(products));
    }
    else{
      products=JSON.parse(localStorage.getItem("cart"));
      products.push(item);
      localStorage.setItem("cart",JSON.stringify(products));
    }

    products =JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML =`[${products.length}]`;
    document.getElementById(btncart).style.display ="none";
    animation();
}

function cart2(name,price,url,btncart){
  var item = {
    name:name,
    price:price,
    url:url
  }

  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }
  else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }

  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;
  document.getElementById(btncart).style.display = "none";
}

//Render

(() => {
  for (let index = 1; index <= 6; index++) {
    fruitDIV.innerHTML += `${HTMLfruitProduct(index)}`;
  }

  for (let index = 0; index <= 3; index++) {
    juiceDIV.innerHTML += `${HTMLjuiceProduct(index)}`;
    saladDIV.innerHTML += `${HTMLsaladProduct(index)}`;
    
  }
  if(localStorage.getItem("cart" == null)){

  }else{
    products =JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML =`[${products.length}]`;
  }

})();



