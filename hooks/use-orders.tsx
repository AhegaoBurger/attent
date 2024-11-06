"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Order } from "@/lib/admin/types";

export function useOrders() {
  const supabase = createClient();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  async function fetchOrders() {
    try {
      let query = supabase
        .from("orders")
        .select(
          `
          *,
          items:order_items (
            *,
            product:products (*)
          )
        `,
        )
        .order("created_at", { ascending: false });

      if (searchQuery) {
        query = query.ilike("customer_name", `%${searchQuery}%`);
      }

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [searchQuery, statusFilter]);

  return {
    orders,
    loading,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
  };
}
