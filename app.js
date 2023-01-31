/* Products */ 
const productList = [

    { name: "Asus Gaming VG248QG 24", price: 125.990, category: "Componente" },
    { name: "Corsair ICUE 4000x", price: 40.215, category: "Componente" },
    { name: "I9 12900K", price: 250.119, category: "Componente" },
    { name: "Placa de video TUF Gaming geforce RTX 3070TI", price: 270.199, category: "Componente" },
    { name: "mouse hyperx pulsfire", price: 17.496, category: "Periferico" },
    { name: "teclado logitech g g413", price: 20.205, category: "Periferico" },
    { name: "camara Logitech C922", price: 35.150, category: "Periferico" },
    { name: "auricular hyperx cloud II", price: 34.996, category: "Periferico" }
    ];

    let cart = [];

const loadProducts = () => {
  const productListEl = document.getElementById("productsAvailable");
    productList.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `<b> <u> ${product.name} </u> </b> <br> Precio: $${product.price} <br> Categoria: ${product.category}`;
        productListEl.appendChild(li); 
    });

  const productSelectEl = document.getElementById("productAdded");
    productList.forEach((product, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = product.name;
    productSelectEl.add(option);
  });
};


const loadCart = () => {
    const cartListEl = document.getElementById("cartList");
    cartListEl.innerHTML = "";
    cart.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `<b> ${product.name} </b> - $${product.price} - ${product.category}`;
        cartListEl.appendChild(li);
    });

    let totalAmount = 0;
    cart.forEach(product => {
        totalAmount += product.price;
    });

    const totalAmountEl = document.getElementById("totalAmount");
    totalAmountEl.innerHTML = `<i> Total: $${totalAmount}`;
};


const addToCart = product => {
  cart.push(product);
  loadCart();
  localStorage.setItem("cart", JSON.stringify(cart));
};


const removeFromCart = product => {
  const index = cart.indexOf(product);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  loadCart();
  localStorage.setItem("cart", JSON.stringify(cart));
};


const addButtonEl = document.getElementById("addButton");
addButtonEl.addEventListener("click", () => {
  const productSelectEl = document.getElementById("productAdded");
  const selectedIndex = productSelectEl.value;
  addToCart(productList[selectedIndex]);
});


const removeButtonEl = document.getElementById("removeButton");
removeButtonEl.addEventListener("click", () => {
  const productSelectEl = document.getElementById("productAdded");
  const selectedIndex = productSelectEl.value;
  removeFromCart(productList[selectedIndex]);
});


const savedCart = localStorage.getItem("cart");
if (savedCart) {
  cart = JSON.parse(savedCart);
}

loadProducts();
loadCart();