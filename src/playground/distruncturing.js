// const person = {
//   name: 'Artems',
//   age: 28,
//   location: {
//     city: 'Kirpene',
//     temp: -5
//   }
// };

// const { name: firstName = "lol", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book =  {
//   title: 'Lord Of The Ring',
//   author: 'J. R. R. Tolkien',
//   publisher: {
//     name: 'Allen & Unwin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Jupiter Street', 'Kirpene', 'Dobele', '3710'];

const [, city, state ] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ name, ,medium ] = item;

console.log(`A medium ${name} costs ${medium}`);