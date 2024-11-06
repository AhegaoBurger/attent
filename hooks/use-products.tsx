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

  async function deleteProduct(id: string) {
    try {
      const { error } = await supabase.from("products").delete().eq("id", id);

      if (error) throw error;
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
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
    refetch: fetchProducts,
  };
}
