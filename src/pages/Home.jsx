import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />

      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h2>Why Choose Us?</h2>

        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h3>🚚 Fast Delivery</h3>
            <p>Quick delivery across India.</p>
          </div>

          <div>
            <h3>💳 Secure Payment</h3>
            <p>100% Safe Transactions.</p>
          </div>

          <div>
            <h3>⭐ Premium Quality</h3>
            <p>Top-rated products.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;