'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowUpRight,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Database,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  BarChart3,
  Target,
  Users,
  Zap,
  Activity,
  FileText,
  Shield
} from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background font-space-grotesk">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-border/20 bg-card/50 backdrop-blur-xl transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="border-b border-border/20 px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-lg shadow-lg" />
                <span className="relative font-800 text-white text-sm">C</span>
              </div>
              <span className="font-700 text-lg tracking-tight">Clarity</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-600 text-sm transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              Overview
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 font-600 text-sm transition-colors"
            >
              <Database className="w-5 h-5" />
              Data Sources
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 font-600 text-sm transition-colors"
            >
              <AlertCircle className="w-5 h-5" />
              Issues
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 font-600 text-sm transition-colors"
            >
              <Activity className="w-5 h-5" />
              Activity Log
            </a>
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t border-border/20 px-4 py-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 font-600 text-sm transition-colors"
            >
              <Settings className="w-5 h-5" />
              Settings
            </a>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 font-600 text-sm transition-colors">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-border/20 bg-background/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-800 tracking-tight">Dashboard</h1>
                <p className="text-sm text-foreground/60 font-500">Welcome back to your data integrity hub</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-foreground/60" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-700 text-sm">
                AC
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 md:p-8">
          {/* Top Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Metric Card 1 */}
            <div className="bg-card border border-border/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider">Total Records</p>
                <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Database className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-800 mb-2">24.5M</p>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-xs font-600 text-green-600">+12% from last week</span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-card border border-border/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider">Data Quality</p>
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
              </div>
              <p className="text-3xl font-800 mb-2">98.7%</p>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-xs font-600 text-green-600">+2.1% this month</span>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-card border border-border/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider">Issues Resolved</p>
                <div className="w-10 h-10 bg-secondary/15 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
              </div>
              <p className="text-3xl font-800 mb-2">142K</p>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-xs font-600 text-green-600">Automated fixes</span>
              </div>
            </div>

            {/* Metric Card 4 */}
            <div className="bg-card border border-border/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider">System Health</p>
                <div className="w-10 h-10 bg-green-100/20 rounded-lg flex items-center justify-center group-hover:bg-green-100/30 transition-colors">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-3xl font-800 mb-2">Optimal</p>
              <p className="text-xs font-600 text-green-600">All systems operational</p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-card border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="border-b border-border/20 px-6 py-4 bg-muted/30">
                <h2 className="text-lg font-800 tracking-tight">Recent Data Sources</h2>
              </div>
              <div className="divide-y divide-border/20">
                {[
                  { name: 'PostgreSQL Production', status: 'active', quality: 99.2, time: '2 mins ago' },
                  { name: 'S3 Data Lake', status: 'syncing', quality: 97.8, time: '5 mins ago' },
                  { name: 'Snowflake DW', status: 'active', quality: 98.5, time: '12 mins ago' },
                ].map((source, idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-muted/20 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-600 text-foreground mb-1">{source.name}</p>
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-600 ${
                              source.status === 'active'
                                ? 'bg-green-100/20 text-green-600'
                                : 'bg-amber-100/20 text-amber-600'
                            }`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${source.status === 'active' ? 'bg-green-500' : 'bg-amber-500'}`} />
                            {source.status.charAt(0).toUpperCase() + source.status.slice(1)}
                          </span>
                          <span className="text-xs text-foreground/50 font-500">{source.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-800 text-primary">{source.quality}%</p>
                        <p className="text-xs text-foreground/60 font-500">Quality Score</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              {/* Issues Card */}
              <div className="bg-card border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="border-b border-border/20 px-6 py-4 bg-muted/30">
                  <h3 className="text-lg font-800 tracking-tight">Active Issues</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-4xl font-800 text-primary mb-2">18</p>
                    <p className="text-sm text-foreground/60 font-500">Requiring attention</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-700 rounded-lg h-10">
                    View Issues
                  </Button>
                </div>
              </div>

              {/* Upcoming Scans */}
              <div className="bg-card border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="border-b border-border/20 px-6 py-4 bg-muted/30">
                  <h3 className="text-lg font-800 tracking-tight">Scheduled Scans</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-foreground/60" />
                        <p className="text-sm font-600">Daily (2:00 AM UTC)</p>
                      </div>
                      <Button size="sm" variant="outline" className="h-7 px-3 text-xs font-600 bg-transparent">
                        Edit
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-foreground/60" />
                        <p className="text-sm font-600">Hourly Full Scan</p>
                      </div>
                      <Button size="sm" variant="outline" className="h-7 px-3 text-xs font-600 bg-transparent">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Chart Section */}
          <div className="mt-8 bg-card border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="border-b border-border/20 px-6 py-4 bg-muted/30">
              <h2 className="text-lg font-800 tracking-tight">Performance Trends</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider mb-2">Avg Records/Sec</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-800">245K</p>
                    <span className="text-green-600 text-sm font-600">+5.2%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider mb-2">Error Rate</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-800">0.12%</p>
                    <span className="text-green-600 text-sm font-600">-0.05%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-700 text-foreground/60 uppercase tracking-wider mb-2">Uptime</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-800">99.99%</p>
                    <span className="text-green-600 text-sm font-600">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
