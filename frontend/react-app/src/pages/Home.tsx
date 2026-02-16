import { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import type { Product } from "../types/Product";

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <ProductForm
        selected={selected}
        onSaved={() => {
          setSelected(null);
          setRefresh(!refresh);
        }}
      />

      <ProductList
        onEdit={(product) => setSelected(product)}
        refresh={refresh}
      />
    </div>
  );
}
