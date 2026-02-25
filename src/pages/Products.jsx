import { Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <p>Check out our collection below:</p>
      <Outlet />
    </div>
  );
}

export default Products;