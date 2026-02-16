import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/products";
import type { Product } from "../types/Product";
import "../styles/productlist.css";

interface Props {
  onEdit: (product: Product) => void;
  refresh: boolean;
}

export default function ProductList({ onEdit, refresh }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  const load = () => {
    getProducts().then(res => setProducts(res.data));
  };

  useEffect(() => {
    load();
  }, [refresh]);

  return (
    <div className="list-container">
      <h2>Products</h2>

      {products.length === 0 && (
        <p className="empty">No products available</p>
      )}

      <ul className="product-list">
        {products.map(p => (
          <li key={p.id} className="product-card">
            <div className="product-info">
              <span className="product-name">{p.name}</span>
              <span className="product-price">€{p.price}</span>
              <span className="product-stock">Stock: {p.stock}</span>
            </div>

            <div className="actions">
              <button className="btn-edit" onClick={() => onEdit(p)}>
                Edit
              </button>
              <button
                className="btn-delete"
                onClick={() => p.id && deleteProduct(p.id).then(load)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}