// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 50 },
	{ name: "Orange", price: 30, quantity: 60 },
];

// เริ่มเขียนโค้ดตรงนี้
console.log(inventory.length)
function findLessInventory (inventory){
  let lessInventoryQuantity = 0;
  let lessInventoryName
  for (let i = 0; i < inventory.length -1 ; i ++){
    if (inventory[i].quantity <= inventory[i+1].quantity){
      lessInventoryQuantity = inventory[i].quantity
      lessInventoryName = inventory[i].name
    }
    else{
      lessInventoryQuantity = inventory[i+1].quantity
      lessInventoryName = inventory[i+1].name
    }
  }
   return console.log (`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lessInventoryName} ซึ่งมี ${lessInventoryQuantity} ชิ้น`)
}

findLessInventory (inventory);