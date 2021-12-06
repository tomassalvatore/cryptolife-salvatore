const products = [
  {
    id: 1,
    name: 'VANS Shoes',
    price: '0,0021BTC',
    img: 'images/zapa-vans.jpg',
    stock: 5,
  },
  {
    id: 2,
    name: 'Adidas T-Shirt',
    price: '0,0012BTC',
    img: 'images/remera-adidas.jpg',
    stock: 15,
  },
  {
    id: 3,
    name: 'UNDER ARMOUR Short',
    price: '0,00074BTC',
    img: 'images/short-ua.jpg',
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
};

export const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products[1]), 2000);
  });
};
