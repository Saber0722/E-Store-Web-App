import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const itemLinkFromCart = (item) => {
    return `/product/${item.id}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <Link to={itemLinkFromCart(item)} className="text-blue-500 hover:underline">
                  <img src={item.image} alt={item.title} className="h-32 w-32 object-contain mt-2" />
                </Link>
                <h2 className="text-lg">{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className={`w-16 p-1 border rounded ${localStorage.getItem('theme') === 'dark' ? 'dark:bg-gray-800 dark:text-gray-200' : 'light:bg-white light:text-gray-800'}`}
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <p className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</p>
          <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;