import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const { name, quantity } = cartItem;
    return (
        <div>
            <h2>{name}</h2>
            <span>Quantity: {quantity}</span>
        </div>
    )
}





export default CartItem;