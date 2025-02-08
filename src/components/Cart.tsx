import { useState } from 'react';
import data from '../data.json';
import '../styles/cart.css';

const Cart = () => {
  const [items, setItems] = useState(data);

  const updateQuantity = (index, delta) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, count: Math.max(1, item.count + delta) } : item
      )
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cart-header">🛒 장바구니</h2>
        <hr className="my-2" />
        <ul>
          {items.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item">
                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image-img"
                  />
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">
                    {item.price.toLocaleString()} 원
                  </p>
                </div>
              </div>
              <div className="cart-item-controls">
                <button
                  className="cart-item-button"
                  onClick={() => updateQuantity(index, -1)}
                >
                  <span className="cart-item-button-minus">-</span>
                  <span className="cart-item-quantity">{item.count}</span>
                  <span
                    className="cart-item-button-plus"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateQuantity(index, 1);
                    }}
                  >
                    +
                  </span>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <hr className="my-2" />
        <p className="cart-total">구매 총액 : {total.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default Cart;
