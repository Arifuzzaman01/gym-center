import Image from "next/image";
import GymBanner from "./Components/GymBanner";
import ProductSection from "./Components/ProductSection";
import Champion from "./Components/Champion";
import ClientFeedback from "./Components/ClientFeedback";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <GymBanner />
      <ProductSection />
      <Champion />
      <ClientFeedback />
      <Subscribe />
      <Footer />
    </div>
  );
}
