var tile = document.getElementsByClassName("blog")[0];
var items = json.items;
var maxLength = (items.length) / 4;

for( var i = 0; i < items.length; i++) {

	var div = document.createElement("div");
	div.classList.add("tileBlock");
	tile.appendChild(div);

  if(items[i].url != null){
    var anchor = document.createElement("a");
    anchor.classList.add("tileImg");
    anchor.href = items[i].url;
  }

  else{
    var anchor = document.createElement("a");
    anchor.classList.add("tileImg");
    anchor.href = "#";
  }

  if(items[i].img != null){

    var img = document.createElement("img");
    img.setAttribute("src", items[i].img);

    if(items[i].icon != null){
      
      var inDiv = document.createElement("div");
      inDiv.classList.add("tbIcon");

      if(items[i].iconBkgc != null){
        inDiv.classList.add(items[i].iconBkgc);
      }
      inDiv.appendChild(img);
      anchor.appendChild(inDiv);
    }
    else{anchor.appendChild(img);}
  }
    
    var text = document.createElement("div");
    text.classList.add(items[i].color);

    var h3 = document.createElement("h3");
    h3.innerHTML = items[i].header;
    text.appendChild(h3);

    var p = document.createElement("p");
    p.innerHTML = items[i].description;
    text.appendChild(p);

    anchor.appendChild(text);
    div.appendChild(anchor);
}