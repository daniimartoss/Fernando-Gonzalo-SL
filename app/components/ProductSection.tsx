import React from 'react';
import { Ruler, Scale, Package } from 'lucide-react';

const ProductSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Especificaciones Técnicas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            El Bloque de Alta Densidad
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Diseñado para contenedores marítimos y transporte de larga distancia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Scale className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">Peso Optimizado</h3>
                <p className="mt-2 text-slate-600">{`{ Peso por unidad }`} kg</p>
                <p className="text-sm text-slate-500 mt-1">Alta consistencia</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Ruler className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">Dimensiones</h3>
                <p className="mt-2 text-slate-600">{`{ Largo x Ancho x Alto }`}</p>
                <p className="text-sm text-slate-500 mt-1">Adaptado a palet europeo/americano</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                   <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">Presentación</h3>
                <p className="mt-2 text-slate-600">Flejado y Protegido</p>
                <p className="text-sm text-slate-500 mt-1">Listo para carga mecanizada</p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSection;
