const player = {
      name: 'Sakib',
      age: 32,
      salary: '1lac',
      phone: 123654
}

// keys 
const keys = Object.keys(player);
// console.log(keys);

// values
const values = Object.values(player);
console.log(values);

// entries
const entries = Object.entries(player);
console.log(entries);

// Delete
delete player.phone;
console.log(player);

// delete | using destructuring
const {phone, ...newlist} = player;
// console.log(phone);
console.log(newlist);

// freeze

Object.freeze(player);
player.isFamous = true;
console.log(player);

// seal
Object.seal(player);
player.isIndian = false;
player.age = 38;
console.log(player);

