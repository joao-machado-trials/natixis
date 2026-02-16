import api from "./client";
import type { Product } from "../types/Product";

export const getProducts = () => api.get<Product[]>("/products");
export const getProduct = (id: number) => api.get<Product>(`/products/${id}`);
export const createProduct = (data: Product) => api.post<Product>("/products", data);
export const updateProduct = (id: number, data: Product) => api.put<Product>(`/products/${id}`, data);
export const deleteProduct = (id: number) => api.delete(`/products/${id}`);
