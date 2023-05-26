// services/inventoryService.js
class InventoryService {
    inventory = [];
  
    getInventory() {

      return this.inventory;
    }
  
    addInventoryItem(item) {
      this.inventory.push(item);
    }
  
    updateInventoryItem(item) {
     }
  }
  
  export default new InventoryService();
  