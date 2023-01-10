const wrapper = document.querySelector(".sliderWrapper");
const scroll = window.scrollX;


const products = [
  {
    id: 1,
    title: "Air Force",
    price: "$119",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordans",
    price: "$149",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Air Zoom",
    price: "$109",
    colors: [
      {
        code: "black",
        img: "./img/zoom.png",
      },
      {
        code: "gray",
        img: "./img/nike-air-zoom-alphafly-next-percent-2-removebg-preview.png",
      },
     
    ],
  },
  {
    id: 4,
    title: "Air Force Ones",
    price: "$99",
    

    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Running Shoes",
    price: "$129",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },

  {
    id: 6,
    title: "Lifestyle Shoes",
    price: "$99",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// element.addEventListener('scroll', () => {
//     // do something
// });
let curItem;
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
  if (index == 0) {
    curItem = item;
    curItem.classList.add("active");
  }
  item.addEventListener("click", () => {
    wrapper.scroll(window.screen.width * index, 0);
    item.classList.add("active");
    curItem.classList.remove("active");
    curItem = item;

    //change the chosen product
    choosenProduct = products[index];

    //change text of given product
    currentProductTitle.textContent = choosenProduct.title;

    //change colors of given product
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });

  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    })
  })
});



currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "purple";
    });
    size.style.backgroundColor = "purple";
    size.style.color = "white";
    
  });
});
setInterval(null);


const productButton = document.querySelector (".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector (".close");

productButton.addEventListener("click", ()=>{
  payment.style.display="flex";

});

close. addEventListener("click", ()=>{
  payment.style.display="none";
});



