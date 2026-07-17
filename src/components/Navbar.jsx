import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoSolusoft from '../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        setOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-lg border-b border-blue-500/10">

            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">

                {/* LOGO */}

                <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                >

                    <img
                        src={logoSolusoft}
                        alt="SOLUSOFT"
                        className="p-2"
                        style={{
                            width: '100%',
                            maxWidth: '280px',
                            marginTop: '10px',
                            objectFit: 'contain'
                        }}
                    />

                </div>


                {/* DESKTOP MENU */}

                <ul className="hidden lg:flex items-center gap-10 text-gray-300 font-medium ml-auto">

                    <li
                        onClick={() => scrollToSection("banner")}
                        className="hover:text-blue-400 transition cursor-pointer"
                    >
                        Inicio
                    </li>

                    <li
                        onClick={() => scrollToSection("sae")}
                        className="hover:text-blue-400 transition cursor-pointer"
                    >
                        SAE
                    </li>

                    <li
                        onClick={() => scrollToSection("formulario")}
                        className="hover:text-blue-400 transition cursor-pointer"
                    >
                        Contáctanos
                    </li>

                </ul>


                {/* MOBILE BUTTON */}

                <button
                    className="lg:hidden text-white ml-auto"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>

            </div>


            {/* MOBILE MENU */}

            {open && (

                <div className="lg:hidden bg-[#0b1120] border-t border-blue-500/10 px-6 py-6 text-white">

                    <ul className="flex flex-col gap-6 text-lg">

                        <li
                            onClick={() => scrollToSection("banner")}
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            Inicio
                        </li>

                        <li
                            onClick={() => scrollToSection("sae")}
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            SAE
                        </li>

                        <li
                            onClick={() => scrollToSection("formulario")}
                            className="cursor-pointer hover:text-blue-400 transition"
                        >
                            Contáctanos
                        </li>

                    </ul>

                </div>

            )}

        </nav>
    );
};

export default Navbar;