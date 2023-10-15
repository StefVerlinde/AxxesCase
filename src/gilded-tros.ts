import { Item } from "./item";

export class GildedTros {
  constructor(public items: Array<Item>) {}

  public updateQuality(): void {
    this.items.forEach((item) => {
      // If its a B-DAWG Keychain, nothing needs to happen
      if (item.name !== "B-DAWG Keychain") {
        // SellIn is always decreases by 1
        item.sellIn--;

        // If its a Good Wine, the quality increases by 1
        if (item.name === "Good Wine") {
          item.quality = Math.min(item.quality + 1, 50);
        } else if (this.IsBackstagePass(item)) {
          // If its a Backstage Pass, the quality increases depending on the sellIn amount
          if (item.sellIn <= 0) {
            // Quality drops to 0 after the concert
            item.quality = 0;
          } else if (item.sellIn <= 5) {
            // Quality increases by 3 when there are 5 days or less
            item.quality = Math.min(item.quality + 3, 50);
          } else if (item.sellIn <= 10) {
            // Quality increases by 2 when there are 10 days or less
            item.quality = Math.min(item.quality + 2, 50);
          } else {
            // Quality increases by 1 when there are more than 10 days
            item.quality = Math.min(item.quality + 1, 50);
          }
          // Check if the quality is still positive
        } else if (item.quality > 0) {
          // If the SellIn is negative, the quality decreases twice as fast
          if (item.sellIn <= 0) {
            if (this.IsSmellyItem(item)) {
              // If the item is a smelly item, the quality decreases again twice as fast
              item.quality = Math.max(item.quality - 4, 0);
            } else {
              item.quality = Math.max(item.quality - 2, 0);
            }
          } else {
            if (this.IsSmellyItem(item)) {
              // If the item is a smelly item, the quality decreases again twice as fast
              item.quality = Math.max(item.quality - 2, 0);
            } else {
              item.quality = Math.max(item.quality - 1, 0);
            }
          }
        }
      }
    });
  }

  private IsSmellyItem(item: Item): boolean {
    return (
      item.name == "Duplicate Code" ||
      item.name == "Long Methods" ||
      item.name == "Ugly Variable Names"
    );
  }

  private IsBackstagePass(item: Item): boolean {
    return (
      item.name === "Backstage passes for Re:Factor" ||
      item.name === "Backstage passes for HAXX"
    );
  }
}
