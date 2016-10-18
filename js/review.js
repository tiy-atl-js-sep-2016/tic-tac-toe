/*
   What's the deal with jQuery?

  Install with a build tool? `npm install jquery`
  Without build tool? Download the js file and use a script tag.

  `$`

 // var panel = document.querySelector("#panel1");
 // var jqueryPanel = $(panel)
 // $("#heading")


 // addClass, removeClass, toggleClass
 // jqueryPanel.html(`<p>Hi there</p>`)

 // $.ajax

 // .html - completely replace the inside of this
 // .append - add to the bottom of this

 */

/*

  Nested data access

   Etsy Search data

   * data.results
     * Get: img url, title, price, shop name, shop url, item url

  * Instead of generating HTML,
    make the data I have look like the data I want

*/

function extractUsefulData (etsyItem) {
  var title = etsyItem.title;
  var image = etsyItem.Images[0].url_75x75;
  var storeName = etsyItem.Shop.shop_name;
  var storeUrl = etsyItem.Shop.url;
  var price = etsyItem.price;
  var url = etsyItem.url;

  return {
    title: title,
    image: image,
    store: storeName,
    storeUrl: storeUrl,
    url: url,
    price: price
  };
};

// for (var i = 0; i < data.results.length; i++) {
//   var item = data.results[i];
//   console.log(extractUsefulData(item));
// }

// data.results.forEach(function (item) {
//   console.log(extractUsefulData(item));
// });

function cheaperThan50Dollars (item) {
  return Number(item.price) < 50;
};

var betterData = data.results.map(extractUsefulData);
// var generatedHTML = betterData.map(makeEtsyHtml);

// loop over generatedHTML and add to page

// var filteredItems = [];
// for (var i = 0; i < betterData.length; i++) {
//   var item = betterData[i];
//   if (item.price < 50) {
//     filteredItems.push(item);
//   }
// }

betterData.filter(function (item) {
  return Number(item.price) < 50;
});

var cheaperThan50 = betterData.filter(function (x) { return x.price < 50; });
var costlierThan50 = betterData.filter(function (x) { return x.price > 50; });

function isVowel (letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(letter.toLowerCase());
}

function translate (phrase) {
  var result = "";

  phrase.split("").forEach(function (letter) {
    var specialLetter = isVowel(letter) || letter === ' ';

    if (specialLetter) {
      result += letter;
    } else {
      result += letter + "o" + letter;
    }
  });

  return result;
};

console.assert(translate("a") === "a", "translate vowels");
console.assert(translate("l") === "lol", "translate consonants");
console.assert(translate("brit") === "bobroritot", "translate whole words");
console.assert(translate("Emily") === "Emomilolyoy", "treat capital vowels the same");
console.assert(translate("Brit") === "BoBroritot", "treat capital consonants the same");
console.assert(translate("this is fun") === "tothohisos isos fofunon", "handle spaces like vowels");

// console.assert(translate("Alajuwon") === "Alolajojuwowonon", "Translation is failing");
