import { useParams, useNavigate } from "react-router-dom";
import { Products } from "../data/Products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = Products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
      <button onClick={() => navigate(-1)}>Back to Products</button>
    </div>
  );
}

export default ProductDetails;