import React, { useEffect } from 'react';
import { X, Trash2, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQty,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
    showToast
  } = useCart();

  const { userAccount, openLoginModal } = useAuth();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty.');
      return;
    }

    if (!userAccount || !userAccount.address) {
      showToast('Please save your shipping address in Account before checkout.');
      closeCart();
      openLoginModal();
      return;
    }

    alert(`Order placed successfully for ${userAccount.address.name} via secure Razorpay checkout! Thank you for ordering from authentiQ.`);
    clearCart();
    closeCart();
    showToast('Order confirmed! Tracking details sent via email.');
  };

  return (
    <>
      <div className={`cart-drawer ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3 style={{ fontFamily: 'var(--font-heading)' }}>
            Your Cart (<span id="cartCount">{totalItems}</span>)
          </h3>
          <button className="cart-close" onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart-message">Your cart is empty</div>
          ) : (
            cart.map(({ product, quantity }) => {
              const itemTotal = product.price * quantity;
              return (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-img-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/mass_gainer.png';
                      }}
                    />
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-item-name" style={{ fontSize: '0.9rem' }}>
                      {product.name}
                    </div>
                    <div className="cart-item-price">
                      ₹{itemTotal.toLocaleString('en-IN')}
                    </div>
                    <div className="cart-item-qty">
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(product.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="qty-val">{quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQty(product.id, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(product.id)}
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Subtotal:</span>
            <span id="cartTotalAmt">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>

          <div className="payment-methods">
            <div className="payment-title">Checkout Options</div>
            <div className="payment-badges">
              <span className="pay-badge">
                <CreditCard size={14} /> Razorpay (Cards, UPI, NetBanking)
              </span>
              <span className="pay-badge">
                <Truck size={14} /> Cash on Delivery (COD)
              </span>
            </div>
          </div>

          <button
            className="btn-primary checkout-btn"
            onClick={handleCheckout}
            disabled={cart.length === 0}
            style={{ opacity: cart.length === 0 ? 0.6 : 1, cursor: cart.length === 0 ? 'not-allowed' : 'pointer' }}
          >
            Proceed to Secure Checkout
          </button>
        </div>
      </div>

      <div
        className={`cart-overlay ${isCartOpen ? 'active' : ''}`}
        onClick={closeCart}
      />
    </>
  );
};
