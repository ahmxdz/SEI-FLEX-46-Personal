export default function LineItem(props) {
  const total = props.price * props.qty

  return (
    <div className="LineItem">
      <div>{props.emoji}</div>
      <div className="nameprice">
        <span>{props.name}</span>
        <span>{`$${props.price}`}</span>
      </div>
      <div className="qty">
        <button>−</button>
        <span>{props.qty}</span>
        <button>+</button>
      </div>
      {/* Total of the qty X price of the item */}
      <div className="itemprice">{`$${total.toFixed(2)}`}</div>
    </div>
  );
}