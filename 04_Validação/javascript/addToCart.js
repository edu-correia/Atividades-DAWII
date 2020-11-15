function addProduct(productId){
     let productList = JSON.parse(localStorage.getItem('productList') || '[]');

     productList.push(productId);

     localStorage.setItem('productList', JSON.stringify(productList));
}