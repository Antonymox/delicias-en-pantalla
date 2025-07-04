
import Header from '@/components/Header';
import MenuSection from '@/components/MenuSection';
import PromotionsSection from '@/components/PromotionsSection';
import FoodGallery from '@/components/FoodGallery';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChefHat, Utensils, Bell } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <div className="mb-8">
            <ChefHat className="h-16 w-16 mx-auto mb-4 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bella Vista
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Donde cada platillo cuenta una historia y cada sabor despierta emociones únicas. 
            Bienvenido a una experiencia gastronómica extraordinaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('menu')}
            >
              Ver Nuestro Menú
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('promociones')}
            >
              Promociones Especiales
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-[float_6s_ease-in-out_infinite] hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <Utensils className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 animate-[float_6s_ease-in-out_infinite_2s] hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <Bell className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* Sections */}
      <MenuSection />
      <PromotionsSection />
      <FoodGallery />
      <Footer />
    </div>
  );
};

export default Index;
