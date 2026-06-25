/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [downloadStatus, setDownloadStatus] = useState<{ [key: string]: 'idle' | 'downloading' | 'completed' }>({});

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 antialiased overflow-x-hidden selection:bg-orange-500 selection:text-slate-950 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Soccer field decoration overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Clean Radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative z-10 text-center space-y-8 backdrop-blur-md">
        
        {/* Header checkmark */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-20 w-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.15)]">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          
          <span className="text-xs font-mono font-black text-amber-500 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            Acceso Liberado
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight uppercase tracking-tight">
            ¡Muchas Gracias por tu Compra!
          </h2>
        </div>

        {/* Gratitude & description text */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          <p>
            Tu compra ha sido procesada con total éxito y seguridad. ¡Queremos agradecerte enormemente por tu confianza en nuestro trabajo!
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            Hemos preparado este material con el más alto estándar táctico para llevar tus entrenamientos de fútbol sala al siguiente nivel profesional. Acabas de tomar la mejor decisión para el desarrollo de tus jugadores.
          </p>
          <div className="bg-slate-950/50 border border-slate-850 p-4 rounded-xl text-xs text-orange-400 font-mono flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
            <span>¡Todas las sesiones y los enlaces de acceso han sido enviados a tu correo!</span>
          </div>
        </div>

        {/* Footer subtext with order ID */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono">
            <span>ID: <strong className="text-slate-400">#FUT-77291B</strong></span>
            <span>ESTADO: <strong className="text-emerald-400">APROBADO</strong></span>
            <span>SOPORTE: <strong className="text-slate-400">contacto@entrenamientodefutbolsala.com</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}


