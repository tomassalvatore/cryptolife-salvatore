const products = [
  {
    id: 1,
    name: 'VANS Shoes',
    price: 9800,
    img: 'images/zapa-vans.jpg',
    stock: 5,
  },
  {
    id: 2,
    name: 'Adidas T-Shirt',
    price: 5600,
    img: 'images/remera-adidas.jpg',
    stock: 15,
  },
  {
    id: 3,
    name: 'UNDER ARMOUR Short',
    price: 3500,
    img: 'images/short-ua.jpg',
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000);
  });
};
