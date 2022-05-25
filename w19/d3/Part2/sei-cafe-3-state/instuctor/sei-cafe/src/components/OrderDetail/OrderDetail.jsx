// When using JSX, React must be in scope
import React from 'react';
import LineItem from '../LineItem/LineItem';

function OrderDetail(props) {
  // this is a normal javascript comment intended to inform you that
  // you can do calculations and declare variables above the return statement!
  let todaysDate = (new Date()).toLocaleDateString()
  const lineItems = props.lineItems.map(
    (lineItem, idx) => <LineItem
      key={idx}
      name={lineItem.item.name}
      qty={lineItem.qty}
      price={lineItem.item.price}
      emoji={lineItem.item.emoji}
    />
  )

  return (
      <div className='OrderDetail'>
        <div className='OrderDetail-heading'>
          <span>ORDER #{props.currentOrderId}</span>
          {/** This is a JSX comment! */}
          <span>{todaysDate}</span>
        </div>
	      <div className='OrderDetail-container'>
          <br /><br />

        {/* {props.lineItems.map((lineItem, idx) => <LineItem key={idx} lineItem={lineItem} /> )} */}
        {lineItems}

          <section className="total">
            <button className="btn-sm">CHECKOUT</button>
          <span>{`$${props.orderTotal}`}</span>
          </section>
        </div>
      </div>
  );
}

export default OrderDetail;