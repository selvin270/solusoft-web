import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ShieldCheck,
    Cloud,
    Clock3,
    Headset
} from "lucide-react";
import demo from "../assets/demo.mp4";
// import laptop from '../assets/laptop.png';

const Banner = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <section
            id="banner"
            className="min-h-screen bg-[#050816] text-white overflow-hidden relative"
        >

            {/* DECORACIÓN DE FONDO */}
            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />

                <div className="absolute left-0 bottom-0 w-full h-40 bg-gradient-to-t from-blue-500/5 to-transparent" />

            </div>

            <div className="relative max-w-[1400px] mx-auto px-6 pt-32 lg:pt-36 pb-16">

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* TITLE */}
                        <h1 className="mt-7 font-black leading-[1.05] text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl">

                            Dejá de usar Excel o libretas y mejor usa

                            <span className="text-blue-500 mt-2 ml-4">
                                SAE
                            </span>

                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-8 text-gray-400 leading-relaxed text-lg md:text-xl max-w-xl">

                            <strong className="text-white">
                                SAE (Sistema Administrativo Empresarial)
                            </strong>{" "}
                            te ayuda a controlar ventas, inventario, compras y caja desde un solo lugar.<br/><br/>
                            <strong className="text-white">
                                Lo adaptamos según tus necesidades sin ningún costo. Primero entendemos tus procesos y luego trabajamos en base a ello.
                            </strong>{" "}

                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <button
                                onClick={() => scrollToSection("sae")}
                                className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                            >
                                Conoce más acerca de SAE
                            </button>
                            <a
                                href="https://demo.solusoftgt.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 transition px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                            >
                                Prueba una Demostración
                            </a>

                        </div>

                    </motion.div>


                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >

                        {/* VIDEO */}
                        <div className="relative">

                            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full" />

                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="relative w-full rounded-2xl shadow-2xl shadow-blue-500/20 border border-white/10"
                            >
                                <source src={demo} type="video/mp4" />

                                Tu navegador no soporta videos HTML5.
                            </video>
                            {/* <img
                                src={laptop}
                                alt="laptop"
                                className="relative w-full rounded-2xl shadow-2xl shadow-blue-500/20 border border-white/10"
                            /> */}

                        </div>

                    </motion.div>

                </div>


                {/* TRUST BAR */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 lg:mt-5 border-white/10 pt-8"
                >

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

                        <div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
                            <ShieldCheck
                                size={20}
                                className="text-blue-500"
                            />

                            <span>Seguro</span>
                        </div>

                        <div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
                            <Cloud
                                size={20}
                                className="text-blue-500"
                            />

                            <span>En la nube</span>
                        </div>

                        <div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
                            <Clock3
                                size={20}
                                className="text-blue-500"
                            />

                            <span>Disponible 24/7</span>
                        </div>

                        <div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
                            <Headset
                                size={20}
                                className="text-blue-500"
                            />

                            <span>Soporte técnico</span>
                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default Banner;