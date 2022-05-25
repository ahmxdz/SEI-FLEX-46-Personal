// When using JSX, React must be in scope
import React from 'react';

function OrderDetail(props) {
  return (
      <div className='OrderDetail'>
        <div className='OrderDetail-heading'>
          <span>ORDER #{props.generateOrderNumber()}</span>
          <span>{props.today}</span>
        </div>

        <div className='OrderDetail-container'>
          {props.welcomeText}
        </div>
      </div>
  );
}

export default OrderDetail;

