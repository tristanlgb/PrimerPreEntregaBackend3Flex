const { faker } = require("@faker-js/faker");

const generateMockProduct = () => ({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    category: faker.commerce.department(),
    stock: faker.number.int({ min: 1, max: 100 }), // Updated to use faker.number.int
    thumbnail: faker.image.url(), // Updated to use faker.image.url
    code: faker.string.uuid(), // Updated to use faker.string.uuid
    age: faker.number.int({ min: 0, max: 5 }) // Added age as a random number
});

module.exports = { generateMockProduct };
