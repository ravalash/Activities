var imgTags = document.querySelectorAll("img");
var aTags = document.querySelectorAll("a");
var h4Tags = document.querySelectorAll("h4");

imgTags[0].setAttribute("src", "images/image_1.jpg");
imgTags[0].setAttribute("alt", "man at computer");
imgTags[1].setAttribute("src", "images/image_2.jpg");
imgTags[1].setAttribute("alt", "group meeting");
imgTags[2].setAttribute("src", "images/image_3.jpg");
imgTags[2].setAttribute("alt", "laughing coworkers");


aTags[0].setAttribute("href", "#");

for (i = 0; i < imgTags.length; i++) {
    imgTags[i].setAttribute("style", "border: solid, red, 100px; padding:10px; margin:10px;");
}