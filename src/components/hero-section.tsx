"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Zap, Target } from "lucide-react";
import { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    //  Unicorn Studio Yüklemek?
    
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Animasyonlu gradyan arka plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 animate-pulse" />
        
        {/* Uçuşan şeyleri */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-accent/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.5s' }} />
        
        {/* Gradyan Patterni */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Uçuşan geometrik şeyler */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto animate-fade-in">
      
        <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-slide-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Yenilikçi Teknoloji Çözümleri</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
          Geleceği <span className="text-gradient">Şekillendiren</span> Teknoloji
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Aygıt olarak, yenilikçi çözümlerle işinizi büyütmenize yardımcı oluyoruz. 
          Modern teknolojiler ve uzman ekibimizle yanınızdayız.
        </p>
        
        {/* veriler */}
        <div className="flex flex-wrap gap-8 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Teknik Destek</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="btn-primary text-lg px-8 py-3 hover-lift">
            <Zap className="mr-2 h-5 w-5" />
            Hizmetlerimizi Keşfedin
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 hover-lift">
            <Target className="mr-2 h-5 w-5" />
            Bizimle İletişime Geçin
          </Button>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
}
