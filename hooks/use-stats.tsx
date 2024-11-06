"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { DashboardStats } from "@/lib/admin/types";

export function useStats() {
  const supabase = createClient();

  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const { data: products } = await supabase
          .from("products")
          .select("stock, price");

        const { data: orders } = await supabase
          .from("orders")
          .select("total, created_at")
          .gte(
            "created_at",
            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
          );

        const { data: lastMonthOrders } = await supabase
          .from("orders")
          .select("total")
          .lt(
            "created_at",
            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
          )
          .gte(
            "created_at",
            new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
          );

        const totalRevenue =
          orders?.reduce((sum, order) => sum + order.total, 0) || 0;
        const lastMonthRevenue =
          lastMonthOrders?.reduce((sum, order) => sum + order.total, 0) || 0;
        const revenueChange = lastMonthRevenue
          ? ((totalRevenue - lastMonthRevenue) / lastMonthRevenue) * 100
          : 0;

        const productsInStock =
          products?.reduce((sum, product) => sum + (product.stock || 0), 0) ||
          0;

        setStats({
          total_revenue: totalRevenue,
          new_customers: orders?.length || 0,
          total_orders: orders?.length || 0,
          products_in_stock: productsInStock,
          revenue_change: revenueChange,
          customers_change: 20.1, // Mock data for demo
          orders_change: 19,
          stock_change: 15.2,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading };
}
