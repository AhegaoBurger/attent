"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProductForm } from "@/components/products/product-form";
import { Product } from "@/lib/admin/types";

interface AddProductDialogProps {
  onAddProduct: (
    product: Omit<Product, "id">,
  ) => Promise<{ data: any; error: any }>;
}

export function AddProductDialog({ onAddProduct }: AddProductDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <ProductForm
          onSuccess={() => setOpen(false)}
          onAddProduct={onAddProduct}
        />
      </DialogContent>
    </Dialog>
  );
}
