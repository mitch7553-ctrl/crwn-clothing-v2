import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments, addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    //addCollectionAndDocuments('categories', SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      //setProducts(categoryMap);
      console.log(categoryMap);
    };
    
    getCategoriesMap();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};