import Car from "@/components/Car";
import Faq from "@/components/Faq";
import First_sec from "@/components/First_sec";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";
import Navbar from "@/components/Navbar";
import Rent from "@/components/Rent";
import Slider from "@/components/Slider";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
  <>
    <Navbar/>
    <First_sec/>
    <Car/>
    <Slider/>
    <Subscribe/>
    <Rent/>
    <Locations/>
    <Faq/>
    <Footer/>
  </>
  );
}
