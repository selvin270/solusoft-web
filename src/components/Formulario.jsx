import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Video, Loader2 } from "lucide-react";

const Formulario = () => {
    // 1. AÑADIDO "telefono" AL ESTADO INICIAL
    const [formData, setFormData] = useState({ nombre: "", correo: "", empresa: "", telefono: "", fecha: "", hora: "" });
    const [enviado, setEnviado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCargando(true);
        setError(null);

        try {
            const response = await fetch("https://formspree.io/f/mwvjvlgv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    Nombre: formData.nombre,
                    Correo: formData.correo,
                    Empresa: formData.empresa,
                    Telefono: formData.telefono, // 2. ENVIADO A FORMSPREE
                    Fecha_Sugerida: formData.fecha,
                    Hora_Sugerida: formData.hora,
                    _subject: `Nueva solicitud de reunión de ${formData.nombre}`
                })
            });

            if (response.ok) {
                setEnviado(true);
            } else {
                throw new Error("Hubo un problema al procesar el envío.");
            }
        } catch (err) {
            setError("No se pudo enviar la solicitud. Inténtalo de nuevo o contáctanos por WhatsApp.");
        } finally {
            setCargando(false);
        }
    };

    return (
        <section id="reservar-cita" className="bg-[#050816] text-white py-20 border-t border-blue-500/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* COLUMNA IZQUIERDA: TEXTO COMERCIAL - ANIMADA */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl font-black text-white leading-tight">
                            Agenda una reunión de <span className="text-blue-500">diagnóstico</span>
                        </h2>
                        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                            Reserva una sesión estratégica sin costo con nuestro equipo de ingeniería. Analizaremos tus operations en tiempo real y trazaremos la hoja de ruta técnica ideal para tu software.
                        </p>
                        
                        <div className="mt-10 space-y-4">
                            {[
                                "Sesión de 30 minutos vía Google Meet o Zoom.",
                                "Validación de viabilidad para tu software o migración SaaS.",
                                "Estimación preliminar de tiempos de desarrollo."
                            ].map((text, i) => (
                                <motion.div 
                                    key={i} 
                                    className="flex items-center gap-3 text-gray-300"
                                    initial={{ opacity: 0, y: 15 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    viewport={{ once: true, amount: 1 }} 
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                                >
                                    <CheckCircle2 className="text-blue-500 flex-shrink-0" size={22} />
                                    <span className="font-medium">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* COLUMNA DERECHA: FORMULARIO - ANIMADA */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-[#0b1120] p-8 lg:p-10 rounded-3xl shadow-2xl shadow-blue-500/10 border border-blue-500/20"
                    >
                        {!enviado ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Tu Nombre</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-600" placeholder="Ej. Selvin Castellanos" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Correo Corporativo</label>
                                        <input required type="email" className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-600" placeholder="ejemplo@empresa.com" value={formData.correo} onChange={(e) => setFormData({...formData, correo: e.target.value})} />
                                    </div>
                                </div>

                                {/* 3. FILA MODIFICADA A DOS COLUMNAS: EMPRESA Y TELÉFONO */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Empresa / Organización</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-600" placeholder="Ej. Solusoft Central" value={formData.empresa} onChange={(e) => setFormData({...formData, empresa: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Número de Teléfono</label>
                                        <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-600" placeholder="Ej. +502 5555-5555" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                                    </div>
                                </div>

                                {/* CAMPOS: FECHA Y HORA DE REUNIÓN */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Fecha sugerida</label>
                                        <input required type="date" className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition [color-scheme:dark]" value={formData.fecha} onChange={(e) => setFormData({...formData, fecha: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Hora sugerida</label>
                                        <input required type="time" className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-blue-500/20 text-white focus:outline-none focus:border-blue-500 transition [color-scheme:dark]" value={formData.hora} onChange={(e) => setFormData({...formData, hora: e.target.value})} />
                                    </div>
                                </div>

                                {error && (
                                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-center">
                                        {error}
                                    </p>
                                )}

                                <div className="flex flex-col gap-4 pt-2">
                                    {/* BOTÓN PRINCIPAL */}
                                    <button 
                                        type="submit" 
                                        disabled={cargando}
                                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:cursor-not-allowed"
                                    >
                                        {cargando ? (
                                            <>Enviando... <Loader2 size={18} className="animate-spin" /></>
                                        ) : (
                                            <>Confirmar y Agendar Reunión <Calendar size={18} /></>
                                        )}
                                    </button>

                                    {/* DIVIDER VISUAL DISCRETO */}
                                    <div className="flex items-center my-1">
                                        <div className="flex-1 border-t border-gray-800"></div>
                                        <span className="px-3 text-xs text-gray-500 uppercase font-medium tracking-wider">o también</span>
                                        <div className="flex-1 border-t border-gray-800"></div>
                                    </div>

                                    {/* BOTÓN DE WHATSAPP ESTILO PÍLDORA (REDONDEADO) */}
                                    <a 
                                        href="https://wa.me/36431072" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-fit mx-auto bg-emerald-500/10 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-400 hover:text-white font-medium py-2.5 px-6 rounded-full transition flex items-center gap-2 text-sm shadow-md"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.366 9.864-9.736.001-2.596-1.008-5.036-2.842-6.871C16.402 2.16 13.969 1.151 11.38 1.15c-5.451 0-9.877 4.368-9.88 9.739-.001 1.543.415 3.053 1.205 4.394l-.985 3.596 3.733-.969zM15.82 13.01c-.247-.123-1.463-.715-1.692-.797-.228-.082-.394-.123-.559.123-.166.247-.641.797-.786.96-.145.166-.29.185-.537.062-.247-.123-1.044-.381-1.986-1.21-.733-.647-1.228-1.447-1.372-1.693-.145-.247-.015-.38.107-.502.11-.11.247-.287.37-.43.123-.145.165-.247.247-.412.083-.166.041-.309-.02-.432-.062-.123-.559-1.332-.765-1.832-.2-.483-.404-.418-.559-.426-.145-.007-.31-.01-.475-.01-.165 0-.433.061-.66.309-.227.247-.866.837-.866 2.04 0 1.202.887 2.362 1.011 2.526.124.165 1.745 2.637 4.226 3.69.59.25 1.051.4 1.41.512.593.187 1.133.16 1.56.097.476-.071 1.463-.59 1.669-1.16.207-.572.207-1.062.145-1.164-.062-.101-.227-.163-.475-.285z"/>
                                        </svg>
                                        Contactar por WhatsApp
                                    </a>
                                </div>
                            </form>
                        ) : (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                                    <CheckCircle2 size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">¡Reunión Solicitada!</h3>
                                <p className="text-gray-400 max-w-sm mx-auto">
                                    Excelente, <strong>{formData.nombre}</strong>. Hemos recibido tu propuesta para el <strong>{formData.fecha}</strong> a las <strong>{formData.hora}</strong>. Te enviaremos la invitación formal de Google Meet a <strong>{formData.correo}</strong> en breve.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Formulario;