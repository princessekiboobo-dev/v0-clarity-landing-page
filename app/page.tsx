'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Zap } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl">Clarity</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="hover:text-muted-foreground transition">
                Product
              </a>
              <a href="#" className="hover:text-muted-foreground transition">
                Docs
              </a>
              <a href="#" className="hover:text-muted-foreground transition">
                Pricing
              </a>
            </nav>
            <Button size="sm" variant="outline">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Social Proof Ticker */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium">Powering 5,000+ data pipelines</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
              Fix your data.
              <br />
              In one click.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
              Automated integrity for the modern data stack. Stop cleaning. Start shipping.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground hover:bg-foreground/5 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity Features Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-end data integrity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your data pipelines clean and running.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scan Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Detect anomalies across millions of rows in milliseconds. Real-time insights into data quality issues.
              </p>
            </div>

            {/* Resolve Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">Resolve</h3>
              <p className="text-muted-foreground leading-relaxed">
                Auto-standardize dates, nulls, and schema drifts. Fix issues automatically without manual intervention.
              </p>
            </div>

            {/* Export Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">Export</h3>
              <p className="text-muted-foreground leading-relaxed">
                Production-ready CSV and JSON, instantly. Deploy clean data directly to your warehouse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Data integrity at scale.
          </h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
            Join thousands of teams shipping clean data faster.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">C</span>
              </div>
              <span className="font-bold">Clarity</span>
            </div>
            <nav className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition">
                Status
              </a>
              <a href="#" className="hover:text-foreground transition">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
