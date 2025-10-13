"use client"

import { useEffect, useState, Suspense, lazy } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconExternalLink, IconArrowLeft, IconRefresh, IconEye, IconCode as _IconCode, IconPalette, IconEdit, IconX, IconMaximize, IconMinimize } from "@tabler/icons-react"
import Link from "next/link"

// Tema CSS'ini import ediyoruz
import "./app3-theme.css"

// Tema context ve editör bileşenlerini lazy loading ile import ediyoruz
import { ThemeProvider } from "../../../../../components/app3-theme/theme-context"

// Lazy loading ile bileşenleri import ediyoruz
const _Navigation = lazy(() => import("../../../../../components/app3-theme/navigation").then(module => ({ default: module.Navigation })))
const NavigationFrame = lazy(() => import("../../../../../components/app3-theme/navigation-frame").then(module => ({ default: module.NavigationFrame })))
const HeroSection = lazy(() => import("../../../../../components/app3-theme/hero-section").then(module => ({ default: module.HeroSection })))
const ServicesSection = lazy(() => import("../../../../../components/app3-theme/services-section").then(module => ({ default: module.ServicesSection })))
const FeaturesSection = lazy(() => import("../../../../../components/app3-theme/features-section").then(module => ({ default: module.FeaturesSection })))
const ContactSection = lazy(() => import("../../../../../components/app3-theme/contact-section").then(module => ({ default: module.ContactSection })))
const Footer = lazy(() => import("../../../../../components/app3-theme/footer").then(module => ({ default: module.Footer })))
const ThemeEditor = lazy(() => import("../../../../../components/app3-theme/theme-editor").then(module => ({ default: module.ThemeEditor })))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Tema yükleniyor...</p>
    </div>
  </div>
)

export default function ThemeApp3Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, _setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'preview' | 'info' | 'editor'>('preview')
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const openInNewTab = () => {
    // Tema projesini ayrı sekmede aç
    window.open('/dashboard/themes/app3/myy-app', '_blank')
  }

  const refreshPage = () => {
    window.location.reload()
  }

  const toggleEditor = () => {
    setIsEditorOpen(!isEditorOpen)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Tema yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Hata: {error}</p>
          <Button onClick={refreshPage}>Tekrar Dene</Button>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-background ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
        {/* Header */}
        <div className="border-b bg-card relative z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    <IconArrowLeft className="h-4 w-4 mr-2" />
                    Dashboard&apos;a Dön
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold">Tema-3 (App3)</h1>
                  <p className="text-muted-foreground">Web sitesi teması önizlemesi ve düzenleme</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={toggleEditor} 
                  variant={isEditorOpen ? "default" : "outline"}
                  className="transition-all duration-300"
                >
                  <IconEdit className="h-4 w-4 mr-2" />
                  {isEditorOpen ? 'Editörü Kapat' : 'Editörü Aç'}
                </Button>
                <Button onClick={toggleFullscreen} variant="outline">
                  {isFullscreen ? <IconMinimize className="h-4 w-4" /> : <IconMaximize className="h-4 w-4" />}
                </Button>
                <Button onClick={openInNewTab} variant="outline">
                  <IconExternalLink className="h-4 w-4 mr-2" />
                  Ayrı Sekmede Aç
                </Button>
                <Button onClick={refreshPage} variant="outline">
                  <IconRefresh className="h-4 w-4 mr-2" />
                  Yenile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation - Moved to top */}
        <div className="border-b bg-card relative z-40">
          <div className="container mx-auto px-4">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('preview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'preview'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <IconEye className="h-4 w-4 inline mr-2" />
                Önizleme
              </button>
              <button
                onClick={() => setActiveTab('info')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'info'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <IconPalette className="h-4 w-4 inline mr-2" />
                Tema Bilgileri
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex h-[calc(100vh-120px)] relative">
          {/* Theme Editor Sidebar - Fixed Left Position */}
          {isEditorOpen && (
            <div className="w-80 bg-card border-r overflow-y-auto transition-all duration-500 ease-in-out flex-shrink-0 fixed left-0 top-[120px] h-[calc(100vh-120px)] z-[9999] shadow-2xl">
              <div className="p-4 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <IconPalette className="h-5 w-5 text-primary" />
                    Tema Editörü
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleEditor}
                    className="hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <IconX className="h-4 w-4" />
                  </Button>
                </div>
                <div className="h-[calc(100%-4rem)] overflow-y-auto">
                  <Suspense fallback={<LoadingSpinner />}>
                    <ThemeEditor />
                  </Suspense>
                </div>
              </div>
            </div>
          )}

          {/* Preview Area */}
          <div className={`transition-all duration-500 ease-in-out ${isEditorOpen ? 'ml-80' : 'ml-0'}`} style={{ width: isEditorOpen ? 'calc(100% - 320px)' : '100%' }}>
            {activeTab === 'preview' ? (
              <div className="bg-gray-100 h-full overflow-auto relative p-6">
                {/* Preview Header Indicator */}
                <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b z-30 px-4 py-2 text-sm text-muted-foreground mb-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <IconEye className="h-4 w-4" />
                    <span>Önizleme Modu - Gerçek zamanlı değişiklikler</span>
                    {isEditorOpen && (
                      <span className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Editör Aktif
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Website Frame Container */}
                <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200 overflow-hidden mx-auto relative" style={{ maxWidth: '1200px', minHeight: '600px' }}>
                  {/* Browser Frame Header */}
                  <div className="bg-gray-200 px-4 py-2 flex items-center gap-2 border-b">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center text-sm text-gray-600 font-medium">
                      Aygıt - Tema-3 Önizleme
                    </div>
                  </div>
                  
                  {/* Website Content Container - Relative positioning to contain fixed elements */}
                  <div className="theme-app3 relative overflow-auto" style={{ height: 'calc(100% - 40px)' }}>
                    <Suspense fallback={<LoadingSpinner />}>
                      <NavigationFrame />
                      <HeroSection />
                      <ServicesSection />
                      <FeaturesSection />
                      <ContactSection />
                      <Footer />
                    </Suspense>
                  </div>
                </div>
              </div>
            ) : activeTab === 'info' ? (
              <div className="container mx-auto px-4 py-8 h-full overflow-auto">
                <div className="space-y-6">
                  {/* Theme Info */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tema Bilgileri</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <span className="font-medium">Proje Adı:</span>
                            <p className="text-muted-foreground">myy-app</p>
                          </div>
                          <div>
                            <span className="font-medium">Framework:</span>
                            <p className="text-muted-foreground">Next.js 15</p>
                          </div>
                          <div>
                            <span className="font-medium">Stil:</span>
                            <p className="text-muted-foreground">Tailwind CSS</p>
                          </div>
                          <div>
                            <span className="font-medium">Durum:</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Aktif
                            </span>
                          </div>
                          <div>
                            <span className="font-medium">Son Güncelleme:</span>
                            <p className="text-muted-foreground">Bugün</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Bileşen Listesi</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">Navigation</span>
                            <span className="text-xs text-muted-foreground">Aktif</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">Hero Section</span>
                            <span className="text-xs text-muted-foreground">Aktif</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">Services Section</span>
                            <span className="text-xs text-muted-foreground">Aktif</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">Features Section</span>
                            <span className="text-xs text-muted-foreground">Aktif</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">Contact Section</span>
                            <span className="text-xs text-muted-foreground">Aktif</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">Footer</span>
                            <span className="text-xs text-muted-foreground">Aktif</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Hızlı Erişim</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 md:grid-cols-3">
                        <Button
                          onClick={openInNewTab}
                          variant="outline"
                          className="justify-start"
                        >
                          <IconExternalLink className="h-4 w-4 mr-2" />
                          Tema Projesini Aç
                        </Button>
                        <Button
                          onClick={toggleEditor}
                          variant="outline"
                          className="justify-start"
                        >
                          <IconPalette className="h-4 w-4 mr-2" />
                          Tema Editörü
                        </Button>
                        <Button
                          onClick={refreshPage}
                          variant="outline"
                          className="justify-start"
                        >
                          <IconRefresh className="h-4 w-4 mr-2" />
                          Sayfayı Yenile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : null}
          </div>
        </div>


      </div>
    </ThemeProvider>
  )
}
