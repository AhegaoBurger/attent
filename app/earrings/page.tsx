import { Metadata } from "next";
import { categories } from "@/lib/categories";
import { CategoryHeader } from "@/components/category-header";
import { ProductGrid } from "@/components/product-grid";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Серьги | Attent",
  description: "Изысканная коллекция серёг",
};

export default async function EarringsPage() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("category", "earrings")
    .order("created_at", { ascending: false });

  return (
    <div>
      <CategoryHeader category={categories.earrings} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <ProductGrid products={products || []} />
      </div>
    </div>
  );
}
