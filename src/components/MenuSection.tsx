
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MenuSection = () => {
  const platillos = [
    {
      id: 1,
      nombre: "Salmón a la Parrilla",
      descripcion: "Salmón fresco a la parrilla con hierbas mediterráneas, acompañado de vegetales de temporada y salsa de limón.",
      precio: "$280",
      categoria: "Pescados",
      imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      destacado: true
    },
    {
      id: 2,
      nombre: "Filete de Res Premium",
      descripcion: "Corte premium de res, cocido a la perfección, con puré de papas trufado y reducción de vino tinto.",
      precio: "$450",
      categoria: "Carnes",
      imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      destacado: true
    },
    {
      id: 3,
      nombre: "Risotto de Hongos",
      descripcion: "Cremoso risotto italiano con mezcla de hongos silvestres, parmesano añejo y aceite de trufa.",
      precio: "$220",
      categoria: "Vegetariano",
      imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      nombre: "Pasta Mare e Monti",
      descripcion: "Linguini fresco con camarones, scallops, hongos porcini y tomates cherry en salsa de vino blanco.",
      precio: "$320",
      categoria: "Pastas",
      imagen: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      nombre: "Pato Confitado",
      descripcion: "Pata de pato confitada lentamente, con salsa de naranja y especias, acompañada de pure de camote.",
      precio: "$380",
      categoria: "Aves",
      imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      nombre: "Ceviche Peruano",
      descripcion: "Pescado fresco marinado en limón, con cebolla morada, ají amarillo y camote, al estilo tradicional.",
      precio: "$180",
      categoria: "Entradas",
      imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nuestro Menú
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre una selección exquisita de platillos preparados con ingredientes frescos y técnicas culinarias de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platillos.map((platillo, index) => (
            <Card 
              key={platillo.id} 
              className="food-card-hover animate-slide-up border-primary/10 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={platillo.imagen} 
                  alt={platillo.nombre}
                  className="w-full h-48 object-cover"
                />
                {platillo.destacado && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Destacado
                  </Badge>
                )}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {platillo.categoria}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {platillo.nombre}
                  </CardTitle>
                  <span className="text-2xl font-bold text-primary">
                    {platillo.precio}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {platillo.descripcion}
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Ordenar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
