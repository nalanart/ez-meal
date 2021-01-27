import './CheckoutItem.css'
const axios = require('axios')

export default function CheckoutItem({ item, removeFromCart }) {
  return (
    <div className="CheckoutItem row">
      <img className="CheckoutItem__image col-3" src={item.imgSrc} alt={item.name} />
      <h5 className="CheckoutItem__name col-4">{item.name.toUpperCase()}</h5>
      <select className="CheckoutItem__qty form-select col-1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <h5 className="CheckoutItem__price col-2">${item.price}</h5>
      <p className="col">X <u onClick={() => removeFromCart(item._id)}>DELETE</u></p>
    </div>
  )
}