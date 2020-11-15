var pedidosDiv = document.querySelector('#pedidos');
var totalDiv = document.querySelector('#total');
var totalResult = document.querySelector('#totalResult');
var totalNum = 0;

var productsArray = [
    {
        title: "Hambúrguer",
        url: "./assets/hamburguer.png",
        price: 22.50
    },
    {
        title: "Tênis",
        url: "./assets/tenis.png",
        price: 130
    },
    {
        title: "iPhone",
        url: "./assets/iphone.png",
        price: 6500
    },
    {
        title: "Pizza",
        url: "./assets/pizza.png",
        price: 29.90
    },
    {
        title: "AirPods",
        url: "./assets/airpods.png",
        price: 1399
    },
    {
        title: "Sapato",
        url: "./assets/sapato.png",
        price: 220
    },
    {
        title: "Headset",
        url: "./assets/headset.png",
        price: 89.90
    }
];

(() => {
    let productList = JSON.parse(localStorage.getItem('productList') || '[]');
    console.log(productList);


    productList.map(item => {
        let product = productsArray[item];
        console.log(product);

        let prodTitle = document.createElement('h2');
        let prodPrice = document.createElement('p');
        let prodPriceInTable = document.createElement('p');
        let prodDetails = document.createElement('div');
        let prodImg = document.createElement('img');
        let prodDiv = document.createElement('div');

        let prodTitleText = document.createTextNode(product.title);
        let prodPriceText = document.createTextNode(`R$ ${product.price}`);
        let prodPriceTextInTable = document.createTextNode(`R$ ${product.price}`);

        prodImg.src = product.url;
        prodImg.alt = product.title;

        prodDiv.setAttribute('class', 'pedido');

        prodPrice.appendChild(prodPriceText);
        prodTitle.appendChild(prodTitleText);
        prodDetails.appendChild(prodTitle);
        prodDetails.appendChild(prodPrice);
        prodDiv.appendChild(prodImg);
        prodDiv.appendChild(prodDetails);
        pedidos.appendChild(prodDiv);

        prodPriceInTable.appendChild(prodPriceTextInTable);
        totalDiv.appendChild(prodPriceInTable);
        totalNum = totalNum + product.price;
    })

    totalResult.innerHTML = totalNum.toFixed(2);
})()