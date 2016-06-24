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
	currency_code: "",
	currency_symbol: "",
	}
	pug.title = object.title;
	pug.titleLink = object.url;
	pug.image = object.Images[0].url_170x135;
	pug.store = object.Shop.shop_name;
	pug.storeLink = object.Shop.url;
	pug.price = object.price;
	pug.currency_code = object.currency_code;
	pug.currency_symbol = object.currency_code;

	pugZilla.push(pug);
});

pugZilla.forEach(function(object){
	if (object.currency_code === "USD") {
		object.currency_symbol = "$";
	} else if (object.currency_code === "AUD") {
		object.currency_symbol = "A$";
	} else if (object.currency_code === "GBP"){
		object.currency_symbol = "£";
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
					<div class="priceBox">
						<span class="pugCurrency">${pug.currency_symbol}</span><span class="price">${pug.price}</span>
					</div>
			</div>`;
};

pugZilla.forEach(function(pug){
	var node = $(".grid");
	var pugHTML = pugPlate(pug);
	node.append(pugHTML);
});