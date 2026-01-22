import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contacto" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Optimice su logística hoy mismo
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Contacte con nosotros para pedidos mayoristas y consultas de exportación.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="relative">
                <div className="rounded-2xl bg-white/5 p-10 ring-1 ring-white/10">
                    <h3 className="text-xl font-semibold text-white mb-8">Información de Contacto</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-x-4">
                            <div className="flex-none rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Email</p>
                                <p className="text-base text-slate-300">{`{ email@fernandoygonzalo.com }`}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-4">
                             <div className="flex-none rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Teléfono</p>
                                <p className="text-base text-slate-300">+34 {`{ Teléfono aquí }`}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-4">
                             <div className="flex-none rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Ubicación</p>
                                <p className="text-base text-slate-300">La Luisiana, Sevilla, España</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form UI */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">Nombre</label>
                        <div className="mt-2">
                            <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 px-3" placeholder="Su nombre" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium leading-6 text-slate-900">Empresa <span className="text-slate-400 font-normal">(Opcional)</span></label>
                        <div className="mt-2">
                            <input type="text" name="company" id="company" className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 px-3" placeholder="Nombre de su empresa" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">Email</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 px-3" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">Teléfono</label>
                            <div className="mt-2">
                                <input type="tel" name="phone" id="phone" className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 px-3" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">Mensaje</label>
                        <div className="mt-2">
                            <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 px-3"></textarea>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                            Enviar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
