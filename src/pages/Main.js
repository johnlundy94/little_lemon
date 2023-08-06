import "../styles/Main.css";
import Header from "../components/Header";
import About from "../components/About";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
};

export default Main;
