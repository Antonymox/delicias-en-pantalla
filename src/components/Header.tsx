
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
              Bella Vista
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('promociones')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Promociones
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Galería
            </button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/reservaciones">Reservar Mesa</Link>
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-foreground hover:text-primary transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-left text-foreground hover:text-primary transition-colors">
                Menú
              </button>
              <button onClick={() => scrollToSection('promociones')} className="text-left text-foreground hover:text-primary transition-colors">
                Promociones
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-left text-foreground hover:text-primary transition-colors">
                Galería
              </button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                <Link to="/reservaciones">Reservar Mesa</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
