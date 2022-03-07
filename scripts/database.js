
var database = {
    "categories": [
        {
            "id": 1,
            "name": "Tablets & Phones",
            "image": ""
        },
        {
            "id": 2,
            "name": "Home & Office",
            "image": ""
        }
    ],
    "products": [
        {
            "id": 100,
            "name": "Samsung Galaxy S4",
            "price": 3000,
            "image": "",
            "categoryId": 1
        },
        {
            "id": 101,
            "name": "IPhone 6s",
            "price": 6000,
            "image": "",
            "categoryId": 1
        }
    ],
    "basket": []
};


//----------Data Access Code----------------
function getProductsByCategoryId(categoryId) {
    return database.products.filter(p => p.categoryId == categoryId);
}


function addProduct(product) {
    database.products.push(product);
}
