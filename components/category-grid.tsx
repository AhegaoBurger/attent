import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Кольца",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    href: "/rings",
  },
  {
    name: "Колье",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    href: "/necklaces",
  },
  {
    name: "Браслеты",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
    href: "/bracelets",
  },
  {
    name: "Серьги",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
    href: "/earrings",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Наши категории</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="overflow-hidden transition-transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
