import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Cart = () => {
  // Dummy cart items for now
  const cartItems = [
    {
      id: 1,
      name: "Eggplant Baked with Cheese",
      size: "Small",
      addon: "Soft Drinks (+$30)",
      price: 120,
      quantity: 2,
      image: "/images/eggplant.jpg",
    },
    {
      id: 2,
      name: "Roasted Steak with Garnish",
      size: "Small",
      addon: "Soft Drinks (+$30)",
      price: 120,
      quantity: 2,
      image: "/images/steak.jpg",
    },
  ];

  return (
    <Layouts>
        <section className="section kf-started-inner">
  <div
    className="kf-parallax-bg js-parallax"
    style={{ backgroundImage: "url(images/your_cart_bg_image.jpg)" }}
  />
  <div className="container">
    <h1
      className="kf-h-title text-anim-1 scroll-animate"
      data-splitting="chars"
      data-animate="active"
    >
      Your Cart
    </h1>
  </div>
</section>

      <section className="section kf-cart-page">
        <div className="container">
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Food Image</th>
                <th>Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </td>
                  <td>
                    <strong>{item.name}</strong>
                    <div className="cart-item-details">
                      Size: {item.size}<br />
                      Addon: {item.addon}
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="quantity-controls">
                      <button className="quantity-btn">-</button>
                      <span>{item.quantity}</span>
                      <button className="quantity-btn">+</button>
                    </div>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button className="view-btn">
                      <i className="fas fa-eye"></i> View
                    </button>
                    <button className="delete-btn">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="checkout-wrapper">
            <Link href="/checkout" className="kf-btn dark-btn">
              Process to Checkout →
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cart-table {
          width: 100%;
          border-collapse: collapse;
        }
        .cart-table th,
        .cart-table td {
          padding: 1rem;
          border-bottom: 1px solid #ddd;
          text-align: left;
          vertical-align: middle;
        }
        .cart-item-image {
          width: 100px;
          height: auto;
          border-radius: 8px;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
        }
        .quantity-btn {
          background: #758d52;
          color: #fff;
          border: none;
          padding: 5px 10px;
          margin: 0 5px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .quantity-btn:hover {
          background: #5f7742;
        }
        .view-btn,
        .delete-btn {
          background: #758d52;
          color: #fff;
          border: none;
          padding: 6px 12px;
          margin-right: 5px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .view-btn:hover,
        .delete-btn:hover {
          background: #5f7742;
        }
        .checkout-wrapper {
          margin-top: 2rem;
          text-align: right;
        }
          
        .kf-cart-page {
  color: #556b2f; /* dark moss green */
}

.kf-cart-page strong {
  color: #556b2f;
}

.kf-cart-page th {
  color: #556b2f;
}

.kf-cart-page td {
  color: #556b2f;
}
          
      `}</style>
    </Layouts>
  );
};

export default Cart;
