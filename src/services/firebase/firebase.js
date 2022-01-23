import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCE2qgiji1J4e8ou6uset1LqTaAAL27YV4',
  authDomain: 'coderhouse-ecommerce-16995.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-16995',
  storageBucket: 'coderhouse-ecommerce-16995.appspot.com',
  messagingSenderId: '831271679287',
  appId: '1:831271679287:web:5dde9100d70b96e440d6b2',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getProducts = (key, operator, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery =
      key && operator && value ? query(collection(db, 'items'), where(key, operator, value)) : collection(db, 'items');

    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((error) => {
        reject('Error obteniendo productos: ', error);
      });
  });
};

export const getCategories = (key) => {
  return new Promise((resolve, reject) => {
    const key = collection(db, 'categories');

    getDocs(key)
      .then((querySnapshot) => {
        const category = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(category);
      })
      .catch((error) => {
        reject('ERROR', error);
      });
  });
};
