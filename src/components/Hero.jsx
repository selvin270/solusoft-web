import React from "react";
import { motion } from "framer-motion";
import demo from '../assets/demo.mp4';

const Hero = () => {
    // Función reutilizable para hacer scroll suave hacia las secciones
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="home" className="min-h-screen bg-[#050816] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 pt-36 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                            SOFTWARE A MEDIDA Y SAAS
                        </div> */}

                        <h1 className="mt-8 font-black leading-tight text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                            Transformamos ideas en <span className="text-blue-500">soluciones digitales</span> 
                        </h1>

                        <p className="mt-8 text-gray-400 leading-relaxed text-lg md:text-xl max-w-2xl">
                            Creamos sistemas a la medida y también te ofrecemos nuestro poderoso SAE Sistema Administrativo Empresarial por suscripción mensual.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10">
                            {/* Este botón baja al formulario de diagnóstico / cotización */}
                            <button
                                onClick={() => scrollToSection("reservar-cita")}
                                className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-semibold text-white shadow-lg shadow-blue-500/20"
                            >
                                Cotizar software personalizado
                            </button>

                            {/* Este botón baja directamente a la presentación de la plataforma SaaS */}
                            <button
                                onClick={() => scrollToSection("services-saas")}
                                className="border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 transition px-8 py-4 rounded-2xl font-semibold text-white"
                            >
                                Conoce nuestro SAE
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', borderRadius: '12px' }}
                    >
                        <source src={demo} type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                    </video>

                </div>
            </div>
        </section>
    );
};

export default Hero;