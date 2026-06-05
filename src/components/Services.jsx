import React from "react";
import { Monitor, Smartphone, Database, ShieldCheck } from "lucide-react";

const services = [
    { icon: <Monitor size={22} />, title: "Páginas Web", desc: "Sitios web modernos, rápidos y multiplataforma." },
    { icon: <Smartphone size={22} />, title: "Apps Móviles", desc: "Aplicaciones nativas e híbridas para Android y iOS." },
    { icon: <Database size={22} />, title: "Software a la Medida", desc: "Sistemas administrativos adaptados a tu flujo real." },
    { icon: <ShieldCheck size={22} />, title: "Soporte Técnico", desc: "Mantenimiento continuo y evolución de tus plataformas." }
];

const CustomSoftware = () => {
    return (
        <section id="custom-software" className="bg-white text-black py-20 border-b border-gray-150">
            <div className="max-w-7xl mx-auto px-6">

                {/* ENCABEZADO CON MÁRGENES OPTIMIZADOS */}
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-950">
                        Desarrollo de <span className="text-blue-600">Software</span> a tu medida
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Creamos soluciones tecnológicas desde cero para resolver problemas específicos, 
                        automatizar procesos y escalar la operación de tu empresa.
                    </p>
                </div>

                {/* GRID ESTILO BENTO BOX CON ESPACIADO REDUCIDO */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-200/80 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Icono con animación activa al hacer hover en la tarjeta */}
                                <div className="text-blue-600 bg-blue-50 w-11 h-11 rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mt-5 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-2.5 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CustomSoftware;