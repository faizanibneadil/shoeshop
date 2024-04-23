import { prisma } from "@/config/db";
import Product from "./product";
import { cache } from "react";

const _GET_PRODUCTS = cache(async () => {
  return await prisma.product.findMany({
    where: { status: { equals: "PUBLISHED" } },
    select: {
      id: true,
      name: true,
      slug: true,
      salePrice: true,
      reducedPrice: true,
      categories: { select: { id: true, name: true } },
      images: { select: { imageUrl: true }, take: 1 },
    },
  });
});

const Products: React.FC = async () => {
  const products = await _GET_PRODUCTS();
  return products.length ? (
    <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-2">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div>No Products</div>
  );
};

export default Products;
