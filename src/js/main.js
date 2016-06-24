import $ from "jquery";
import { items } from "./items";

var pugZilla = [];

items.results.forEach(function(object){
	var pug = {
	title: "",
	titleLink: "",
	image: "",
	store: "",
	storeLink: "",
	price: "",
	currency: "",
	currencySymbol: "",
	}
	pug.title = object.title;
	pug.titleLink = object.url;
	pug.image = object.Images[0].url_75x75;
	pug.store = object.Shop.shop_name;
	pug.storeLink = object.Shop.url;
	pug.price = object.price;
	pug.currency = object.currency_code;

	pugZilla.push(pug);
});

console.log(pugZilla);

pugZilla.forEach(function(object){
	if (object.currency === "USD") {
		object.currencySymbol = "$";
	} else {
		object.currencySymbol = object.currency;
	}
});

function pugPlate (pug){
	return `<div class="pugContainer">
				<div class="imgContainer"><a class="pugImageLink" href="${pug.titleLink}"><img class="pugImage" src="${pug.image}"></a>
				</div>
				<div class="pugTitle"><a class="pugTitleLink" href="${pug.titleLink}">${pug.title}</a>
				</div>
				<div class="store">
					<a class="pugStoreLink" href="${pug.storeLink}">${pug.store}</a>
					<span class="pugCurrency">${pug.currency_code}</span><span class="Price">${pug.price}</span>
			</div>`;
};

pugZilla.forEach(function(pug){
	var node = $(".grid");
	var pugHTML = pugPlate(pug);
	node.append(pugHTML);
});
