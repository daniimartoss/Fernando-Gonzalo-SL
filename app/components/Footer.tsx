import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <span className="text-lg font-bold text-white uppercase tracking-wider">Fernando y Gonzalo <span className="text-primary">S.L.</span></span>
                    <p className="mt-2 text-sm">Innovación y eficiencia en logística agrícola.</p>
                </div>
                
                <div className="flex gap-x-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-xs">
                <p>&copy; {currentYear} Fernando y Gonzalo S.L. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
