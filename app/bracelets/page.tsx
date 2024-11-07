import { Metadata } from "next";
import { categories } from "@/lib/categories";
import { CategoryHeader } from "@/components/category-header";
import { ProductGrid } from "@/components/product-grid";
import { createClient } from "@/utils/supabase/client";

export const metadata: Metadata = {
  title: "Браслеты | Attent",
  description: "Стильная коллекция браслетов",
};

export default async function BraceletsPage() {
  const supabase = createClient();

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("category", "bracelets")
    .order("created_at", { ascending: false });

  console.log("Products", products);

  return (
    <div>
      <CategoryHeader category={categories.bracelets} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <ProductGrid products={products || []} />
      </div>
    </div>
  );
}
