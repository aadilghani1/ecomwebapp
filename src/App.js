import Advertisement from "./components/Advertisement";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FooterHero from "./components/FooterHero";
import HeroSection from "./components/HeroSection";
import Images from "./components/Images";
import Header from "./components/Header";
import HeaderMain from "./components/HeaderMain";
import HeaderBanner from "./components/HeaderBanner";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <HeaderBanner />
      <HeaderMain />
      <Header />
      <HeroSection />
      <Features />
      <Products />
      <Images />
      <Advertisement />
      <FooterHero />
      <Footer />
    </div>
  );
};

export default App;
