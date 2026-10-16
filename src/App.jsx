import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SAE from "./components/SAE";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Planes from "./components/Planes";

function App() {
  const [mensajePrellenado, setMensajePrellenado] = useState("");

  const handleSelectPlan = (nombrePlan) => {
    // Asigna el texto con el plan elegido
    setMensajePrellenado(`Deseo información del plan ${nombrePlan}`);

    // Hace el desplazamiento suave hacia el formulario
    const element = document.getElementById("formulario");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Banner />
      <SAE />
      <Planes onSelectPlan={handleSelectPlan} />
      <Formulario mensajeInicial={mensajePrellenado} />
      <Footer />
    </div>
  );
}

export default App;