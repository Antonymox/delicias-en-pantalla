
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FoodGallery = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const categorias = ['Todos', 'Entradas', 'Platos Principales', 'Postres', 'Bebidas'];

  const imagenes = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
      titulo: "Ceviche Gourmet",
      categoria: "Entradas"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop",
      titulo: "Filete Premium",
      categoria: "Platos Principales"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
      titulo: "Cócteles Artesanales",
      categoria: "Bebidas"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=400&fit=crop",
      titulo: "Tiramisú Tradicional",
      categoria: "Postres"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop",
      titulo: "Salmón Mediterráneo",
      categoria: "Platos Principales"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=400&fit=crop",
      titulo: "Risotto Cremoso",
      categoria: "Platos Principales"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop",
      titulo: "Pasta Artesanal",
      categoria: "Platos Principales"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop",
      titulo: "Ensalada Gourmet",
      categoria: "Entradas"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
      titulo: "Chocolate Decadente",
      categoria: "Postres"
    }
  ];

  const imagenesFiltradas = filtroActivo === 'Todos' 
    ? imagenes 
    : imagenes.filter(img => img.categoria === filtroActivo);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
            Galería Gastronómica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Una muestra visual de la excelencia culinaria que te espera en cada visita
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={filtroActivo === categoria ? "default" : "outline"}
              onClick={() => setFiltroActivo(categoria)}
              className={`
                ${filtroActivo === categoria 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-primary/10 border-primary/20'
                }
                transition-all duration-300
              `}
            >
              {categoria}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {imagenesFiltradas.map((imagen, index) => (
            <Card 
              key={imagen.id} 
              className="group overflow-hidden food-card-hover animate-scale-in border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={imagen.url} 
                  alt={imagen.titulo}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-semibold mb-2">{imagen.titulo}</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      {imagen.categoria}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {imagenesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No se encontraron imágenes en esta categoría
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodGallery;
