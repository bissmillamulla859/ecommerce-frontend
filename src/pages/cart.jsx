import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { cartItems, totalPrice } = useSelector(
    (state) => state.cart
  );

  if (cartItems.length === 0) {
    return <h2>Your Cart is Empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #ddd",
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
        >
          <img
            src={item.image}
            width="80"
            alt={item.title}
          />

          <h3>{item.title}</h3>

          <p>₹ {item.price}</p>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <span style={{ margin: "0 10px" }}>
            {item.quantity}
          </span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <br />
          <br />

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total Price: ₹ {totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;