import { Category, Product, products } from "@/lib/products";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProductCard } from "./product-card";
import { ProductSkeleton } from "./product-skeleton";

type ProductCatalogProps = {
  activeCategory: Category;
  isLoading: boolean;
  onCategoryChange: (category: Category) => void;
  onBuy: (productName: string) => void;
};

const categories: Category[] = ["Todos", "Pijamas", "Accesorios", "Regalos"];

export function ProductCatalog({
  activeCategory,
  isLoading,
  onCategoryChange,
  onBuy,
}: ProductCatalogProps) {
  const visibleProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="catalog-section section-shell" id="catalogo" aria-labelledby="catalog-title">
      <div className="catalog-top">
        <div>
          <Eyebrow>explora dreamy</Eyebrow>
          <h2 id="catalog-title">Hecho para tus<br /><i>momentos suaves</i></h2>
        </div>
        <p className="catalog-intro">Elige una textura, un color o simplemente<br />lo que te haga sonreír.</p>
      </div>
      <div className="category-tabs" role="tablist" aria-label="Categorías de productos">
        {categories.map((category) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={activeCategory === category ? "active" : ""}
            key={category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div className="product-grid">
          {Array.from({ length: 6 }).map((_, index) => <ProductSkeleton key={index} />)}
        </div>
      ) : (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.name} product={product} onBuy={onBuy} />
          ))}
        </div>
      )}
    </section>
  );
}
