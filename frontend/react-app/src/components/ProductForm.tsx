import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../api/products";
import type { Product } from "../types/Product";
import "../styles/form.css";

interface Props {
  selected: Product | null;
  onSaved: () => void;
}

export default function ProductForm({ selected, onSaved }: Props) {
  const [form, setForm] = useState<Product>({
    name: "",
    price: 0,
    stock: 0
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "number" ? Number(value) : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (form.id) {
        await updateProduct(form.id, form);
      } else {
        await createProduct(form);
      }

      onSaved();
      setForm({ name: "", price: 0, stock: 0 });
    } catch (err: any) {
        const data = err.response?.data;

        const message =
            data?.errors?.map((e: any) => `${e.field}: ${e.message}`).join(", ") ||
            data?.message ||
            "Unknown validation error";

        setError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>{form.id ? "Edit Product" : "New Product"}</h2>

      {error && <div className="error-box">{error}</div>}

      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          required
        />
      </label>

      <label>
        Price (€)
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="0.00"
          required
        />
      </label>

      <label>
        Stock
        <input
          name="stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          placeholder="0"
          required
        />
      </label>

      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
