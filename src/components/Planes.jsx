import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

const planesData = [
    {
        id: 1,
        nombre: "BÁSICO",
        precio: "150",
        destacado: false,
        soporte: "5 soportes técnicos gratis por mes",
        theme: {
            cardBg: "from-slate-900/90 via-slate-900/60 to-slate-950",
            border: "border-slate-800 hover:border-slate-700",
            accentColor: "text-slate-400",
            badgeBg: "bg-slate-800/80 text-slate-300 border-slate-700",
            buttonClass: "bg-slate-800 hover:bg-slate-700 text-white shadow-slate-900/50",
            iconBg: "bg-slate-800 text-slate-400"
        },
        modulos: [
            "Negocios",
            "Sucursales",
            "Roles",
            "Usuarios (hasta 5 usuarios)",
            "Productos",
            "Clientes",
            "Categorías",
            "Ventas"
        ]
    },
    {
        id: 2,
        nombre: "INTERMEDIO",
        precio: "200",
        destacado: false,
        soporte: "10 soportes técnicos gratis por mes",
        theme: {
            cardBg: "from-blue-950/80 via-slate-900/80 to-slate-950",
            border: "border-blue-900/60 hover:border-blue-500/50",
            accentColor: "text-blue-400",
            badgeBg: "bg-blue-900/40 text-blue-300 border-blue-700/50",
            buttonClass: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30",
            iconBg: "bg-blue-900/60 text-blue-400"
        },
        modulos: [
            "Negocios",
            "Sucursales",
            "Roles",
            "Usuarios (hasta 10 usuarios)",
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
        precio: "250",
        destacado: true,
        badgeText: "MÁS POPULAR",
        soporte: "Soporte técnico ilimitado gratuito",
        theme: {
            cardBg: "from-indigo-950/90 via-purple-950/50 to-slate-950",
            border: "border-purple-500/80 shadow-2xl shadow-purple-500/20 ring-2 ring-purple-500/30",
            accentColor: "text-purple-300",
            badgeBg: "bg-purple-900/60 text-purple-200 border-purple-500/50",
            buttonClass: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-500/30",
            iconBg: "bg-purple-900/80 text-purple-300"
        },
        modulos: [
            "Negocios",
            "Sucursales",
            "Roles",
            "Usuarios (ilimitado)",
            "Productos",
            "Clientes",
            "Categorías",
            "Ventas",
            "Cajas",
            "Proveedores",
            "Compras",
            "Órdenes de Compra",
            "Contabilidad",
            "Conexión de Facturación Electrónica con su Certificador FEL"
        ]
    }
];

const Planes = ({ onSelectPlan }) => {
    return (
        <section id="planes" className="bg-[#030712] text-white py-24 border-t border-gray-800/80 relative overflow-hidden">
            {/* Luces de fondo sutiles */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* ENCABEZADO */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Elige el plan ideal para <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"><br />tu negocio</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-base md:text-lg">
                        A continuación te mostramos que módulos incluye cada plan. <br />
                        Cambia de plan en cualquier momento.
                    </p>
                </div>

                {/* TARJETAS DE PLANES */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {planesData.map((plan, planIndex) => {
                        const modulosAnteriores = planIndex > 0 ? planesData[planIndex - 1].modulos : [];

                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: plan.id * 0.1 }}
                                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 bg-gradient-to-b border backdrop-blur-xl ${plan.theme.cardBg} ${plan.theme.border} ${
                                    plan.destacado ? "lg:-translate-y-4 shadow-2xl" : "hover:border-slate-600"
                                }`}
                            >
                                {/* BADGE DESTACADO PARA PLAN AVANZADO */}
                                {plan.destacado && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/30 flex items-center gap-1.5 whitespace-nowrap border border-purple-400/30">
                                        {plan.badgeText}
                                    </div>
                                )}

                                <div>
                                    {/* ENCABEZADO DEL PLAN */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="text-2xl font-black text-white tracking-wide">
                                                {plan.nombre}
                                            </h3>
                                        </div>
                                        <p className="text-xs font-semibold text-emerald-400 mt-2 flex items-center gap-1">
                                            <ShieldCheck size={14} /> {plan.soporte}
                                        </p>
                                    </div>

                                    {/* PRECIO */}
                                    <div className="mb-8 pb-6 border-b border-gray-800/80 flex items-baseline gap-1">
                                        <span className="text-gray-400 text-2xl font-bold">Q</span>
                                        <span className="text-5xl font-black text-white tracking-tight">
                                            {plan.precio}
                                        </span>
                                        <span className="text-gray-400 font-medium text-sm">/ mes</span>
                                    </div>

                                    {/* MÓDULOS DEL PLAN */}
                                    <div className="mb-8">
                                        <ul className="space-y-2.5">
                                            {plan.modulos.map((modulo, idx) => {
                                                const esNuevo = planIndex > 0 && !modulosAnteriores.includes(modulo);

                                                return (
                                                    <li
                                                        key={idx}
                                                        className={`flex items-start gap-2.5 text-sm rounded-xl px-3 py-2 transition-all duration-200 ${
                                                            esNuevo
                                                                ? "bg-amber-500/10 text-amber-200 font-semibold ring-1 ring-amber-500/30 shadow-sm"
                                                                : "text-gray-300 bg-slate-900/40 border border-slate-800/50"
                                                        }`}
                                                    >
                                                        {/* Icono Check en todos los items */}
                                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                                            esNuevo
                                                                ? "bg-amber-500 text-slate-950 font-bold"
                                                                : plan.theme.iconBg
                                                        }`}>
                                                            <Check size={12} strokeWidth={3} />
                                                        </div>

                                                        {/* Contenedor del texto */}
                                                        <span className="flex-1 min-w-0 break-words leading-tight">
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
                                    onClick={() => onSelectPlan(plan.nombre)}
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] ${plan.theme.buttonClass}`}
                                >
                                    Solicitar este plan
                                    <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Planes;