import React from 'react';
import useProducts from '../utils/useProducts';
import { Link } from 'react-router-dom';

const ProductPopup = ({ searchTerm = '' }) => {
  const { products, loading, error } = useProducts('https://fakestoreapi.com/products');

  const filteredProducts = products.filter(product =>
    searchTerm && typeof searchTerm === 'string' && product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="absolute top-[50px] right-0">
      <div className="w-80 z-10 h-96 overflow-y-auto rounded-lg bg-white shadow-lg">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Link to={"product/" + product.id} key={product.id}>
              <div className="p-4 flex items-center space-x-4 border-b border-gray-300 hover:bg-gray-100 transition-colors duration-300">
                <img src={product.image} className="h-14 w-14 object-contain flex-shrink-0" alt={product.title} />
                <div className="font-semibold text-sm line-clamp-2 text-left">{product.title}</div>
                <div className="text-gray-600">${product.price}</div>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-4 text-center text-gray-600">No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductPopup;
