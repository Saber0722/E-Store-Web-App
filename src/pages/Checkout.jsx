import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

function Checkout() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Stripe checkout would be initiated here. Total: $' + total.toFixed(2));
    // Placeholder for Stripe integration
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p>Total: ${total.toFixed(2)}</p>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Pay with Stripe
      </button>
    </div>
  );
}

export default Checkout;