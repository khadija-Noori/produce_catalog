import { Link } from "react-router-dom";
import { Products } from "../data/Products";

function ProductList() {
  return (
    <div className="product-grid">
      {Products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;