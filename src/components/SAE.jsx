import React from "react";
import {
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
  Package,
  ShoppingCart,
  Users,
  Wallet,
  Tag,
  MessageCircle,
  Hammer,      // Para Carpintería
  Flame,       // Para Herrería
  Wrench,      // Para Ferretería
  Car          // Para Mecánica
} from "lucide-react";

const features = [
  {
    icon: <Package size={26} />,
    title: "Inventario",
    desc: "Lleva el control de tus productos en stock por cada sucursal."
  },
  {
    icon: <ShoppingCart size={26} />,
    title: "Ventas",
    desc: "Registra tus ventas de forma ordenada y enlazado a tus productos."
  },
  {
    icon: <Users size={26} />,
    title: "Usuarios y permisos",
    desc: "Define qué puede ver y hacer cada persona dentro del sistema."
  },
  {
    icon: <Wallet size={26} />,
    title: "Caja",
    desc: "Monitorea tu caja para llevar aperturas y cierres."
  }
];

const businesses = [
  {
    icon: <Hammer size={26} />,
    title: "Carpintería",
    desc: "Controla el inventario de maderas, insumos y la cotización de proyectos a medida."
  },
  {
    icon: <Flame size={26} />,
    title: "Herrería",
    desc: "Gestiona materiales como perfiles y tubos, registrando costos de fabricación y mano de obra."
  },
  {
    icon: <Wrench size={26} />,
    title: "Ferretería",
    desc: "Administra miles de productos, precios por volumen y venta rápida en mostrador."
  },
  {
    icon: <Car size={26} />,
    title: "Mecánica",
    desc: "Lleva el historial de servicios, repuestos utilizados y órdenes de trabajo por vehículo."
  }
];

const SAE = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="sae" className="bg-white text-black">
      {/* =========================
          SOLUCIÓN
      ========================== */}
      <div className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* ENCABEZADO */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-gray-950">
              Todo el control de tu negocio
              <br className="hidden md:block" />
              <span className="text-blue-600">
                {" "}en una sola plataforma.
              </span>
            </h2>
          </div>

          {/* FEATURES PRINCIPALES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-7 rounded-xl bg-white border border-gray-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* ICONO */}
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mt-6">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* SECCIÓN TIPOS DE NEGOCIO */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Diseñado para adaptarse a tu sector
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Optimiza la gestión diaria según la especialidad de tu comercio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {businesses.map((item, index) => (
                <div
                  key={index}
                  className="group text-center p-7 rounded-xl bg-white border border-gray-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  {/* ICONO */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-6">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRECIO Y CTA */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-8 py-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                {/* PRECIO */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Tag size={28} />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-blue-600">
                        Q250
                      </span>
                      <span className="font-bold text-gray-900">
                        al mes
                      </span>
                    </div>
                  </div>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-gray-500 text-center lg:text-left max-w-xs">
                  Ideal para ferreterías, farmacias, mecánicas, abarroterías, carpinterías, herrerías, etc.
                </p>

                {/* BOTÓN */}
                <a
                  href="https://demo.solusoftgt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 !text-white px-7 py-4 rounded-xl font-semibold transition flex items-center gap-2 shadow-lg shadow-blue-500/20 whitespace-nowrap"
                >
                  Prueba una Demostración
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SAE;