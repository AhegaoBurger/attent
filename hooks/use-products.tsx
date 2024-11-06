"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Product } from "@/lib/admin/types";

export function useProducts() {
  const supabase = createClient();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchProducts() {
    try {
      let query = supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (searchQuery) {
        query = query.ilike("name", `%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  async function addProduct(product: Omit<Product, "id">) {
    // Add optimistically to the UI
    const optimisticProduct = {
      ...product,
      id: crypto.randomUUID(), // Temporary ID
    };

    setProducts((prev) => [optimisticProduct, ...prev]);

    try {
      const { data, error } = await supabase
        .from("products")
        .insert([product])
        .select()
        .single();

      if (error) throw error;

      // Update with the real product from the database
      setProducts((prev) =>
        prev.map((p) => (p.id === optimisticProduct.id ? data : p)),
      );

      return { data, error: null };
    } catch (error) {
      // Revert optimistic update on error
      setProducts((prev) => prev.filter((p) => p.id !== optimisticProduct.id));
      console.error("Error adding product:", error);
      return { data: null, error };
    }
  }

  async function deleteProduct(id: string) {
    // Optimistically remove from UI
    setProducts((prev) => prev.filter((p) => p.id !== id));

    try {
      const { error } = await supabase.from("products").delete().eq("id", id);

      if (error) throw error;
    } catch (error) {
      // Revert on error
      console.error("Error deleting product:", error);
      await fetchProducts();
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  return {
    products,
    loading,
    searchQuery,
    setSearchQuery,
    deleteProduct,
    addProduct,
    refetch: fetchProducts,
  };
}
