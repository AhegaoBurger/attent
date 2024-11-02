import { Metadata } from "next";
import { categories } from "@/lib/categories";
import { CategoryHeader } from "@/components/category-header";
import { ProductGrid } from "@/components/product-grid";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Кольца | Attent",
  description: "Изысканная коллекция колец",
};

export default async function RingsPage() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("category", "rings")
    .order("created_at", { ascending: false });

  return (
    <div>
      <CategoryHeader category={categories.rings} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <ProductGrid products={products || []} />
      </div>
    </div>
  );
}
