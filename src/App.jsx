import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SaasSections from "./components/SaasSection";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Formulario />
      <SaasSections />
      <Footer />
    </div>
  );
}

export default App;