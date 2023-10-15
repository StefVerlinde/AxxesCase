"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("../src/item");
const gilded_tros_1 = require("../src/gilded-tros");
console.log('AXXES CODE KATA - GILDED TROS');
const items = [
    new item_1.Item('Ring of Cleansening Code', 10, 20),
    new item_1.Item('Good Wine', 2, 0),
    new item_1.Item('Elixir of the SOLID', 5, 7),
    new item_1.Item('B-DAWG Keychain', 0, 80),
    new item_1.Item('B-DAWG Keychain', -1, 80),
    new item_1.Item('Backstage passes for Re:Factor', 15, 20),
    new item_1.Item('Backstage passes for Re:Factor', 10, 49),
    new item_1.Item('Backstage passes for HAXX', 5, 49),
    new item_1.Item('Duplicate Code', 3, 6),
    new item_1.Item('Long Methods', 3, 6),
    new item_1.Item('Ugly Variable Names', 3, 6)
];
const app = new gilded_tros_1.GildedTros(items);
let days = 4;
const args = process.argv.slice(2);
if (args.length > 0) {
    days = +args[0] + 1;
}
for (let i = 0; i < days; i++) {
    console.log('-------- day ' + i + ' --------');
    console.log('name, sellIn, quality');
    items.map(item => item.toString()).forEach(item => console.log(item));
    console.log();
    app.updateQuality();
}
