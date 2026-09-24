import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, ShieldCheck, Calculator } from "lucide-react";

const planesData = [
    {
        id: 1,
        nombre: "BÁSICO",
        precio: "150",
        descripcion: "Ideal para pequeños negocios que buscan digitalizar sus ventas y caja.",
        destacado: false,
        modulos: [
            "Negocios",
            "Sucursales",
            "Roles",
            "Usuarios",
            "Productos",
            "Clientes",
            "Categorías",
            "Ventas",
            "Cajas"
        ]
    },
    {
        id: 2,
        nombre: "INTERMEDIO",
        precio: "250",
        descripcion: "Perfecto para negocios en crecimiento que necesitan gestión de inventario y compras.",
        destacado: false,
        modulos: [
            "Negocios",
            "Sucursales",
            "Roles",
            "Usuarios",
            "Productos",
            "Clientes",
            "Categorías",
            "Ventas",
            "Cajas",
            "Proveedores",
            "Compras",
            "Órdenes de Compra"
        ]
    },
    {
        id: 3,
        nombre: "AVANZADO",
        precio: "350",
        descripcion: "La solución integral definitiva. Incluye control financiero total y gestión contable avanzada.",
        destacado: true,
        badgeText: "MÁS COMPLETO & CONTABILIDAD",
        modulos: [
            "Negocios",
            "Sucursales",
            "Roles",
            "Usuarios",
            "Productos",
            "Clientes",
            "Categorías",
            "Ventas",
            "Cajas",
            "Proveedores",
            "Compras",
            "Órdenes de Compra",
            "Contabilidad (Módulo Principal)"
        ]
    }
];

const Planes = () => {
    const scrollToFormulario = () => {
        const element = document.getElementById("formulario");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="planes" className="bg-white text-gray-900 py-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* ENCABEZADO */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold text-sm tracking-wider uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-3">
                        Planes y Tarifas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight">
                        Elige el plan ideal para <span className="text-blue-600">tu negocio</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Potencia tu empresa con la herramienta contable y administrativa más completa.
                    </p>
                </div>

                {/* TARJETAS DE PLANES */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {planesData.map((plan) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: plan.id * 0.1 }}
                            className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                                plan.destacado
                                    ? "bg-white border-2 border-blue-600 shadow-2xl shadow-blue-500/20 scale-105 z-10 ring-4 ring-blue-50"
                                    : "bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl"
                            }`}
                        >
                            {/* BADGE DESTACADO PARA PLAN AVANZADO */}
                            {plan.destacado && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                                    <Star size={14} className="fill-current" /> {plan.badgeText}
                                </div>
                            )}

                            <div>
                                {/* ENCABEZADO DEL PLAN */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 tracking-wide flex items-center gap-2">
                                        {plan.nombre}
                                        {plan.destacado && (
                                            <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2.5 py-0.5 rounded-full">
                                                Recomendado
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                                        {plan.descripcion}
                                    </p>
                                </div>

                                {/* PRECIO */}
                                <div className="mb-8 pb-6 border-b border-gray-100 flex items-baseline gap-1">
                                    <span className="text-gray-500 text-2xl font-bold">Q</span>
                                    <span className="text-5xl font-black text-gray-950 tracking-tight">
                                        {plan.precio}
                                    </span>
                                    <span className="text-gray-500 font-medium text-sm">/ al mes</span>
                                </div>

                                {/* MÓDULOS DEL PLAN */}
                                <div className="mb-8">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                        Módulos Incluidos ({plan.modulos.length})
                                    </p>
                                    <ul className="space-y-3">
                                        {plan.modulos.map((modulo, idx) => {
                                            const esContabilidad = modulo.includes("Contabilidad");

                                            return (
                                                <li 
                                                    key={idx} 
                                                    className={`flex items-start gap-3 text-sm rounded-lg p-1 transition ${
                                                        esContabilidad 
                                                            ? "bg-blue-50/80 font-bold text-blue-900 ring-1 ring-blue-200" 
                                                            : "text-gray-700 font-medium"
                                                    }`}
                                                >
                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                                        esContabilidad ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                                                    }`}>
                                                        {esContabilidad ? (
                                                            <Calculator size={13} strokeWidth={2.5} />
                                                        ) : (
                                                            <Check size={13} strokeWidth={3} />
                                                        )}
                                                    </div>
                                                    <span className={esContabilidad ? "text-blue-900 font-bold" : ""}>
                                                        {modulo}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>

                            {/* BOTÓN DE ACCIÓN */}
                            <button
                                onClick={scrollToFormulario}
                                className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-md ${
                                    plan.destacado
                                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30"
                                        : "bg-gray-100 hover:bg-blue-600 text-gray-900 hover:text-white"
                                }`}
                            >
                                Solicitar este plan
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Planes;