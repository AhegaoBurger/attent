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
        <CardTitle>Product Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <Input className="max-w-sm" placeholder="Search products..." />
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
  </div>;
}
