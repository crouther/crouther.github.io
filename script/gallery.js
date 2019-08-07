/**
* 	Image Gallery
*	Hash Tag based Image population from Javascript Object JSON-like
*	data set stored in img.js
*
*	Author: @2MylesAway
*	Portfolio: https://myles.works
**/


//Places Container Created
var placesmwBox = document.createElement("div");
placesmwBox.setAttribute("class", "mw-box");

//Groups List Container
var placesFb4c = document.createElement("div");
placesFb4c.setAttribute("class", "fb4c");

//Places Population Loop
for (j = 0; j < gallery.Country.length; j++) {

	//Variables
	var embeddedItem = document.createElement("div");
	embeddedItem.setAttribute("class", "embeddedItem");

	var ul = document.createElement("ul");

	var a = document.createElement("a");
	a.setAttribute('href', ((document.location.href.toString().substring(0,document.location.href.toString().length-2) + j + '0' )));

	var h4 = document.createElement("h4");
	h4.innerHTML = gallery.Country[j].name;

	a.appendChild(h4);
	ul.appendChild(a);

	//City List Population Loop
	for(k = 0; k < gallery.Country[j].city.length; k++){

		var aLi = document.createElement("a");
		aLi.setAttribute('href', ((document.location.href.toString().substring(0,document.location.href.toString().length-2) + j + k )));	

		var li = document.createElement("li");
		li.innerHTML = gallery.Country[j].city[k].name;

		aLi.appendChild(li);
		ul.appendChild(aLi);
	}

	embeddedItem.appendChild(ul);
	placesFb4c.appendChild(embeddedItem);
}

placesmwBox.appendChild(placesFb4c);
document.getElementById("moreGalleries").appendChild(placesmwBox); 

//Refresh and Update Page on Source Click
let elementsArray = document.querySelectorAll("a");

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
    	window.scrollTo(0, 0);
    	window.location.href = elem.getAttribute("href").toString();
        location.reload();
    });
});

/** New Content Section **/

//Find Gallery By Hash Tag
var pathname = document.location.href.toString();
var nation = pathname.substring(pathname.length-2, pathname.length-1);
var town = pathname.substring(pathname.length-1, pathname.length);

//Title and Place Named
document.getElementById("JourneyName").innerHTML = gallery.Country[nation].name;
document.getElementById("CityName").innerHTML = gallery.Country[nation].city[town].name;

//Image Container Created
var mwBox = document.createElement("div");
mwBox.setAttribute("class", "mw-box");

//Primary Image Displayed
var img1 = new Image();
img1.src = gallery.Country[nation].city[town].images[0];
img1.setAttribute("class", "headerImg");

mwBox.appendChild(img1); 

//Secondary Images Container
var fb4c = document.createElement("div");
fb4c.setAttribute("class", "fb4c");

//Secondary Images Population Loop
for (i = 1; i < gallery.Country[nation].city[town].images.length; i++) {

	var embeddedItem = document.createElement("div");
	embeddedItem.setAttribute("class", "embeddedItem");

	var tempIMG = new Image();
	tempIMG.src = gallery.Country[nation].city[town].images[i];
	tempIMG.setAttribute("class", "MKCBars loadingAnimation");

	embeddedItem.appendChild(tempIMG);
	fb4c.appendChild(embeddedItem); 
}

//Update Interface to Display Image Gallery
mwBox.appendChild(fb4c);
document.getElementById("img-container").appendChild(mwBox);