import { useContext,Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../context/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => {
        const items = products[title];
        return (
          <Fragment key={title}>
            <h2>{title.toUpperCase()}</h2>
            <div className='products-container'>
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;