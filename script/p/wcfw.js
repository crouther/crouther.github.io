/**
* 	Framework (Web Components)
*
*	A collection of support function to dynamically populate and manipulate
*	various page specific web components. Review frameworks.html
*
*	Author: @2MylesAway
*	Portfolio: https://myles.works
**/


var parent = true;
var parentName = "";
var parentIndex = 0;


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
	
}(defaultView()) // onLoad: Auto Magically Run Function


// Populates Component List Field and Image Grid
function populateComponentList(listOf){

	for (index = 0; index < listOf.obj.length; index++) {

		var li = document.createElement("li");
		li.setAttribute("class", "wctbLink");

		li.innerHTML = listOf.obj[index].title;

		var col = document.createElement("div");
		col.setAttribute("class", "column igI");

		var img = document.createElement("img");
		img.src = listOf.obj[index].image;

		col.appendChild(img);

		document.getElementById("txtBank").appendChild(li);
		document.getElementById("imgGrid").appendChild(col);

	}

}(populateComponentList(exampleWBCP)) // onLoad: Populate Component List Field

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

	parent = true;
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

	// Loops through liList array and compares string contained with keyword
	for (i = 0; i < liList.length; i++) {
		liTxt = liList[i].textContent || liList[i].innerText;

		if (liTxt.toUpperCase().indexOf(keyword) > -1){ 
			liList[i].style.display = ""; 
			imgList[i].style.display = ""; 
		}

    	else { 
    		liList[i].style.display = "none"; 
    		imgList[i].style.display = "none"; 
    	}
    }
}


// Event Listener for Component Selected and populates viewer with example
function choiceListener(){

	// Specific to text Component List
	let imgGridList = document.querySelectorAll("div.igI");

	imgGridList.forEach(function(elem) {
	    elem.addEventListener("click", function() {

	    	document.getElementById("vTarget").innerHTML = elem.innerHTML;

	    });
	});

	// Specific to Image Grid Component List
	let txtBankList = document.querySelectorAll("li");

	txtBankList.forEach(function(elem) {
	    elem.addEventListener("click", function() {

	    	let index;

	    	if (parent) {
	    		index = findIndex(exampleWBCP, elem.innerHTML);
		    	var doc = document.getElementById("vTarget").contentWindow.document;
				doc.open();
				doc.write('<!DOCTYPE html><head><link rel="stylesheet" type="text/css" href="https://myles.works/css/AdvantFlat.css"></head><body></body></html>');
				doc.close();
				doc.body.innerHTML = getEx(exampleWBCP, index);

				parentIndex = index;
				updateWithChildren(exampleWBCP, index);
	    	}

	    	else{

	    		//Finds Index of current node in children list
	    		var i = 0;
				while( (elem = elem.previousSibling) != null ) { i++; }

				//Updates iFrame with child node example content
		    	document.getElementById("vTarget").innerHTML = exampleWBCP.obj[parentIndex].children[i].ex; ;
	    	}	
	    });
	});
} (choiceListener()) // onLoad: Listen for user specific choice

//Get the Example text of a dataset item given array and item index
function getEx(listOf, index){return listOf.obj[index].ex;}

//Get the item index given the name of the dataset and keyword / item title
function findIndex(listOf, key){
	for(d = 0; d < listOf.obj.length; d++){
		if (listOf.obj[d].title.toUpperCase().indexOf(key.toUpperCase()) > -1)
			return d;
	}
}

// Starts the children funciton to populate Component List Field and Image Grid
function updateWithChildren(listOf, key){
	parentName = listOf.obj[key].title;

	// Confirms child nodes exist and populates list with them
	if (listOf.obj[key]['children'].length > 0) 
		children(listOf.obj[key]['children']);

	else{console.log(parentName + " has no children");}
}

// Populates Component List Field and Image Grid with children
function children(listOf){

	removeContent();
	document.getElementById("objTitle").innerHTML = "<span class=\"flashingTxt\"><</span>  Children / Support: ";

	// Creates, updates and styles each link or node in child list from parent item
	for (index = 0; index < listOf.length; index++) {

		var li = document.createElement("li");
		var str = "wctbLink " + "parentIs" + listOf[index].parent;
		li.setAttribute("class", str);
		li.innerHTML = listOf[index].title;

		var col = document.createElement("div");
		col.setAttribute("class", "column igI");
		col.setAttribute("class", "parentIs" + listOf[index].parent);

		var img = document.createElement("img");
		img.src = listOf[index].image;

		col.appendChild(img);

		document.getElementById("txtBank").appendChild(li);
		document.getElementById("imgGrid").appendChild(col);
	}

	parent = false;
	console.log("children present and populated for parent: " + parentName);
	choiceListener();
}