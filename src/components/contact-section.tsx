"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      value: "iletisim@aygittechnologies.com",
      description: "7/24 e-posta desteği"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "0 (232) 226 19 83",
      description: "Pazartesi - Cuma 09:00-18:00"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "İzmir, Türkiye",
      description: "Merkez ofisimiz"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "09:00 - 18:00",
      description: "Pazartesi - Cuma"
    }
  ];
  // info bölümü
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            İletişime Geçin
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projeleriniz hakkında konuşmak için bizimle iletişime geçin. 
            Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* İletişim */}
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Mesaj Gönderin</CardTitle>
              <CardDescription>
                Projeniz hakkında detayları paylaşın, size en kısa sürede dönüş yapalım.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad
                  </label>
                  <Input placeholder="Adınız ve soyadınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta
                  </label>
                  <Input type="email" placeholder="ornek@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <Input placeholder="+90 (5XX) XXX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Konu
                </label>
                <Input placeholder="Proje türü veya konu" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mesaj
                </label>
                <Textarea 
                  placeholder="Projeniz hakkında detayları buraya yazabilirsiniz..."
                  rows={5}
                />
              </div>
              <Button className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Mesaj Gönder
              </Button>
            </CardContent>
          </Card>

          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Ek Bilgiler */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="font-semibold text-foreground mb-3">
                  Neden Aygıt ile Çalışmalısınız?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Ücretsiz proje danışmanlığı
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Hızlı teslimat süreleri
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Sürekli teknik destek
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Garantili kalite
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
