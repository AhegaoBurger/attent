import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Кольца",
    image: "/ring.jpeg",
    href: "/rings",
  },
  {
    name: "Колье",
    image: "/necklaces.jpeg",
    href: "/necklaces",
  },
  {
    name: "Браслеты",
    image: "/bracelets.jpeg",
    href: "/bracelets",
  },
  {
    name: "Серьги",
    image: "/earrings.jpeg",
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
