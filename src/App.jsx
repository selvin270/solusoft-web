import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SAE from "./components/SAE";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Banner />
      <SAE />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;