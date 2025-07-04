
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Utensils } from 'lucide-react';

const PromotionsSection = () => {
  const promociones = [
    {
      id: 1,
      titulo: "Menú Degustación para 2",
      descripcion: "Experiencia gastronómica completa con entrada, plato fuerte, postre y maridaje de vinos para dos personas.",
      precioOriginal: "$1,200",
      precioPromo: "$899",
      descuento: "25%",
      validez: "Válido hasta fin de mes",
      incluye: ["Entrada", "Plato Principal", "Postre", "Maridaje"],
      imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      icono: Users
    },
    {
      id: 2,
      titulo: "Happy Hour Ejecutivo",
      descripcion: "De lunes a viernes de 5:00 PM a 7:00 PM. Bebidas selectas y aperitivos gourmet a precios especiales.",
      precioOriginal: "$180",
      precioPromo: "$120",
      descuento: "33%",
      validez: "Lunes a Viernes 5-7 PM",
      incluye: ["Cóctel Premium", "Aperitivos", "Ambiente Ejecutivo"],
      imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=300&fit=crop",
      icono: Clock
    },
    {
      id: 3,
      titulo: "Domingo Familiar",
      descripcion: "Buffet familiar con más de 20 platillos diferentes, postres ilimitados y área de juegos para niños.",
      precioOriginal: "$320",
      precioPromo: "$250",
      descuento: "22%",
      validez: "Solo Domingos",
      incluye: ["Buffet Ilimitado", "Postres", "Área Infantil", "Entretenimiento"],
      imagen: "https://images.unsplash.com/photo-1529543544282-ea669407fda3?w=500&h=300&fit=crop",
      icono: Utensils
    }
  ];

  return (
    <section id="promociones" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
            Promociones Especiales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y vive momentos únicos en Bella Vista
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {promociones.map((promo, index) => {
            const IconComponent = promo.icono;
            return (
              <Card 
                key={promo.id} 
                className="food-card-hover animate-scale-in border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <img 
                    src={promo.imagen} 
                    alt={promo.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-destructive text-destructive-foreground font-bold text-lg px-3 py-1">
                      -{promo.descuento} OFF
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {promo.titulo}
                  </CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        {promo.precioPromo}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {promo.precioOriginal}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {promo.descripcion}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Incluye:</h4>
                    <div className="flex flex-wrap gap-2">
                      {promo.incluye.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {promo.validez}
                    </Badge>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Reservar Promoción
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
