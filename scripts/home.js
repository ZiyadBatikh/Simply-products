
var container = document.getElementById("container");

var categories = database.categories;
var categoriesLinks = [];
for (var i = 0; i < categories.length; i++) {
    var category = categories[i];
    var link = createLink("products.html?categoryId=" + category.id, category.name);
    categoriesLinks.push(link);
}


var categoriesList = createList(categoriesLinks);

container.appendChild(categoriesList);