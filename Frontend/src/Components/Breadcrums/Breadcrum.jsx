import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="arrow_down" />
        Shop <img src={arrow_icon} alt="arrow_down" />
        {product.category} <img src={arrow_icon} alt="arrow_down" />{product.name}
    </div>
  );
}

export default Breadcrum;



