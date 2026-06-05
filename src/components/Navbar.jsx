import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoSolusoft from '../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Función para hacer scroll suave a las secciones usando su ID
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false); // Cierra el menú móvil al hacer click
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-lg border-b border-blue-500/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logoSolusoft} alt="SOLUSOFT" className="p-2" style={{ width: '100%', maxWidth: '280px', marginTop: '10px', objectFit: 'contain' }} />
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden lg:flex items-center gap-10 text-gray-300 font-medium">
                    <li
                        onClick={() => scrollToSection("home")}
                        className="hover:text-blue-400 transition cursor-pointer"
                    >
                        Inicio
                    </li>
                    <li
                        onClick={() => scrollToSection("custom-software")}
                        className="hover:text-blue-400 transition cursor-pointer"
                    >
                        Software a Medida
                    </li>
                    <li
                        onClick={() => scrollToSection("reservar-cita")}
                        className="hover:text-blue-400 transition cursor-pointer"
                    >
                        Reservar Cita
                    </li>
                    <li
                        onClick={() => scrollToSection("services-saas")}
                        className="hover:text-blue-400 transition cursor-pointer"
                    >
                        SaaS
                    </li>

                </ul>

                {/* DESKTOP BUTTON */}
                <a
                    href="http://35.255.182.141:3002/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:block bg-blue-600 hover:bg-blue-500 text-white transition px-6 py-3 rounded-2xl font-semibold text-center"
                >
                    Demo SaaS
                </a>

                {/* MOBILE BUTTON */}
                <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="lg:hidden bg-[#0b1120] border-t border-blue-500/10 px-6 py-6 text-white">
                    <ul className="flex flex-col gap-6 text-lg">
                        <li
                            onClick={() => scrollToSection("home")}
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            Inicio
                        </li>
                        <li
                            onClick={() => scrollToSection("custom-software")}
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            Software a Medida
                        </li>
                        <li
                            onClick={() => scrollToSection("services-saas")}
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            SaaS
                        </li>
                        <li
                            onClick={() => scrollToSection("reservar-cita")}
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            Reservar Cita
                        </li>
                        <a
                            href="http://35.255.182.141:3002/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-semibold transition text-center block"
                        >
                            Demo SaaS
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;