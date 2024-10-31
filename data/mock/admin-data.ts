export const mockAdminData = {
  user: {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/placeholder-avatar.jpg",
    role: "admin",
  },
  stats: {
    revenue: {
      total: 45231.89,
      change: 20.1,
    },
    customers: {
      total: 2350,
      change: 180.1,
    },
    orders: {
      total: 12234,
      change: 19,
    },
    products: {
      total: 573,
      change: 201,
    },
  },
  // Add commented Supabase type definitions
  /*
  interface AdminUser {
    id: string;
    email: string;
    role: string;
    created_at: string;
  }

  // Supabase query example:
  const { data: userData } = await supabase
    .from('users')
    .select('*')
    .eq('role', 'admin')
    .single()
  */
};
