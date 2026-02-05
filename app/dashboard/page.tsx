'use client'

import { Button } from '@/components/ui/button'
import { Upload, AlertTriangle, Zap, CheckCircle, Cloud, History, X, ArrowRight, Settings, Database, LogOut, Bell, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function DataCleanroom() {
  const [fileLoaded, setFileLoaded] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [integrityScore, setIntegrityScore] = useState(84)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, role: 'assistant', text: 'Hello! I can help you analyze, clean, and modify your data. What would you like to do?' },
  ])
  const [chatInput, setChatInput] = useState('')
  const [liveData, setLiveData] = useState([
    { id: 1, email: 'john.doe@example.com', status: 'active', signup_date: '2024-01-15', revenue: '$2,450' },
    { id: 2, email: 'jane.smith@example.com', status: 'active', signup_date: '2024-01-20', revenue: '$3,200' },
    { id: 3, email: 'bob.wilson@example.com', status: 'inactive', signup_date: '2023-12-10', revenue: '$0' },
    { id: 4, email: 'alice.brown@example.com', status: 'active', signup_date: '2024-02-01', revenue: '$1,800' },
    { id: 5, email: 'charlie.davis@example.com', status: 'trial', signup_date: '2024-02-05', revenue: '$500' },
  ])

  const anomalies = [
    { id: 1, type: 'Schema Mismatch', severity: 'high', count: 12, fixed: false },
    { id: 2, type: 'Missing Values', severity: 'medium', count: 547, fixed: false },
    { id: 3, type: 'Invalid Date Formats', severity: 'high', count: 89, fixed: false },
    { id: 4, type: 'Duplicate Records', severity: 'medium', count: 234, fixed: false },
    { id: 5, type: 'Type Mismatches', severity: 'low', count: 23, fixed: false },
  ]

  const historyItems = [
    { name: 'customers_q4_2024.csv', date: '2 hours ago', records: '2.5M' },
    { name: 'transactions_batch.csv', date: '5 hours ago', records: '8.3M' },
    { name: 'inventory_snapshot.csv', date: '1 day ago', records: '450K' },
    { name: 'user_analytics.csv', date: '2 days ago', records: '12M' },
  ]

  const sampleData = [
    { id: 1, issue: true, email: 'john.doe@example.com', status: 'INVALID_EMAIL', date: '2024-13-45' },
    { id: 2, issue: false, email: 'jane.smith@example.com', status: 'active', date: '2024-01-15' },
    { id: 3, issue: true, email: null, status: 'pending', date: '2024-02-20' },
    { id: 4, issue: false, email: 'bob.wilson@example.com', status: 'active', date: '2024-03-10' },
    { id: 5, issue: true, email: 'alice.brown@example.com', status: 'INVALID_EMAIL', date: '2024-02-30' },
  ]

  return (
    <div className="min-h-screen bg-white font-space-grotesk overflow-hidden flex flex-col">
      {/* Header */}
      <header className="border-b border-[#E5E7EB] px-8 py-6 flex items-center justify-between sticky top-0 z-50 bg-white">
        <div className="flex items-center gap-6 flex-1">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-lg" />
              <span className="relative font-800 text-white text-sm">C</span>
            </div>
            <span className="font-700 text-lg tracking-tight">Clarity</span>
          </div>

          {/* Integrity Score */}
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <div className="text-right">
              <p className="text-xs font-600 text-[#666666] uppercase tracking-wider">Integrity Score</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-800 text-[#7C3AED]">{integrityScore}%</p>
                <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 pulse-glow" />
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Sync Status */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-[#F9FAFB] rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-[#666666]" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EA580C] rounded-full" />
          </button>
          <div className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-full">
            <Cloud className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-sm font-600">Synced</span>
          </div>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB] transition-colors"
          >
            <History className="w-4 h-4" />
            <span className="text-sm font-600">History</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center text-white font-700 hover:shadow-lg transition-shadow"
            >
              JD
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm bg-white/95">
                <div className="px-4 py-3 border-b border-[#E5E7EB]">
                  <p className="font-600 text-sm">John Doe</p>
                  <p className="text-xs text-[#666666]">john@clarity.dev</p>
                </div>
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#F9FAFB] text-sm font-500 transition-colors">
                  <Settings className="w-4 h-4" />
                  Account Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#F9FAFB] text-sm font-500 transition-colors border-t border-[#E5E7EB]">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Glass Navigation Tabs */}
      <nav className="border-b border-[#E5E7EB] px-8 bg-white sticky top-[88px] z-40">
        <div className="flex items-center gap-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: Zap },
            { id: 'talk', label: 'Talk to Data', icon: MessageSquare },
            { id: 'data', label: 'Uploaded Data', icon: Database },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2.5 px-6 py-4 border-b-2 font-600 text-sm transition-all ${
                activeTab === id
                  ? 'border-[#7C3AED] text-[#7C3AED]'
                  : 'border-transparent text-[#666666] hover:text-[#111111]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Center Stage */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-6">
          {activeTab === 'dashboard' && (
            !fileLoaded ? (
              <div className="w-full max-w-2xl">
                {/* Drop Zone */}
                <div
                  className="border-2 border-dashed border-[#7C3AED] rounded-2xl p-16 text-center hover:bg-[#7C3AED]/5 transition-colors cursor-pointer group"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => setFileLoaded(true)}
                  onClick={() => setFileLoaded(true)}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#7C3AED]/10 rounded-full flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
                      <Upload className="w-8 h-8 text-[#7C3AED]" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-800 mb-3">Upload your data</h2>
                  <p className="text-[#666666] mb-8 font-500">Drag and drop your CSV or JSON file, or click to browse</p>
                  <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-700 h-11 px-8 rounded-lg">
                    Select File
                  </Button>
                </div>
              </div>
            ) : (
              <div className="w-full space-y-6">
                {/* Data Table */}
                <div className="border border-[#E5E7EB] rounded-lg overflow-hidden inner-glow">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                      <tr>
                        <th className="text-left px-6 py-4 font-700 text-[#111111]">ID</th>
                        <th className="text-left px-6 py-4 font-700 text-[#111111]">Email</th>
                        <th className="text-left px-6 py-4 font-700 text-[#111111]">Status</th>
                        <th className="text-left px-6 py-4 font-700 text-[#111111]">Date</th>
                        <th className="text-left px-6 py-4 font-700 text-[#111111]">Issue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      {sampleData.map((row) => (
                        <tr
                          key={row.id}
                          className={`${
                            row.issue ? 'bg-[#F3E8FF]/40' : 'hover:bg-[#F9FAFB]'
                          } transition-colors`}
                        >
                          <td className="px-6 py-4 font-600 text-[#111111]">{row.id}</td>
                          <td className="px-6 py-4 text-[#666666]">{row.email || '-'}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`text-xs font-600 px-2 py-1 rounded ${
                                row.status === 'active'
                                  ? 'bg-green-100/30 text-green-700'
                                  : 'bg-red-100/30 text-red-700'
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-[#666666]">{row.date}</td>
                          <td className="px-6 py-4">
                            {row.issue && (
                              <div className="flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-[#EA580C]" />
                                <span className="text-xs font-600 text-[#EA580C]">Issue</span>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
          {activeTab === 'talk' && (
            <div className="w-full h-full flex gap-6 px-8 py-6">
              {/* Left: AI Chat */}
              <div className="w-96 bg-white rounded-lg border border-[#E5E7EB] flex flex-col overflow-hidden shadow-sm">
                {/* Chat Header */}
                <div className="border-b border-[#E5E7EB] px-6 py-4">
                  <h3 className="text-lg font-800">Data Assistant</h3>
                  <p className="text-xs text-[#666666] font-500 mt-1">Powered by AI</p>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-xs rounded-lg px-4 py-3 text-sm font-500 ${
                          msg.role === 'user'
                            ? 'bg-[#7C3AED] text-white rounded-br-none'
                            : 'bg-[#F3F4F6] text-[#111111] rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t border-[#E5E7EB] px-4 py-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask me anything..."
                      className="flex-1 px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && chatInput.trim()) {
                          setChatMessages([
                            ...chatMessages,
                            { id: chatMessages.length + 1, role: 'user', text: chatInput },
                            { id: chatMessages.length + 2, role: 'assistant', text: 'Processing your request...' },
                          ])
                          setChatInput('')
                        }
                      }}
                    />
                    <button className="p-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-lg transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Live Spreadsheet */}
              <div className="flex-1 bg-white rounded-lg border border-[#E5E7EB] flex flex-col overflow-hidden shadow-sm">
                {/* Spreadsheet Header */}
                <div className="border-b border-[#E5E7EB] px-6 py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-800">Live Data Preview</h3>
                    <p className="text-xs text-[#666666] font-500 mt-1">{liveData.length} records</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-600 text-green-700">Live Updates</span>
                  </div>
                </div>

                {/* Spreadsheet Table */}
                <div className="flex-1 overflow-auto">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                      <tr>
                        <th className="text-left px-6 py-3 font-700 text-[#111111]">ID</th>
                        <th className="text-left px-6 py-3 font-700 text-[#111111]">Email</th>
                        <th className="text-left px-6 py-3 font-700 text-[#111111]">Status</th>
                        <th className="text-left px-6 py-3 font-700 text-[#111111]">Signup Date</th>
                        <th className="text-left px-6 py-3 font-700 text-[#111111]">Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      {liveData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-6 py-4 font-600 text-[#111111]">{row.id}</td>
                          <td className="px-6 py-4 text-[#666666] font-500">{row.email}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`text-xs font-600 px-2.5 py-1 rounded-full ${
                                row.status === 'active'
                                  ? 'bg-green-50 text-green-700'
                                  : row.status === 'inactive'
                                    ? 'bg-red-50 text-red-700'
                                    : 'bg-blue-50 text-blue-700'
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-[#666666] font-500">{row.signup_date}</td>
                          <td className="px-6 py-4 font-700 text-[#7C3AED]">{row.revenue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'data' && (
            <div className="w-full max-w-5xl">
              <div className="mb-8">
                <h2 className="text-3xl font-800 mb-2">Uploaded Data</h2>
                <p className="text-[#666666] font-500">Manage and review your data files</p>
              </div>
              <div className="space-y-4">
                {historyItems.map((item, idx) => (
                  <div key={idx} className="border border-[#E5E7EB] rounded-lg p-6 hover:border-[#7C3AED] transition-all hover:shadow-md group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
                          <Database className="w-6 h-6 text-[#7C3AED]" />
                        </div>
                        <div>
                          <p className="font-700 text-[#111111]">{item.name}</p>
                          <p className="text-xs text-[#666666] font-500 mt-1">{item.records} records</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-600 text-[#666666]">{item.date}</p>
                        <button className="mt-2 px-3 py-1 text-xs font-600 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded transition-colors">
                          View
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E5E7EB]">
                      <div>
                        <p className="text-xs text-[#666666] font-600 uppercase tracking-wider">Quality</p>
                        <p className="text-lg font-800 text-[#7C3AED] mt-1">98.2%</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#666666] font-600 uppercase tracking-wider">Issues</p>
                        <p className="text-lg font-800 text-[#EA580C] mt-1">45</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#666666] font-600 uppercase tracking-wider">Status</p>
                        <p className="text-lg font-800 text-green-600 mt-1">Cleaned</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="w-full max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-800 mb-2">Settings</h2>
                <p className="text-[#666666] font-500">Configure your workspace and preferences</p>
              </div>
              <div className="space-y-6">
                {/* API Keys Section */}
                <div className="border border-[#E5E7EB] rounded-lg p-6">
                  <h3 className="text-lg font-800 mb-4">API Keys</h3>
                  <div className="bg-[#F9FAFB] rounded-lg p-4 mb-4 font-space-grotesk font-600 text-sm text-[#666666] overflow-hidden">
                    <span className="text-[#7C3AED]">sk_live_</span>51hK9m...
                  </div>
                  <button className="px-4 py-2 text-sm font-600 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                    Generate New Key
                  </button>
                </div>

                {/* Notifications Section */}
                <div className="border border-[#E5E7EB] rounded-lg p-6">
                  <h3 className="text-lg font-800 mb-4">Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Email on data quality issues', enabled: true },
                      { label: 'Weekly integrity reports', enabled: true },
                      { label: 'Failed uploads', enabled: false },
                    ].map((notif, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <p className="font-500 text-[#111111]">{notif.label}</p>
                        <div
                          className={`w-12 h-6 rounded-full transition-colors ${notif.enabled ? 'bg-[#7C3AED]' : 'bg-[#E5E7EB]'}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workspace Section */}
                <div className="border border-[#E5E7EB] rounded-lg p-6">
                  <h3 className="text-lg font-800 mb-4">Workspace</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-600 text-[#666666]">Workspace Name</p>
                      <input
                        type="text"
                        defaultValue="My Workspace"
                        className="w-full mt-2 px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-600 text-[#666666]">Plan</p>
                      <p className="mt-2 font-600 text-[#111111]">Pro - $99/month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resolution Stream Sidebar - Only show on dashboard tab */}
        {activeTab === 'dashboard' && fileLoaded && (
          <div className="w-96 border-l border-[#E5E7EB] bg-[#FAFAFA] flex flex-col">
            <div className="border-b border-[#E5E7EB] px-6 py-4">
              <h3 className="text-lg font-800 tracking-tight">Resolution Stream</h3>
              <p className="text-xs text-[#666666] font-500 mt-1">{anomalies.length} anomalies detected</p>
            </div>

            {/* Anomaly Cards */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className="border border-[#E5E7EB] rounded-lg p-4 hover:bg-white transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-700 text-[#111111]">{anomaly.type}</p>
                      <p className="text-xs text-[#666666] font-500 mt-1">{anomaly.count} records</p>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        anomaly.severity === 'high'
                          ? 'bg-[#EA580C]'
                          : anomaly.severity === 'medium'
                            ? 'bg-[#F97316]'
                            : 'bg-[#EAB308]'
                      }`}
                    />
                  </div>
                  <button className="w-full px-3 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-700 rounded transition-colors">
                    Auto-Fix
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* History Drawer */}
      {showHistory && (
        <div className="fixed inset-0 bg-black/20 z-40 flex items-start justify-end">
          <div className="w-96 h-full bg-white border-l border-[#E5E7EB] flex flex-col animate-in slide-in-from-right">
            <div className="border-b border-[#E5E7EB] px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-800 tracking-tight">Upload History</h3>
              <button onClick={() => setShowHistory(false)} className="p-1 hover:bg-[#F9FAFB] rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
              {historyItems.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-3 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-600 text-[#111111] text-sm truncate">{item.name}</p>
                    <ArrowRight className="w-4 h-4 text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-[#666666] font-500">{item.date}</p>
                  <p className="text-xs text-[#7C3AED] font-600 mt-1">{item.records} records</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[#E5E7EB] bg-white px-8 py-4 flex items-center justify-end gap-4 shadow-2xl">
        <Button
          variant="outline"
          className="border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#111111] font-700 h-11 px-6 rounded-lg bg-transparent"
        >
          Export
        </Button>
        <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-700 h-11 px-8 rounded-lg text-base flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Resolve All Integrity Issues
        </Button>
      </div>

      {/* Space for floating bar */}
      <div className="h-20" />
    </div>
  )
}
