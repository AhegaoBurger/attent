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

export default function AdminDashboard() {
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                Filter by Status <ChevronDown className="ml-2 h-4 w-4" />
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
  </div>;
}
