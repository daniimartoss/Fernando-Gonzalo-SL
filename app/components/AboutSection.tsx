import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-6">
              Raíces en el campo, visión en el futuro.
            </h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                <strong>Fernando y Gonzalo S.L.</strong> nace de la unión entre la experiencia de décadas en el sector agrícola de Fernando y la visión innovadora de Gonzalo. 
              </p>
              <p>
                Ubicados en <strong>La Luisiana, Sevilla</strong>, entendimos que el problema no era la calidad de la paja, sino cómo se movía por el mundo. Decidimos transformar la logística del sector invirtiendo en maquinaria industrial capaz de crear bloques de densidad superior.
              </p>
              <p>
                No solo vendemos producto; vendemos una solución logística que hace viable llevar la calidad de nuestros campos a cualquier rincón del planeta.
              </p>
            </div>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-slate-200 shadow-lg">
             {/* Placeholder for Founder/Team Image */}
             <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <span className="text-sm">{/* Foto de Fernando y Gonzalo o Instalaciones */}</span>
                <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
             </div>
             {/* 
             Example if image existed:
             <Image src="/team.jpg" alt="Equipo Fernando y Gonzalo" fill className="object-cover" /> 
             */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
