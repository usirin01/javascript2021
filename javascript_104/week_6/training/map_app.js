//create a map
const settings = new Map();//new memory üzerinden yeni alan aliyor
//put some values into the map
settings.set("customerMaxProductSize", 100);
settings.set("theme", "dark");
settings.set("language", "de");

console.log(settings);
//retreieve a value from the map
const maxProductSize = settings.get("customerMaxProductSize")
console.log(maxProductSize);

const doYouHaveALanguage = settings.has("shoeSize");
console.log(doYouHaveALanguage);

console.log(settings.size)

const values = settings.values();
console.log(values)

const keys = settings.keys();

settings.delete("customerMaxProductSize");

settings.clear();

///////////////////////////////////////////////////////////////////////////////What is difference?

const settings = {
    "customerMaxProductSize":100,
    "theme":"dark",
    "language":"de"
}

settings["bodySize"] = "XL";
delete settings["theme"];
settings.language
Object.keys(settings).length
if(settings.customerMaxProductSize != undefined){

}

