import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Category } from "@/types";

interface CategoryHeaderProps {
  category: Category;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="border-b bg-white sticky top-0 z-10">
      <div className="flex items-center px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center text-sm hover:text-pink-600 transition mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Назад
        </Link>
        <h1 className="text-2xl font-semibold">{category.title}</h1>
      </div>
    </div>
  );
}
