
function createList(arr) {
    var ul = document.createElement("ul");

    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.appendChild(arr[i]);
        ul.appendChild(li);
    }
    return ul;
}


function createLink(url, text) {
    var link = document.createElement("a");
    var linkText = document.createTextNode(text);
    link.appendChild(linkText);
    var href = document.createAttribute("href");
    href.value = url;
    link.setAttributeNode(href);
    return link;
}

function createImage(url) {

}

function createSpan(text) {

}


function createDiv(innerItem) {
    var div = document.createElement("div");
    div.appendChild(innerItem);
    return div;
}




