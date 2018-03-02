var rootNode = document.getElementById("root");
var b = document.querySelector('body');
b.style.backgroundColor = "#333";
b.style.fontStyle = "serif";



function attributeCreation(value,it,el) {
	var att = document.createAttribute(value);
	att.value = it;
	el.setAttributeNode(att);
}

// function elementCreation(name,el,cl) {
// 	var name = document.createElement(el);
// 	name.className = cl;
// }

function previewCreation(arr) {
	// rootNode.removeChild(root.firstChild);
var main = document.createElement('div');
main.className = 'thumbnails';
rootNode.appendChild(main);

var header = document.createElement('header');
main.appendChild(header);


var container = document.createElement('div');
container.className = 'container';
main.appendChild(container);
	var h2 = document.createElement('h2');
	h2.style.color = '#A7A786';
	h2.innerHTML = "Most popular tanks";
	header.appendChild(h2);
	for (var i = 0; i < arr.length; i++) {
		
		var item = document.createElement('div');
		item.className = 'item';
		container.appendChild(item);
		item.addEventListener('click', hashChange);
		attributeCreation("title",arr[i].model,item);
		var figure = document.createElement('figure');
		item.appendChild(figure);
		tankImg = document.createElement('img');
		tankImg.className = 'tankImg';
		figure.appendChild(tankImg);
		attributeCreation("src",arr[i].preview,tankImg);
		var figcaption = document.createElement('figcaption');
		item.appendChild(figcaption);
		countryImg = document.createElement('img');
		countryImg.className = 'countryImg';
		figcaption.appendChild(countryImg);
		attributeCreation("src",arr[i].country_image,countryImg);
		level = document.createElement('span');
		figcaption.appendChild(level);
		level.innerHTML = arr[i].level;
		level.className = 'level';
		model = document.createElement('span');
		model.className = 'model';
		figcaption.appendChild(model);
		model.innerHTML = arr[i].model;

		function hashChange() {
			var next = this.children[1];
			location.hash = next.children[2].innerHTML;
		}
	}

}

// previewCreation(tanks);

function detailsCreation(arr) {
	// var main = rootNode.firstChild;
	// 	main.className = 'tank-details';
	rootNode.innerHTML = '';


	for (var i = 0; i < arr.length; i++) {
		if (arr[i].model == location.hash.substr(1)) {
			var currentModel = arr[i];
			
		}

	}
	//console.log(currentModel);

	var main = document.createElement('div');
	main.className = 'tank-details';
	rootNode.appendChild(main);
	var header = document.createElement('header');
	header.className = 'header';
	main.appendChild(header);
	countryImg = document.createElement('img');
	header.appendChild(countryImg);
	attributeCreation("src",currentModel.country_image,countryImg);
	
	model = document.createElement('span');
	header.appendChild(model);
	model.innerHTML = currentModel.model.toUpperCase();
	level = document.createElement('span');
	header.appendChild(level);
	level.innerHTML = '(level ' +currentModel.level+ ')';
	var container = document.createElement('div');
	container.className = 'container';
	rootNode.appendChild(container);
	var tank = document.createElement('div');
	tank.className = 'tank';
	container.appendChild(tank);
	var table = document.createElement('div');
	table.className = 'table';
	container.appendChild(table);
	title1 = document.createElement('h3');
	tank.appendChild(title1);
	title1.innerHTML = 'Preview';
	title2 = document.createElement('h3');
	table.appendChild(title2);
	title2.innerHTML = 'Characteristic';
	title1.innerHTML = 'Preview';
	tankImg = document.createElement('img');
	tank.appendChild(tankImg);
	attributeCreation("src",currentModel.preview,tankImg);
	tableTemp = document.createElement('table');
	table.appendChild(tableTemp);
	for (item in currentModel.details) {
		var tr = document.createElement('tr');
		tableTemp.appendChild(tr);
		var td = document.createElement('td');
		tr.appendChild(td);
		td.innerHTML = item.replace(/_/gi,' ');
		var td2 = document.createElement('td');
		tr.appendChild(td2);
		td2.innerHTML = currentModel.details[item];
	}

	var aBack = document.createElement('a');
	rootNode.appendChild(aBack);
	aBack.innerHTML = 'Back to list view';
	attributeCreation("href",'',aBack);
}



function locationHashChange(arr) {

     if (location.hash == "") {
    	previewCreation(arr);
    	console.log('hi');  
} else {
	detailsCreation(tanks);
}
}

window.onhashchange = locationHashChange;

locationHashChange(tanks);