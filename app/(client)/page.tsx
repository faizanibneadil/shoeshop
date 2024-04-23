import { Suspense } from "react";
import MainSlider from "./_components/main-slider";
import Products from "./_components/products";

const Page: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-20%)] w-full flex-col space-y-2">
      <Suspense fallback={<div>Loading ...</div>}>
        <MainSlider />
      </Suspense>
      <Suspense fallback={<div>Loading Products ...</div>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default Page;
