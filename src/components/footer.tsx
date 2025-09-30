import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Hikayemiz", href: "#story" },
    { name: "Hizmetlerimiz", href: "#services" },
    { name: "Portföy", href: "#portfolio" },
    { name: "İletişim", href: "#contact" },
  ];

  const services = [
    { name: "Web Geliştirme", href: "#" },
    { name: "Mobil Uygulama", href: "#" },
    { name: "Cloud Çözümleri", href: "#" },
    { name: "Siber Güvenlik", href: "#" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Şirket Bilgileri */}
          <div className="space-y-4">
            <Image
              src="/aygit_logo.png"
              alt="Aygıt Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground text-sm">
              Teknoloji dünyasında yenilikçi çözümler sunan Aygıt, 
              müşterilerimizin dijital dönüşümüne öncülük ediyor.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Linkler */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">iletisim@aygittechnologies.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">İzmir, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Aygıt. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Kullanım Şartları
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
