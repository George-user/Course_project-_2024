// Variables
const prodContProd = document.querySelector("#products");
const prodContIndex = document.querySelector("#prod-index");
const prodContCart = document.querySelector("#prod-cart");

// Define products as a matrix
const prods = [
  [
    {
      imgSrc: "img1/karta4060.jpeg",
      name: "Palit GeForce RTX 4060 Dual OC ",
      price: 1195,
      linkMore:"karta4060.html",

    },
    {
      imgSrc: "img1/karta4070.jpg",
      name: "Palit GeForce RTX 4070",
      price: 2370,
      linkMore:"karta4070.html",
    },
    {
      imgSrc: "img1/karta4060p.jpeg",
      name: "Palit GeForce RTX 3060",
      price: 1045,
      linkMore:"karta4060p.html",
    }
  ],
  [
    {
      imgSrc: "img1/karta4060.jpeg",
      name: " Pulse Radeon RX 7900",
      price: 2499,
      linkMore:"karta7900g.html",
    },
    {
      imgSrc: "img1/prossesor5060.jpg",
      name: "AMD Ryzen 5 5600",
      price: 372,
      linkMore:"prossesor5060.html",
    },
    {
      imgSrc: "img1/prossesor7500.jpg",
      name: "AMD Ryzen 5 7500F",
      price: 598,
      inkMore:"prossesor7500.html",
    },
    {
      imgSrc: "img1/kuler1.jpeg",
      name: " AeroCool Verkho A-3P7",
      price: 799,
      inkMore:"kuler1.html",
    },
    {
      imgSrc: "img1/mat1.jpeg",
      name: " Asus TUF Gaming B550M-Plus",
      price: 899,
      inkMore:"mat1.html",
      
    }, 
    
  ]
];


// Function to display products on products.html
const displayProducts = () => {
  for (let i = 0; i < prods.length; i++) {
    for (let j = 0; j < prods[i].length; j++) {
      let imgSrc = prods[i][j].imgSrc;
      let name = prods[i][j].name;
      let price = prods[i][j].price;
      let linkMore = prods[i][j].linkMore;

      createProd(imgSrc, name, price,linkMore, "prod");
    }
  }
};

// Function to create elements
const createProd = (imgSrc, name, price, linkMore, check) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let buttonProd = document.createElement("button");
  let divOverlay = document.createElement("div");
  let prodDesc = document.createElement("p");
  let buttonMore = document.createElement("button");

  // Set values on elements
  imgProd.src = imgSrc;
  nameProd.innerText = name;
  priceProd.innerText = price + "руб.";
  buttonProd.innerText = "Добавить в корзину";
  buttonMore.innerText = "Узнать подробней";
  buttonMore.addEventListener("click", () => {
    window.location.href = linkMore; // Redirect to the specified URL
  });

  // Add classes on elements
  priceProd.className = "price";
  buttonProd.className = "atc-btn";
  buttonMore.className = "rm-btn";
  divOverlay.className = "overlay";
  prodDesc.className = "description";
  divProd.className = "img-products";

  // Add elements to div
  divOverlay.appendChild(prodDesc);
  divOverlay.appendChild(buttonMore);
  divOverlay.appendChild(buttonProd);
  divProd.appendChild(imgProd);
  divProd.appendChild(nameProd);
  divProd.appendChild(priceProd);
  divProd.appendChild(divOverlay);
  if (check === "prod") {
    prodContProd.appendChild(divProd);
  } else if (check === "index") {
    prodContIndex.appendChild(divProd);
  }
};


const createCartProd = (imgSrc, name, price) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let descProd = document.createElement("div");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let amountDiv = document.createElement("div");
  let plusIcon = document.createElement("i");
  let minusIcon = document.createElement("i");
  let amount = document.createElement("p");
  let icons = document.createElement("div");
  let closeIcon = document.createElement("p");
  let favoriteIcon = document.createElement("i");


  // Set values on elements
  imgProd.src = imgSrc;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  amount.innerText = " 1 ";

  divProd.className = "cart-prod";
  descProd.className = "desc-prod";
  amountDiv.className = "amount-div";
  plusIcon.className = "fa-regular fa-square-plus";
  minusIcon.className = "fa-regular fa-square-minus";
  icons.className = "cart-icons";
  closeIcon.className = "fa-regular fa-rectangle-xmark";
  favoriteIcon.className = "fa-solid fa-heart";

  // Add elements to div
  divProd.appendChild(imgProd);
  descProd.appendChild(nameProd);
  descProd.appendChild(priceProd);
  amountDiv.appendChild(minusIcon);
  amountDiv.appendChild(amount);
  amountDiv.appendChild(plusIcon);
  descProd.appendChild(amountDiv);
  divProd.appendChild(descProd);
  icons.appendChild(closeIcon);
  icons.appendChild(favoriteIcon);
  divProd.appendChild(icons);
  prodContCart.appendChild(divProd);
};

// Function for mobile menu
const hamburgerMenu = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};