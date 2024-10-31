"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary">Jewelry Admin</h1>
        </div>
        <nav className="mt-4">
          <Button
            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </Button>
          <Button
            variant={activeTab === "products" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("products")}
          >
            Products
          </Button>
          <Button
            variant={activeTab === "orders" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-2">
            <h2 className="text-xl font-semibold">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Admin User
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        admin@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="dashboard">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      New Customers
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Orders
                    </CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Products in Stock
                    </CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last week
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Product Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center justify-between">
                    <Input
                      className="max-w-sm"
                      placeholder="Search products..."
                    />
                    <Button>Add New Product</Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Diamond Necklace</TableCell>
                        <TableCell>Necklaces</TableCell>
                        <TableCell>$1,999.99</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell>
                          <Button variant="ghost">Edit</Button>
                          <Button variant="ghost" className="text-red-500">
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Gold Bracelet</TableCell>
                        <TableCell>Bracelets</TableCell>
                        <TableCell>$799.99</TableCell>
                        <TableCell>28</TableCell>
                        <TableCell>
                          <Button variant="ghost">Edit</Button>
                          <Button variant="ghost" className="text-red-500">
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pearl Earrings</TableCell>
                        <TableCell>Earrings</TableCell>
                        <TableCell>$249.99</TableCell>
                        <TableCell>42</TableCell>
                        <TableCell>
                          <Button variant="ghost">Edit</Button>
                          <Button variant="ghost" className="text-red-500">
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center justify-between">
                    <Input
                      className="max-w-sm"
                      placeholder="Search orders..."
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Filter by Status{" "}
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>All Orders</DropdownMenuItem>
                        <DropdownMenuItem>Pending</DropdownMenuItem>
                        <DropdownMenuItem>Processing</DropdownMenuItem>
                        <DropdownMenuItem>Shipped</DropdownMenuItem>
                        <DropdownMenuItem>Delivered</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>#1234</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>2023-05-15</TableCell>
                        <TableCell>$2,499.99</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Delivered
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost">View</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#1235</TableCell>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>2023-05-16</TableCell>
                        <TableCell>$899.99</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                            Processing
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost">View</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#1236</TableCell>
                        <TableCell>Robert Johnson</TableCell>
                        <TableCell>2023-05-17</TableCell>
                        <TableCell>$1,299.99</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            Shipped
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost">View</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
