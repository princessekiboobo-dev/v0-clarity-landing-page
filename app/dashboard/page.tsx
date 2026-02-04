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
  BarChart3,
  Target,
  Users
} from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            >
              <Menu className="w-5 h-5" />
            </button>
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
              <span className="font-bold text-xl hidden sm:inline">Clarity</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
              A
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-0'
          } transition-all duration-300 border-r border-border bg-white/50 backdrop-blur hidden md:block`}
        >
          <nav className="p-6 space-y-4">
            <a
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold transition"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted text-foreground transition"
            >
              <Database className="w-5 h-5" />
              <span>Sources</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted text-foreground transition"
            >
              <Target className="w-5 h-5" />
              <span>Workflows</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted text-foreground transition"
            >
              <Users className="w-5 h-5" />
              <span>Team</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted text-foreground transition"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>

            <div className="pt-6 border-t border-border mt-6">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-4xl font-black mb-2">Dashboard</h1>
              <p className="text-muted-foreground font-medium">Welcome back! Here's your data integrity overview.</p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Records Processed</h3>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-black text-foreground">24.5M</p>
                <p className="text-sm text-green-600 font-semibold mt-2 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  12% vs last week
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Issues Detected</h3>
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                <p className="text-3xl font-black text-foreground">3,420</p>
                <p className="text-sm text-red-600 font-semibold mt-2 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  5% vs last week
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Auto-Resolved</h3>
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-3xl font-black text-foreground">98.7%</p>
                <p className="text-sm text-green-600 font-semibold mt-2 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  2.3% vs last week
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground">Data Quality</h3>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-black text-foreground">99.2%</p>
                <p className="text-sm text-green-600 font-semibold mt-2 flex items-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  0.8% vs last week
                </p>
              </div>
            </div>

            {/* Active Sources */}
            <div className="bg-white rounded-2xl border border-border p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black">Active Data Sources</h2>
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 text-white font-semibold">
                  Connect Source
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-4 py-4 font-semibold text-muted-foreground">Source Name</th>
                      <th className="text-left px-4 py-4 font-semibold text-muted-foreground">Type</th>
                      <th className="text-left px-4 py-4 font-semibold text-muted-foreground">Status</th>
                      <th className="text-left px-4 py-4 font-semibold text-muted-foreground">Last Scan</th>
                      <th className="text-left px-4 py-4 font-semibold text-muted-foreground">Quality Score</th>
                      <th className="text-left px-4 py-4 font-semibold text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { name: 'Production PostgreSQL', type: 'Database', status: 'Active', lastScan: '2 mins ago', quality: 99.2 },
                      { name: 'S3 Data Lake', type: 'Cloud Storage', status: 'Active', lastScan: '5 mins ago', quality: 97.8 },
                      { name: 'Kafka Stream', type: 'Event Stream', status: 'Active', lastScan: '1 min ago', quality: 98.5 },
                      { name: 'BigQuery Tables', type: 'Data Warehouse', status: 'Syncing', lastScan: '10 mins ago', quality: 96.2 },
                    ].map((source, idx) => (
                      <tr key={idx} className="hover:bg-muted/30 transition">
                        <td className="px-4 py-4 font-semibold text-foreground">{source.name}</td>
                        <td className="px-4 py-4 text-muted-foreground">{source.type}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                            source.status === 'Active'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              source.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'
                            }`} />
                            {source.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {source.lastScan}
                        </td>
                        <td className="px-4 py-4 font-bold text-primary">{source.quality}%</td>
                        <td className="px-4 py-4">
                          <button className="text-primary hover:text-secondary font-semibold transition">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-black mb-6">Recent Issues</h2>
                <div className="space-y-4">
                  {[
                    { type: 'Schema Drift', source: 'PostgreSQL', time: '2 hours ago', severity: 'high' },
                    { type: 'Null Values', source: 'S3 Lake', time: '4 hours ago', severity: 'medium' },
                    { type: 'Duplicate Records', source: 'Kafka', time: '6 hours ago', severity: 'medium' },
                  ].map((issue, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition">
                      <div className="flex items-center gap-4">
                        <AlertCircle className={`w-5 h-5 ${
                          issue.severity === 'high' ? 'text-secondary' : 'text-amber-500'
                        }`} />
                        <div>
                          <p className="font-semibold text-foreground">{issue.type}</p>
                          <p className="text-sm text-muted-foreground">{issue.source}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{issue.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-black mb-6">Processing Stats</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-foreground">Hourly Processing</p>
                      <p className="text-2xl font-black text-primary">4.2M</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-foreground">Error Rate</p>
                      <p className="text-2xl font-black text-green-600">0.12%</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '1.2%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-foreground">Uptime</p>
                      <p className="text-2xl font-black text-green-600">99.97%</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.97%' }} />
                    </div>
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
