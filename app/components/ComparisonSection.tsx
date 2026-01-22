import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section id="comparativa" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            ¿Por qué seguir pagando por transportar aire?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            La diferencia entre el modelo tradicional y nuestra innovación marca la rentabilidad de su operación.
          </p>
        </div>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          
          {/* Card: Tradicional */}
          <div className="flex flex-col rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 xl:p-10">
            <h3 className="text-lg font-semibold leading-8 text-slate-500">La manera tradicional / Competencia</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Pacas estándar con baja densidad y volumen ineficiente.
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600 xl:mt-10">
               {[
                'Camiones llenos de "aire" (bajo peso)',
                'Alto coste de flete por tonelada',
                'Ocupa excesivo espacio de almacén',
                'Mayor exposición a humedad y roturas',
                'Dificultad en manejo mecanizado'
              ].map((feature) => (
                <li key={feature} className="flex gap-x-3 opacity-75">
                  <X className="h-6 w-5 flex-none text-red-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Card: F&G */}
          <div className="flex flex-col rounded-3xl bg-slate-900 p-8 ring-1 ring-slate-900 shadow-xl xl:p-10 transform lg:-translate-y-4 lg:scale-105 transition-transform">
            <h3 className="text-lg font-semibold leading-8 text-primary">El método Fernando y Gonzalo</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Tecnología de ultra-compactación para máxima eficiencia.
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-white xl:mt-10">
              {[
                'Doble carga de peso por viaje',
                'Flete optimizado al máximo',
                'Paletizado compacto y seguro',
                'Sellado protegido contra elementos',
                'Lista para exportación inmediata'
              ].map((feature) => (
                <li key={feature} className="flex gap-x-3 font-medium">
                  <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
                <span className="inline-block rounded px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20">
                    Recomendado para Exportación
                </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
