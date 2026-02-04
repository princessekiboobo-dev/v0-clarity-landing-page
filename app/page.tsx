'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Zap, Download, TrendingUp, Users, Gauge, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground font-space-grotesk">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl opacity-100 shadow-lg" />
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white relative z-10 font-bold">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="700" fill="white">
                  C
                </text>
              </svg>
            </div>
            <span className="font-700 text-lg tracking-tight">Clarity</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex gap-10 text-sm font-500 text-foreground/70">
              <a href="#product" className="hover:text-primary transition-colors">
                Product
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Docs
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Pricing
              </a>
            </nav>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-600 rounded-lg h-10 px-5">
              Sign In
            </Button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/20 px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-500 hover:text-primary transition-colors">
              Product
            </a>
            <a href="#" className="text-sm font-500 hover:text-primary transition-colors">
              Docs
            </a>
            <a href="#" className="text-sm font-500 hover:text-primary transition-colors">
              Pricing
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 px-6">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/25 to-primary/15 rounded-full blur-3xl -z-10" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-600 text-primary">Trusted by 5,000+ teams</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-800 leading-tight mb-8 text-balance tracking-tight">
              Simplify how your
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                data stays clean
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-10 font-400 leading-relaxed">
              Automated data integrity in one click. No more manual cleaning, no more schema conflicts. Just production-ready data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-700 h-12 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-primary/30 hover:border-primary/50 bg-background hover:bg-primary/5 text-foreground font-700 h-12 px-8 rounded-lg transition-all"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-800 text-primary mb-2">250K+</p>
                <p className="text-xs md:text-sm text-foreground/60 font-500">Rows/Sec</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-800 text-primary mb-2">99.9%</p>
                <p className="text-xs md:text-sm text-foreground/60 font-500">Uptime SLA</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-800 text-primary mb-2">4.8/5</p>
                <p className="text-xs md:text-sm text-foreground/60 font-500">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="mx-auto max-w-6xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative bg-card border border-border/40 rounded-2xl overflow-hidden shadow-2xl">
              {/* Dashboard Header */}
              <div className="border-b border-border/20 px-8 py-6 flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                </div>
                <p className="text-sm font-600 text-foreground/60">Clarity Dashboard</p>
                <div className="w-12" />
              </div>

              {/* Dashboard Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-700 text-foreground/70 uppercase tracking-wider">Records Scanned</p>
                      <Gauge className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-3xl font-800 text-foreground">2.5M</p>
                  </div>

                  <div className="bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl p-6 border border-accent/20">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-700 text-foreground/70 uppercase tracking-wider">Issues Fixed</p>
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-3xl font-800 text-foreground">18.4K</p>
                  </div>

                  <div className="bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-xl p-6 border border-secondary/20">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-700 text-foreground/70 uppercase tracking-wider">Accuracy</p>
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-3xl font-800 text-foreground">99.7%</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border/40 overflow-hidden bg-muted/20">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/40 border-b border-border/20">
                      <tr>
                        <th className="text-left px-6 py-3 font-700 text-foreground/70 text-xs uppercase tracking-wide">Source</th>
                        <th className="text-left px-6 py-3 font-700 text-foreground/70 text-xs uppercase tracking-wide">Status</th>
                        <th className="text-left px-6 py-3 font-700 text-foreground/70 text-xs uppercase tracking-wide">Last Run</th>
                        <th className="text-left px-6 py-3 font-700 text-foreground/70 text-xs uppercase tracking-wide">Quality</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 font-600 text-foreground">PostgreSQL DB</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/20 text-green-600 text-xs font-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-foreground/60 text-sm">2 mins ago</td>
                        <td className="px-6 py-4 font-700 text-primary">99.2%</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 font-600 text-foreground">S3 Bucket</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/20 text-amber-600 text-xs font-600">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            Syncing
                          </span>
                        </td>
                        <td className="px-6 py-4 text-foreground/60 text-sm">5 mins ago</td>
                        <td className="px-6 py-4 font-700 text-primary">97.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6" id="product">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-800 mb-6 text-balance tracking-tight">
              Everything you need for data integrity
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-500">
              Scan, resolve, and export clean data in seconds. No configuration needed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scan Card */}
            <div className="group bg-card border border-border/40 rounded-xl p-8 hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-800 mb-4 tracking-tight">Scan</h3>
              <p className="text-foreground/60 leading-relaxed font-500">
                Detect anomalies across millions of rows in milliseconds. Real-time insights into data quality issues.
              </p>
            </div>

            {/* Resolve Card - Featured */}
            <div className="md:col-span-1 group relative bg-gradient-to-br from-primary via-accent to-secondary rounded-xl p-8 shadow-2xl md:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-8">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-800 mb-4 text-white tracking-tight">Resolve</h3>
                <p className="leading-relaxed font-500 text-white/90">
                  Auto-standardize dates, nulls, and schema drifts. Fix issues automatically without manual intervention.
                </p>
              </div>
            </div>

            {/* Export Card */}
            <div className="group bg-card border border-border/40 rounded-xl p-8 hover:shadow-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-800 mb-4 tracking-tight">Export</h3>
              <p className="text-foreground/60 leading-relaxed font-500">
                Production-ready CSV and JSON, instantly. Deploy clean data directly to your warehouse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 -z-10" />
        <div className="absolute -top-20 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50 -z-10" />
        
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-800 mb-8 text-balance tracking-tight">
            Ship clean data faster
          </h2>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto font-500 leading-relaxed">
            Join thousands of teams automating their data integrity. Get started in minutes, not weeks.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-700 h-12 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-16 px-6 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div>
              <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider mb-6">Product</p>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Features
                </a>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Pricing
                </a>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  API
                </a>
              </nav>
            </div>
            <div>
              <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider mb-6">Resources</p>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Docs
                </a>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Blog
                </a>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Guides
                </a>
              </nav>
            </div>
            <div>
              <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider mb-6">Legal</p>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Privacy
                </a>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Terms
                </a>
              </nav>
            </div>
            <div className="col-span-2 md:col-span-2">
              <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider mb-6">Company</p>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Contact
                </a>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors font-500">
                  Status
                </a>
              </nav>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-lg shadow-lg" />
                <span className="relative font-800 text-sm text-white">C</span>
              </div>
              <span className="font-700 text-sm">Clarity</span>
            </div>
            <p className="text-sm text-foreground/60 font-500">© 2026 Clarity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
