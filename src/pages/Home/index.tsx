import React, { useState, useEffect } from 'react';

import vegamsi64 from '../../assets/vegamsi64.jpg';
import { ProductList  } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';




export function Home () {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('/api/products')
    .then(response => response.json())
    .then(json => console.log(json));
  }, []);
 
  return (
    <ProductList>
    
        <li>
          <img/>
          <strong ></strong>
          <span></span>
          <button
         >
            <div>
             
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
    </ProductList>
  );
};