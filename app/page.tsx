'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Zap, Download, TrendingUp, Users, Gauge } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Stylish C Logo */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="font-bold text-xl">Clarity</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8 text-sm font-medium">
              <a href="#product" className="hover:text-primary transition">
                Product
              </a>
              <a href="#" className="hover:text-primary transition">
                Docs
              </a>
              <a href="#" className="hover:text-primary transition">
                Pricing
              </a>
            </nav>
            <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary/10 text-primary bg-transparent">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-16 px-6">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/40 to-primary/25 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-full blur-3xl -z-10" />

        <div className="mx-auto max-w-6xl">
          {/* Social Proof Ticker */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/60 backdrop-blur rounded-full border border-primary/20 shadow-sm">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Powering 5,000+ data pipelines</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-balance">
              Simplify how your
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Team gets work done
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance mb-8 font-medium leading-relaxed">
              Automated integrity for the modern data stack. Stop cleaning. Start shipping.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 text-white font-semibold h-12 px-8 text-base"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-primary/30 hover:bg-primary/5 bg-white/50 backdrop-blur text-foreground font-semibold h-12 px-8 text-base"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
              <div>
                <p className="text-3xl md:text-4xl font-black text-primary mb-2">250K+</p>
                <p className="text-sm text-muted-foreground font-medium">Rows/Second</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-primary mb-2">99.9%</p>
                <p className="text-sm text-muted-foreground font-medium">Uptime</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-primary mb-2">4.8/5</p>
                <p className="text-sm text-muted-foreground font-medium">Rating</p>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Card */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur border border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
              {/* Dashboard Header */}
              <div className="border-b border-border px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/30" />
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Clarity Dashboard</p>
                <div className="w-20" />
              </div>

              {/* Dashboard Content */}
              <div className="p-8">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {/* Card 1 */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/10">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-muted-foreground">Records Scanned</p>
                      <Gauge className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">2.5M</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-secondary/10">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-muted-foreground">Issues Fixed</p>
                      <Check className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">18.4K</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/10">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-muted-foreground">Accuracy</p>
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">99.7%</p>
                  </div>
                </div>

                {/* Data Table */}
                <div className="rounded-lg border border-border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50 border-b border-border">
                      <tr>
                        <th className="text-left px-6 py-3 font-semibold text-muted-foreground">Source</th>
                        <th className="text-left px-6 py-3 font-semibold text-muted-foreground">Status</th>
                        <th className="text-left px-6 py-3 font-semibold text-muted-foreground">Last Run</th>
                        <th className="text-left px-6 py-3 font-semibold text-muted-foreground">Quality</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/30 transition">
                        <td className="px-6 py-4 font-medium">PostgreSQL DB</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">2 mins ago</td>
                        <td className="px-6 py-4 font-semibold text-primary">99.2%</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition">
                        <td className="px-6 py-4 font-medium">S3 Bucket</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            Syncing
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">5 mins ago</td>
                        <td className="px-6 py-4 font-semibold text-primary">97.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity Features Section */}
      <section className="py-24 px-6" id="product">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">End-to-end data integrity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Everything you need to keep your data pipelines clean and running.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Scan Card */}
            <div className="bg-white rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-8 shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Scan</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Detect anomalies across millions of rows in milliseconds. Real-time insights into data quality issues.
              </p>
            </div>

            {/* Resolve Card - Featured */}
            <div className="md:col-span-1 bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-2xl text-white md:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-8">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Resolve</h3>
              <p className="leading-relaxed font-medium text-white/90">
                Auto-standardize dates, nulls, and schema drifts. Fix issues automatically without manual intervention.
              </p>
            </div>

            {/* Export Card */}
            <div className="bg-white rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-8 shadow-lg">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Export</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Production-ready CSV and JSON, instantly. Deploy clean data directly to your warehouse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-balance">
            Data integrity at scale.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Join thousands of teams shipping clean data faster.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 text-white font-semibold h-12 px-8 text-base"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6 bg-white/50 backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path
                      d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-bold text-lg">Clarity</span>
            </div>
            <nav className="flex gap-10 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition">
                Status
              </a>
              <a href="#" className="hover:text-primary transition">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
