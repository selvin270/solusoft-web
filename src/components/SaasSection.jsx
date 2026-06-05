import React from "react";
import { Layers, TrendingUp, ShieldCheck, DollarSign } from "lucide-react";

const features = [
    {
        icon: <Layers size={22} />,
        title: "Arquitectura Multi-sucursal",
        desc: "Controla múltiples establecimientos y franquicias de forma centralizada bajo un mismo negocio."
    },
    {
        icon: <TrendingUp size={22} />,
        title: "Inventario Automatizado (Kardex)",
        desc: "Seguimiento exacto de movimientos, stock y validaciones en tiempo real para evitar pérdidas."
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "Seguridad, Permisos y Roles",
        desc: "Protocolos robustos de protección. Crea roles y asigna permisos específicos por rol o por usuario."
    },
    {
        icon: <DollarSign size={22} />,
        title: "Auditoría de Caja y Ventas",
        desc: "Monitorea aperturas, cierres, saldos iniciales e historial financiero detallado de tu operación."
    }
];

const Services = () => {
    return (
        <section id="services-saas" className="bg-white text-black py-20">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* ENCABEZADO INTEGRADO */}
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-950">
                        Nuestra Plataforma <span className="text-blue-600">SaaS</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Un sistema administrativo potente y adaptable listo para operar en empresas, farmacias, 
                        mecánicas, abarroterías, carpinterías, herrerías y ferreterías.
                    </p>
                </div>

                {/* GRID ESTILO BENTO BOX CON MÁRGENES OPTIMIZADOS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {features.map((feat, index) => (
                        <div 
                            key={index} 
                            className="group p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-200/80 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Icono estilizado con transición activa al hacer hover en la tarjeta */}
                                <div className="text-blue-600 bg-blue-50 w-11 h-11 rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {feat.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mt-5 tracking-tight">
                                    {feat.title}
                                </h3>
                                
                                <p className="text-sm text-gray-500 mt-2.5 leading-relaxed">
                                    {feat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;