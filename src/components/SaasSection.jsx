import React, { useState } from "react";
import { Layers, TrendingUp, ShieldCheck, DollarSign, Check } from "lucide-react";

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

const plans = [
    {
        name: "Básico",
        desc: "Ideal para pequeños negocios o emprendedores iniciando.",
        priceMonthly: 150,
        priceYearly: 1650,
        features: [
            "Hasta 2 usuarios",
            "Permisos por roles",
            "Seguridad SSL",
            "Soporte 24/7",
            "Compatible con dispositivos móviles"
        ],
        popular: false
    },
    {
        name: "Intermedio",
        desc: "Perfecto para empresas en crecimiento y equipos medianos.",
        priceMonthly: 250,
        priceYearly: 2750,
        features: [
            "Hasta 5 usuarios",
            "Permisos por roles",
            "Seguridad SSL",
            "Soporte 24/7",
            "Compatible con dispositivos móviles"
        ],
        popular: true
    },
    {
        name: "Avanzado",
        desc: "Para corporaciones que exigen el máximo control y capacidad.",
        priceMonthly: 350,
        priceYearly: 4850,
        features: [
            "Hasta 10 usuarios",
            "Permisos por roles",
            "Seguridad SSL",
            "Soporte 24/7",
            "Compatible con dispositivos móviles"
        ],
        popular: false
    }
];

const Services = () => {
    const [isYearly, setIsYearly] = useState(false);

    // Función para manejar el scroll suave hacia cualquier sección por su ID
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

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

                {/* --- SECCIÓN DE PLANES DE SUSCRIPCIÓN --- */}
                <div className="mt-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950">
                        Planes listos para impulsar tu negocio
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Selecciona el plan que mejor se adapte al tamaño de tu operación. Cambia o cancela cuando quieras.
                    </p>

                    {/* Selector Mensual / Anual */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm font-semibold ${!isYearly ? "text-blue-600" : "text-gray-500"}`}>
                            Mensual
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 bg-gray-100 border border-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none relative"
                            aria-label="Cambiar tipo de facturación"
                        >
                            <div className={`w-6 h-6 bg-blue-600 rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
                        </button>
                        <span className={`text-sm font-semibold flex items-center gap-1.5 ${isYearly ? "text-blue-600" : "text-gray-500"}`}>
                            Anual
                            <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                                Ahorra
                            </span>
                        </span>
                    </div>
                </div>

                {/* Grid de Tarjetas de Precios */}
                <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${plan.popular
                                    ? "bg-gray-950 text-white shadow-xl shadow-gray-950/10 scale-105 z-10 border border-gray-900"
                                    : "bg-gradient-to-b from-gray-50 to-white border border-gray-200 hover:shadow-lg text-gray-900"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                    Más Popular
                                </span>
                            )}

                            <div>
                                <h3 className="text-2xl font-black tracking-tight">{plan.name}</h3>
                                <p className={`text-sm mt-2 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                                    {plan.desc}
                                </p>

                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-black">
                                        Q{isYearly ? plan.priceYearly.toLocaleString() : plan.priceMonthly}
                                    </span>
                                    <span className={`text-sm font-medium ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                                        /{isYearly ? "año" : "mes"}
                                    </span>
                                </div>

                                <ul className="mt-8 space-y-4 border-t border-gray-200/20 pt-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <div className={`p-0.5 rounded-full shrink-0 ${plan.popular ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-600"}`}>
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className={plan.popular ? "text-gray-300" : "text-gray-700"}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={() => scrollToSection("reservar-cita")}
                                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${plan.popular
                                            ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                                        }`}
                                >
                                    Comenzar ahora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;