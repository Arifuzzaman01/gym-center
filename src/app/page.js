import Image from "next/image";
import GymBanner from "./Components/GymBanner";
import ProductSection from "./Components/ProductSection";
import Champion from "./Components/Champion";
import ClientFeedback from "./Components/ClientFeedback";

export default function Home() {
  return (
    <div>
      
      <ProductSection />
      <Champion />
      <ClientFeedback />
    </div>
  );
}
