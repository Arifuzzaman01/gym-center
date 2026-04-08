import Champion from "@/Components/Champion";
import ClientFeedback from "@/Components/ClientFeedback";
import Footer from "@/Components/Footer";
import GymBanner from "@/Components/GymBanner";
import ProductSection from "@/Components/ProductSection";
import Subscribe from "@/Components/Subscribe";
import Image from "next/image";


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
