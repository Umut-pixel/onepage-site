import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Database, 
  BarChart3,
  Zap,
  Users
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Geliştirme",
      description: "Modern ve responsive web uygulamaları geliştiriyoruz. React, Next.js ve diğer cutting-edge teknolojileri kullanıyoruz.",
      features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Performans"]
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama",
      description: "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz.",
      features: ["Native Geliştirme", "Cross-Platform", "App Store Optimizasyonu"]
    },
    {
      icon: Cloud,
      title: "Cloud Çözümleri",
      description: "AWS, Azure ve Google Cloud platformlarında ölçeklenebilir cloud çözümleri sunuyoruz.",
      features: ["AWS/Azure/GCP", "Serverless", "Auto Scaling"]
    },
    {
      icon: Shield,
      title: "Siber Güvenlik",
      description: "Uygulamalarınızı ve verilerinizi korumak için kapsamlı güvenlik çözümleri sağlıyoruz.",
      features: ["Penetrasyon Testi", "Güvenlik Denetimi", "SSL Sertifikaları"]
    },
    {
      icon: Database,
      title: "Veri Yönetimi",
      description: "Büyük veri analizi ve veri tabanı yönetimi konularında uzman çözümler sunuyoruz.",
      features: ["Big Data Analytics", "Database Design", "Data Migration"]
    },
    {
      icon: BarChart3,
      title: "İş Zekası",
      description: "Verilerinizi anlamlı içgörülere dönüştürerek iş kararlarınızı destekliyoruz.",
      features: ["Dashboard Tasarımı", "Raporlama", "KPI Takibi"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teknoloji ihtiyaçlarınız için kapsamlı çözümler sunuyoruz. 
            Her projede mükemmellik hedefliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Projenizi Hayata Geçirelim
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Uzman ekibimizle birlikte projenizi planlayalım ve en uygun 
                teknoloji çözümlerini belirleyelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Ücretsiz Danışmanlık
                </button>
                <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                  Portföyümüzü İnceleyin
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
