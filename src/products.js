const products = [
  {
    id: 1,
    name: 'VANS Shoes',
    price: '0,0021BTC',
    img: 'images/zapa-vans.jpg',
    stock: 5,
    category: 'shoe',
  },
  {
    id: 2,
    name: 'Adidas T-Shirt',
    price: '0,0012BTC',
    img: 'images/remera-adidas.jpg',
    stock: 15,
    category: 'shirt',
  },
  {
    id: 3,
    name: 'UNDER ARMOUR Short',
    price: '0,00074BTC',
    img: 'images/short-ua.jpg',
    stock: 10,
    category: 'short',
  },
];

const categories = [
  { id: 'shoes', description: 'Shoes' },
  { id: 'shirts', description: 'Shirts' },
  { id: 'shorts', description: 'Shorts' },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
  });
};

export const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products[1]), 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((prod) => parseInt(prod.id) === parseInt(id));
    setTimeout(() => {
      resolve(product);
    }, 1000);
  });
};
