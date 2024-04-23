import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { memo } from "react";

interface Props {
  product: {
    id: string;
    name: string;
    slug: string;
    salePrice: number;
    reducedPrice: number;
    images: {
      imageUrl: string | null;
    }[];
    categories: {
      id: string;
      name: string;
    }[];
  };
}

const Product: React.FC<Props> = memo(({ product }) => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="relative w-full h-40 rounded-lg">
        <Image
          fill={true}
          src={product.images[0]?.imageUrl as string}
          alt={product.name}
        />
      </CardContent>
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>Description</CardDescription>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
});
Product.displayName = "Product";
export default Product;
