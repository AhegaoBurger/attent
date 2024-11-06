export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "rings" | "necklaces" | "bracelets" | "earrings";
  description?: string;
  stock: number;
  created_at: string;
}

export interface Order {
  id: string;
  customer_name: string;
  email: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  created_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface DashboardStats {
  total_revenue: number;
  new_customers: number;
  total_orders: number;
  products_in_stock: number;
  revenue_change: number;
  customers_change: number;
  orders_change: number;
  stock_change: number;
}
