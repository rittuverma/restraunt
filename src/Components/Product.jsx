import React from 'react';
import ProductBox from './ProductBox';
import pimage1 from '../s1.png';
import pimage2 from '../s2.png';

function Product() {
  return (
    <div id='products'>
    <h1>CHOOSE & ENJOY</h1>
    <p>A restaurant is a business that prepares and serves food and drinks to customers</p>
    <div className='a-container'>
    <ProductBox image={pimage1} title="Luger Burger"/>
    <ProductBox image={pimage2} title="Le Pigeon Burger"/>
    <ProductBox image={pimage1} title="Luger Burger"/>

    </div>
      
    </div>
  )
}

export default Product;
