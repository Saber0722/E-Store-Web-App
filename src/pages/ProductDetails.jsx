import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const addToCartAlert = () => {
    addToCart(product);
    alert(`${product.title} has been added to your cart!`);
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={product.image} alt={product.title} className="h-64 w-full md:w-1/2 object-contain hover:scale-105 transition-transform duration-200" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button
            onClick={addToCartAlert}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:from-blue-500 hover:to-purple-800 hover:scale-105 transition-transform duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;