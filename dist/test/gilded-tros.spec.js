"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("../src/item");
const gilded_tros_1 = require("../src/gilded-tros");
describe('GildedTrosTest', () => {
    const items = [new item_1.Item('foo', 0, 0)];
    const app = new gilded_tros_1.GildedTros(items);
    app.updateQuality();
    expect(app.items[0].name).toEqual('fixme');
});
