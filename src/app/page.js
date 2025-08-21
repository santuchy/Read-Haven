import Image from "next/image";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
      <Footer></Footer>
    </div>
    
    
  );
}
