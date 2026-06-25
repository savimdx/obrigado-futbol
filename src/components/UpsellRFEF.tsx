import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Award, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  Lock, 
  Check, 
  Sparkles, 
  Flame, 
  Target,
  ArrowRightLeft,
  ChevronRight,
  AlertTriangle,
  Play,
  RotateCcw,
  Clock,
  Download,
  Calendar,
  Layers,
  Activity,
  FileText
} from 'lucide-react';

interface UpsellRFEFProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white font-sans pb-24">
      
      {/* Sport Field Grid overlay for the futuristic soccer/futsal feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      {/* Futuristic glowing backdrop lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= HEADER SCARCITY TICKER ================= */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-600 to-amber-500 text-white text-center py-2.5 px-4 font-bold text-xs sm:text-sm tracking-wider shadow-lg flex items-center justify-center gap-2 relative z-20 border-b border-orange-500/30">
        <Sparkles className="h-4 w-4 text-amber-200 animate-spin" />
        <span className="uppercase tracking-widest text-[10px] sm:text-xs">¡Oferta única de una sola vez! No cierres ni recargues esta página</span>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10 space-y-12">
        
        {/* ================= HERO TEXT & HOOK ================= */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-widest text-orange-400 uppercase">
            ⚡ COMPLEMENTO DE ENTRENAMIENTO EXCLUSIVO
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white font-sans uppercase">
            Descubre las <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">98 metodologías de entrenamiento</span> que utiliza la selección española de fútbol, <br className="hidden sm:inline"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              "La Furia"
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Accede a 98 ejercicios prácticos y sesiones de fútbol listas para usar en tus entrenamientos, los mismos esquemas de transición y ataque integrado que utiliza <strong className="text-orange-400 font-extrabold">"La Furia"</strong>.
          </p>
        </div>

        {/* ================= MOCKUP AND HERO COUPLING GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-950/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          {/* Cover image mockup container */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center space-y-4">
            
            {/* The PDF Mockup image requested by user */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-950/50 p-2 border border-slate-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img 
                src="https://i.ibb.co/KchjnPqV/Chat-GPT-Image-25-de-jun-de-2026-12-56-09.png" 
                alt="Biblioteca Profesional de Entrenamientos de Fútbol Sala Mockup" 
                className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </div>

            <div className="text-center space-y-1">
              <span className="text-[11px] text-orange-400 font-mono font-bold uppercase tracking-widest block">📘 SISTEMA DIGITAL INSTANTÁNEO</span>
              <p className="text-[10px] text-slate-500 font-mono">Format: PDF • Size: 6.8 MB</p>
            </div>
          </div>

          {/* Value features & checkout list */}
          <div className="col-span-1 md:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                La Biblioteca Táctica Más Completa
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Muchos directores técnicos dominan la pizarra teórica y analizan videos por horas, pero fallan en lo más importante: <strong className="text-orange-300">cómo estructurar esa teoría en ejercicios prácticos reales de alta intensidad</strong>. 
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Esta biblioteca profesional resuelve ese problema de raíz. Consigues 98 fichas de entrenamiento desglosadas que cubren todas las fases tácticas esenciales.
              </p>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-900">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>98 Ejercicios Prácticos</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Fórmula Ofensiva y Defensiva</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Transiciones y Contragolpe</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Entrenamiento Integrado</span>
              </div>
            </div>

            {/* HIGHLY STYLED VALUE BOX WITH ACCEPT AND DECLINE BUTTONS */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-orange-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">Oferta de Adhesión Única</span>
                  <span className="text-xs text-slate-400">Precio especial exclusivo hoy</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 line-through block">$97.00 USD</span>
                  <span className="text-xl font-black text-amber-400 font-mono">$5.90 USD</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={onAccept}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-orange-500/10 flex items-center justify-center gap-2"
                >
                  <Check className="h-4 w-4 stroke-[3px]" />
                  <span>Sí, Añadir al Pedido por $5.90</span>
                </button>

                <button
                  onClick={onDecline}
                  className="w-full py-2.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  No, gracias, prefiero dejar pasar esta oportunidad
                </button>
              </div>

              <p className="text-[9px] text-slate-500 text-center font-mono uppercase tracking-wider">
                🔒 Pago seguro procesado • 100% de Garantía de Satisfacción
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

