import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import NavigateButton from "../NavigateButton/NavigateButton";
import ProductSection from "../ProductSection/ProductSection";
import Slider from "../Slider/Slider";
import "../../App.css";

function Main() {
  return (
    <div>
      <NavBar />
      <Slider />
      <NavigateButton />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default Main;
