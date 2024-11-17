"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";
import { createClient } from "@/utils/supabase/client";

interface ProductCardImageProps {
  path: string;
  alt: string;
}

// Separate component for handling image loading
const ProductCardImage = ({ path, alt }: ProductCardImageProps) => {
  const supabase = createClient();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const downloadImage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("products")
          .download(path);

        if (error) throw error;
        if (!mounted) return;

        const url = URL.createObjectURL(data);
        setImageUrl(url);
      } catch (error) {
        console.error("Error downloading image:", error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    downloadImage();

    return () => {
      mounted = false;
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [path, supabase]);

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
        <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
        <span className="text-sm text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      fill
      className="object-cover transition-transform group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    />
  );
};

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
              <ProductCardImage path={product.image} alt={product.name} />
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
