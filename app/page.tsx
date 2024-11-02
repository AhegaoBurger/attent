import { CategoryGrid } from "@/components/category-grid";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryGrid />
    </div>
  );
}
