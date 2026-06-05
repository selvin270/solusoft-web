import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#050816] border-t border-blue-500/10 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">SOLUSOFT</h1>
                <p className="text-gray-500 mt-5 md:mt-0">© {new Date().getFullYear()} Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;