import './CheckoutItem.css'

export default function CheckoutItem({ item }) {
  return (
    <div className="CheckoutItem row">
      <div className="CheckoutItem__item col-3">
        <img className="CheckoutItem__image" src={item.imgSrc} alt={item.name} />
        <h5 className="CheckoutItem__name">{item.name.toUpperCase()}</h5>
      </div>
      <h5 className="CheckoutItem_price col-3">{item.price}</h5>
      <h5 className="CheckoutItem_quantity col-3">1</h5>
      <h5 className="CheckoutItem_subtotal col-3">{item.price * 1}</h5>
    </div>
  )
}