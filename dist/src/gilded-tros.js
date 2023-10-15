"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedTros = void 0;
class GildedTros {
    items;
    constructor(items) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach((item) => {
            if (item.name !== "B-DAWG Keychain") {
                item.sellIn--;
                if (item.name === "Good Wine") {
                    item.quality = Math.min(item.quality + 1, 50);
                }
                else if (this.IsBackstagePass(item)) {
                    if (item.sellIn <= 0) {
                        item.quality = 0;
                    }
                    else if (item.sellIn <= 5) {
                        item.quality = Math.min(item.quality + 3, 50);
                    }
                    else if (item.sellIn <= 10) {
                        item.quality = Math.min(item.quality + 2, 50);
                    }
                    else {
                        item.quality = Math.min(item.quality + 1, 50);
                    }
                }
                else if (item.quality > 0) {
                    if (item.sellIn <= 0) {
                        if (this.IsSmellyItem(item)) {
                            item.quality = Math.max(item.quality - 4, 0);
                        }
                        else {
                            item.quality = Math.max(item.quality - 2, 0);
                        }
                    }
                    else {
                        if (this.IsSmellyItem(item)) {
                            item.quality = Math.max(item.quality - 2, 0);
                        }
                        else {
                            item.quality = Math.max(item.quality - 1, 0);
                        }
                    }
                }
            }
        });
    }
    IsSmellyItem(item) {
        return (item.name == "Duplicate Code" ||
            item.name == "Long Methods" ||
            item.name == "Ugly Variable Names");
    }
    IsBackstagePass(item) {
        return (item.name === "Backstage passes for Re:Factor" ||
            item.name === "Backstage passes for HAXX");
    }
}
exports.GildedTros = GildedTros;
