import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-[600px] bg-pink-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative flex h-full items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Изысканные украшения для особых моментов
          </h1>
          <p className="mb-8 text-lg text-white/90">
            Откройте для себя коллекцию уникальных ювелирных изделий, созданных
            с любовью к деталям
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Смотреть коллекцию
          </Button>
        </div>
      </div>
    </div>
  );
}
