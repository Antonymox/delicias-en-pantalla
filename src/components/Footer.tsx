
import { Utensils, Bell, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Utensils className="h-8 w-8" />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Bella Vista
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Experiencia gastronómica excepcional en el corazón de la ciudad. 
              Descubre sabores únicos en un ambiente elegante y acogedor.
            </p>
            <div className="flex space-x-4">
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <ChefHat className="h-5 w-5" />
              </div>
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <Bell className="h-5 w-5" />
              </div>
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <Utensils className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Horarios
            </h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <p className="font-medium">Lunes - Jueves</p>
                <p>12:00 PM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Viernes - Sábado</p>
                <p>12:00 PM - 11:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Domingo</p>
                <p>11:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contacto
            </h3>
            <div className="space-y-3 text-primary-foreground/80">
              <p>📍 Av. Reforma 123, Centro</p>
              <p>📞 (55) 1234-5678</p>
              <p>✉️ reservas@bellavista.com</p>
              <p>🌐 www.bellavista.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Reservaciones
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Reserva tu mesa y vive una experiencia gastronómica inolvidable
            </p>
            <Button 
              asChild
              variant="secondary" 
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/reservaciones">Hacer Reservación</Link>
            </Button>
            <p className="text-sm text-primary-foreground/60 mt-2">
              También disponible por WhatsApp
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Bella Vista Restaurante. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
