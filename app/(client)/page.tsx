import { auth } from "@/auth";
import MainSlider from "./_components/main-slider";

const Page: React.FC = async () => {
  const session = await auth();
  return (
    <div className="flex min-h-[calc(100vh-20%)] w-full flex-col">
      <MainSlider />
      <br />
      {JSON.stringify(session)}
    </div>
  );
};

export default Page;
