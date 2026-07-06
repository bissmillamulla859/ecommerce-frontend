import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find(
      (item) => item.id === Number(id)
    )
  );

  if (!product) return <h2>Product not found</h2>;

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "30px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "300px",
          objectFit: "contain",
        }}
      />

      <div>
        <h2>{product.title}</h2>

        <h3>₹ {product.price}</h3>

        <p>{product.description}</p>

        <p>
          <b>Category:</b> {product.category}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;