"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    name;
    sellIn;
    quality;
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    toString() {
        return `${this.name}, ${this.sellIn}, ${this.quality}`;
    }
}
exports.Item = Item;
