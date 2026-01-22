import React from 'react';
import Link from 'next/link';
import { ArrowRight, Truck, Box, TrendingDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
      {/* Background Image / Pattern Placeholder */}
      <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 bg-[radial-gradient(#d4a017_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/40 to-slate-900/90"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20">
                Innovación Logística en La Luisiana, Sevilla
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Transporta el Doble.<br />
            <span className="text-primary">Paga la Mitad.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Revolucionamos el transporte de paja con bloques de ultra-alta densidad. 
            Menos volumen, más peso por carga, máxima rentabilidad para su negocio.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#comparativa"
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors flex items-center gap-2"
            >
              Ver cómo funciona <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contacto" className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors">
              Solicitar presupuesto <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        
        {/* Feature grid overlay */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Eficiencia Flete',
                description: 'Optimice cada centímetro de su camión o contenedor.',
                icon: Truck,
              },
              {
                name: 'Alta Densidad',
                description: 'Compactación industrial superior a la paca tradicional.',
                icon: Box,
              },
              {
                name: 'Ahorro Costes',
                description: 'Reduzca drásticamente el coste logístico unitario.',
                icon: TrendingDown,
              },
            ].map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white/5 p-6 rounded-lg backdrop-blur-sm ring-1 ring-white/10">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Hero;
