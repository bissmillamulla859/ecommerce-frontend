import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#2563eb,#1e3a8a)",
        color: "white",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>
        Welcome to Mega Mart
      </h1>

      <p
        style={{
          fontSize: "20px",
          margin: "20px 0",
        }}
      >
        Discover Amazing Products at Great Prices
      </p>

      <Link to="/products">
        <button
          style={{
            background: "white",
            color: "#2563eb",
            padding: "15px 25px",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default Hero;