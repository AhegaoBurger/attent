"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group relative">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 bg-white/80 hover:bg-white/90"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{product.price} руб</p>
            </div>
          </CardContent>
          <Link href={`/products/${product.id}`} className="absolute inset-0">
            <span className="sr-only">View details for {product.name}</span>
          </Link>
        </Card>
      ))}
    </div>
  );
}
