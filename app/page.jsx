import CustomOrder from "@/components/customOrder";
import Hero from "@/components/hero";
import MyServices from "@/components/myServices";
import SingleServices from "@/components/singleServices";

export default function Home() {
  return (
    <div className="container my-10 flex-col space-y-20 ">
      <Hero />
      <MyServices />
      <SingleServices/>
      <CustomOrder/>
    </div>
  );
}
