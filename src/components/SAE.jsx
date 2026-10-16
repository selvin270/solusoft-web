import React from "react";
import {
    Building2,
    Store,
    ShieldCheck,
    Users,
    Package,
    Truck,
    UserCheck,
    Tags,
    ShoppingCart,
    ShoppingBag,
    ClipboardList,
    Calculator,
    Wallet,
    Hammer,
    Flame,
    Wrench,
    Car
} from "lucide-react";

// Lista completa de módulos derivados de la base de datos del sistema
const modules = [
    {
        icon: <Store size={26} />,
        title: "Sucursales",
        desc: "Administra múltiples puntos de venta y ubicaciones de forma centralizada."
    },
    {
        icon: <ShieldCheck size={26} />,
        title: "Roles",
        desc: "Configura roles de acceso dinámicos según los niveles jerárquicos del negocio."
    },
    {
        icon: <Users size={26} />,
        title: "Usuarios",
        desc: "Administra el personal, asigna credenciales y controla permisos en cada sucursal."
    },
    {
        icon: <Package size={26} />,
        title: "Productos e Inventario",
        desc: "Catálogo completo con soporte para SKUs autogenerados o lecturas por código de barras."
    },
    {
        icon: <Truck size={26} />,
        title: "Proveedores",
        desc: "Registro detallado de proveedores, contactos, NIT y compras asociadas."
    },
    {
        icon: <UserCheck size={26} />,
        title: "Clientes",
        desc: "Base de datos de clientes con historial de compras y datos de facturación."
    },
    {
        icon: <Tags size={26} />,
        title: "Categorías",
        desc: "Clasifica y organiza tus productos para una búsqueda y control eficiente."
    },
    {
        icon: <ShoppingCart size={26} />,
        title: "Ventas",
        desc: "Procesamiento ágil de ventas, cálculo automático de impuestos y descuento directo del stock."
    },
    {
        icon: <ShoppingBag size={26} />,
        title: "Compras",
        desc: "Registro de ingresos de mercadería con actualización automática de existencias y kardex."
    },
    {
        icon: <ClipboardList size={26} />,
        title: "Órdenes de Compra",
        desc: "Planifica y gestiona solicitudes de pedidos a proveedores con estimación de costos."
    },
    {
        icon: <Calculator size={26} />,
        title: "Contabilidad",
        desc: "Generación automática de asientos contables por ventas/compras, libro diario, mayor y períodos."
    },
    {
        icon: <Wallet size={26} />,
        title: "Cajas y Tesorería",
        desc: "Control de sesiones de caja (apertura/cierre), arqueos, gastos menores y transferencias."
    }
];

const businesses = [
    {
        icon: <Hammer size={26} />,
        title: "Carpintería",
        desc: "Controla el inventario de maderas, insumos y la cotización de proyectos a medida."
    },
    {
        icon: <Flame size={26} />,
        title: "Herrería",
        desc: "Gestiona materiales como perfiles y tubos, registrando costos de fabricación y mano de obra."
    },
    {
        icon: <Wrench size={26} />,
        title: "Ferretería",
        desc: "Administra miles de productos, precios por volumen y venta rápida en mostrador."
    },
    {
        icon: <Car size={26} />,
        title: "Mecánica",
        desc: "Lleva el historial de servicios, repuestos utilizados y órdenes de trabajo por vehículo."
    }
];

const SAE = () => {
    return (
        <section id="sae" className="bg-white text-black">
            {/* =========================
                MÓDULOS DE LA SOLUCIÓN
            ========================== */}
            <div className="bg-gray-50 border-t border-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ENCABEZADO */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-gray-950">
                            Todo el control de tu negocio
                            <br className="hidden md:block" />
                            <span className="text-blue-600">
                                {" "}en una sola plataforma.
                            </span>
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Descubre todos los módulos integrados para automatizar la gestión operativa y contable de tus sucursales. <strong>Soporte técnico 24/7 y Sin contrato.</strong>
                        </p>
                    </div>

                    {/* TODOS LOS MÓDULOS */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                className="text-center p-7 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-500/30 transition-all duration-300"
                            >
                                {/* ICONO ESTÁTICO (Sin interacción hover) */}
                                <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    {module.icon}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mt-6">
                                    {module.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                                    {module.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    

                </div>
            </div>
        </section>
    );
};

export default SAE;