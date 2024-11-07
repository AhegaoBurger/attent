"use client";

import { useState } from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import { Header } from "@/components/admin/Header";
// import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const mockUser = {
  name: "Admin User",
  email: "admin@example.com",
  avatar: "/placeholder-avatar.jpg",
};

export function AdminContent() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <SidebarInset>
      <Header user={mockUser} />
      <main className="flex-1 overflow-y-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="dashboard">
            {/* <DashboardContent /> */}
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Reuse existing product table structure */}
                <div className="mb-4 flex items-center justify-between">
                  <Input
                    className="max-w-sm"
                    placeholder="Search products..."
                  />
                  <Button>Add New Product</Button>
                </div>
                <Table>
                  {/* Table content from v0 */}
                  {/* ... */}
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
                  <Input className="max-w-sm" placeholder="Search orders..." />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Filter by Status
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
                  {/* Table content from v0 */}
                  {/* ... */}
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </SidebarInset>
  );
}
