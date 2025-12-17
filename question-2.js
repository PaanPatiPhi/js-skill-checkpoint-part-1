// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

function modifyInventory (inventory){
  let totalPrice = 0;
  inventory[0].quantity = 200;
  inventory.push({name: "Orange", price: 20, quantity: 300 });
  console.log(inventory)
  for (let item of inventory){
    let total =  item.price * item.quantity
    totalPrice += total;
    console.log(total)
  }
  return console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`)
}

modifyInventory(inventory);
