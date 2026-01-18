import { Hero } from "./component/home/hero"
import { CategorySection } from "./component/home/category";
import { ProductSection } from "./component/home/product";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ]);

  return (
    <div>
      <Hero />
      <CategorySection categories={categories} />
      <ProductSection products={products} />
    </div>
  );
}
