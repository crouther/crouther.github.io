var exampleWBCP = {
	obj: [
		{
			"title": "Header",
			"type": "Web Object",
			"parent": "header",
			"brief": "Header: Site navigational tool",
			"image": "../../img/icon/appian.png",
			"line": "766",
			"link": "AdvantFlat.css",
			"abrv": "header",
			"ex": "<div class=\"header\" style=\"background-color:black; height: 100px;\"></div>",
			"children": [],
		},
		{
			"title": "Menu",
			"type": "Web Object",
			"parent": "menu",
			"brief": "Menu: Site navigational tool",
			"image": "../../img/icon/cisco.png",
			"line": "766",
			"link": "AdvantFlat.css",
			"abrv": "menu",
			"ex": "<div id=\"iconMenu\" style=\"background-color: #3F8879; border-radius: 100%; right: 0; top: 0; margin: 1.5em; position: absolute; padding: 1em; z-index: 5;\" onclick=\"openMenu();\"><img src=\"../../img/icon/menu.png\" style=\"height: 1.5em; width: 1.5em;\"/></div><div id=\"textMenu\" style=\"background-color: #919b9f; right: 0; top: 0; margin: 1.5em; position: absolute; padding: 2em; opacity: 0; z-index: 1;\"><ul style=\"list-style-type: none; line-height: 2em;\"><li><h3><a href=\"#about\">About</a></h3></li><li><h3><a href=\"#work\">Work</a></h3></li><li><h3><a href=\"mailto:email@motov.app\" target=\"_blank\">Contact</a></h3></li></ul><div style=\"position: absolute; bottom: 5; left: 5;\" onclick=\"closeMenu();\">x</div></div>",
			"children": [],
		},
		{
			"title": "Frames",
			"type": "Frames",
			"parent": "Frames",
			"brief": "Frames: Full page layout containers for organizing the navigation and groupings of all sectional content",
			"image": "../../img/icon/dhs.png",
			"line": "47",
			"link": "AdvantFlat.css",
			"abrv": "fb2c",
			"ex": "<div class=\"header\" style=\"background-color:black; height: 100px;\"></div><div class=\"fb4c\"><div class=\"embeddedItem yellow\" style=\"height: 100px;\"></div><div class=\"embeddedItem yellowgreen\" style=\"height: 100px;\"></div><div class=\"embeddedItem greenSpring\" style=\"height: 100px;\"></div><div class=\"embeddedItem limegreen\" style=\"height: 100px;\"></div></div><div class=\"fb2c\"><div class=\"item fadedManila\" style=\"height: 100px;\"></div><div class=\"item darkTan\" style=\"height: 100px;\"></div>",
			"children": [],
		},
		{
			"title": "Boxes",
			"type": "Boxes",
			"parent": "Boxes",
			"brief": "Boxes: Container items to hold various page sections, content, and oranizational schemes",
			"image": "../../img/icon/faa.png",
			"line": "47",
			"link": "AdvantFlat.css",
			"abrv": "fb2c",
			"ex": "<div class=\"fb4c\"><div class=\"embeddedItem yellow\" style=\"height: 100px;\"></div><div class=\"embeddedItem yellowgreen\" style=\"height: 100px;\"></div><div class=\"embeddedItem greenSpring\" style=\"height: 100px;\"></div><div class=\"embeddedItem limegreen\" style=\"height: 100px;\"></div></div><div class=\"fb2c\"><div class=\"item limegreen\" style=\"height: 100px;\"></div><div class=\"item fadedManila\" style=\"height: 100px;\"></div>",
			"children": [
				{
					"title": "Flexbox (2 Column)",
					"type": "child",
					"parent": "Boxes",
					"brief": "Flexbox (2 Column): item grid for organizing web content in 2 columns while landscape and a single column while portrait",
					"image": "../../img/icon/cc.png",
					"line": "47",
					"link": "AdvantFlat.css",
					"abrv": "fb2c",
					"ex": "<div class=\"fb2c\"><div class=\"item square yellow\" style=\"height: 100px;\"></div><div class=\"item square yellowgreen\" style=\"height: 100px;\"></div>",
					"children": [],
				},
				{
					"title": "Flexbox (4 Column)",
					"type": "child",
					"parent": "Boxes",
					"brief": "Flexbox (4 Column): item grid for organizing web content in 4 columns while landscape and 2 columns while portrait",
					"image": "../../img/icon/cc.png",
					"line": "47",
					"link": "AdvantFlat.css",
					"abrv": "fb4c",
					"ex": "<div class=\"fb4c\"><div class=\"embeddedItem yellow\" style=\"height: 100px;\"></div><div class=\"embeddedItem yellowgreen\" style=\"height: 100px;\"></div><div class=\"embeddedItem greenSpring\" style=\"height: 100px;\"></div><div class=\"embeddedItem limegreen\" style=\"height: 100px;\"></div></div>",
					"children": [],
				},
			]
		},
		{
			"title": "Footer",
			"type": "Web Object",
			"parent": "footer",
			"brief": "Footer: Site navigational tool",
			"image": "../../img/icon/cypher.png",
			"line": "766",
			"link": "AdvantFlat.css",
			"abrv": "footer",
			"ex": "<div style=\"height: 80vh; background-color: #f3f;\"></div><div class=\"footer\" style=\"background-color: #fff; height: 4em;\"><p class= \"ftl1\"><br><br>Footer Placed Here!</p></div>",
			"children": [],
		},
		{
			"title": "Text",
			"type": "Text",
			"parent": "text",
			"brief": "Text: Text formatting, structure and responsive properties for various layouts",
			"image": "../../img/icon/btc.png",
			"line": "47",
			"link": "AdvantFlat.css",
			"abrv": "txt",
			"ex": "<p class =\"bMain\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
			"children": [],
		},
		{
			"title": "Button",
			"type": "Web Object",
			"parent": "button",
			"brief": "Button: Standard single click, single function button",
			"image": "../../img/icon/ducati.png",
			"line": "766",
			"link": "AdvantFlat.css",
			"abrv": "button",
			"ex": "<button class=\"button\">Get Advising</button>",
			"children": [],
		},
		{
			"title": "Timeline",
			"type": "Web Component",
			"parent": "Timeline",
			"brief": "Timeline: Javascript Object (JSON) datasets leveraged to populate a vertically expanding timeline.",
			"image": "../../img/icon/coding.svg",
			"line": "60",
			"link": "AdvantFlat.css",
			"abrv": "timeline",
			"ex": "<div class=\"timeline\" id=\"w3-timeline\"></div>",
			"children": [],
		},
		{
			"title": "Theme Color List",
			"type": "color",
			"parent": "color",
			"brief": "Theme Color List: Predefined framework specific color schemes specific to portfolio needs. [use: optional]",
			"image": "../../img/icon/bimbo.png",
			"line": "47",
			"link": "AdvantFlat.css",
			"abrv": "txt",
			"ex": "<p class =\"redTxt\"> </p>",
			"children": [],
		}
	]
}