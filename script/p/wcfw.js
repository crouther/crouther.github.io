/**
* 	Framework (Web Components)
*
*	A collection of support function to dynamically populate and manipulate
*	various page specific web components. Review frameworks.html
*
*	Author: @2MylesAway
*	Portfolio: https://myles.works
**/


// Toggle Text or Tile View of Web Component Object Selction in componentList 
function hideBank(){document.getElementById("txtBank").style.display = "none";}
function showBank(){document.getElementById("txtBank").style.display = "block";}
function hideTile(){document.getElementById("imgGrid").style.display = "none";}
function showTile(){document.getElementById("imgGrid").style.display = "block";}

// Checks initial Hash Tag value to set conponentList Viewer List styling
function defaultView(){
	if (window.location.hash.substring(0, 5).localeCompare("#tile") == 0) 
		{ hideBank();	showTile(); }
	else{ showBank();	hideTile(); }
	
}(defaultView()) //onLoad: Auto Magically Run Function


// Populates Component List Field and Image Grid
function populateComponentList(listOf){

	for (index = 0; index < listOf.obj.length; index++) {

		var li = document.createElement("li");
		li.setAttribute("class", "wctbLink");

		li.innerHTML = listOf.obj[index].title;

		var col = document.createElement("div");
		col.setAttribute("class", "column");

		var img = document.createElement("img");
		img.src = listOf.obj[index].image;

		col.appendChild(img);

		document.getElementById("txtBank").appendChild(li);
		document.getElementById("imgGrid").appendChild(col);

	}

}(populateComponentList(exampleWBCP)) //onLoad: Populate Component List Field

// Initiates populateComponentList() if no content is available 
function addContent(){
	if(!document.getElementById("imgGrid").hasChildNodes()){
		removeContent();	populateComponentList(exampleWBCP);
		document.getElementById("objTitle").innerHTML = "Component List";
	}
}

// Clears componentList for new content
function removeContent(){
	var bank = document.getElementById("txtBank");
	while (bank.firstChild) { bank.removeChild(bank.firstChild); }

	var grid = document.getElementById("imgGrid");
	while (grid.firstChild) { grid.removeChild(grid.firstChild); }
}


// Changes Component List View to Sort Options
function startSort(){

	hideTile();		showBank();
	window.location.hash = "";

	var arr = ["title", "type", "parent", "line"];
	document.getElementById("objTitle").innerHTML = "<span class=\"flashingTxt\"><</span>  By: ";

	removeContent();

	for (b = 0; b < 4; b++){

		var sortLi = document.createElement("li");
		sortLi.setAttribute("class", "wctbLink sort");

		sortLi.innerHTML = arr[b].toUpperCase();

		document.getElementById("txtBank").appendChild(sortLi);
	}
}


// Toggle Search Field Visibility
function toggleSearchBar(){
	if (document.getElementById("searchBar").style.display == "none") 
		showSearchBar();
	else { hideSearchBar(); }
}

function hideSearchBar(){
	document.getElementById("searchBar").style.display = "none"; }

function showSearchBar(){
	document.getElementById("searchBar").style.display = "block"; }

// Find keywords or user input that matches component briefs
function search(){

	// Variable declaration
	var input, keyword, ul, liList, c, liTxt;

	input = document.getElementById("searchField");
	keyword = input.value.toUpperCase();

	ul = document.getElementById("txtBank");
	liList = ul.getElementsByTagName("li");

	imgG = document.getElementById("imgGrid");
	imgList = imgG.getElementsByTagName("div");

	// Loops through liList array list and compares string contained with keyword
	for (i = 0; i < liList.length; i++) {
		liTxt = liList[i].textContent || liList[i].innerText;

		if (liTxt.toUpperCase().indexOf(keyword) > -1)
			{ liList[i].style.display = ""; imgList[i].style.display = ""; }

    	else { liList[i].style.display = "none"; imgList[i].style.display = "none"; }
    }
}