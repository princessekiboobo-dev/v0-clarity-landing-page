'use client'

import { Button } from '@/components/ui/button'
import { Upload, AlertTriangle, Zap, CheckCircle, Cloud, History, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function DataCleanroom() {
  const [fileLoaded, setFileLoaded] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [integrityScore, setIntegrityScore] = useState(84)

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
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-full">
            <Cloud className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-sm font-600">Synced to Vault</span>
          </div>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB] transition-colors"
          >
            <History className="w-4 h-4" />
            <span className="text-sm font-600">History</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Center Stage */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-6">
          {!fileLoaded ? (
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
          )}
        </div>

        {/* Resolution Stream Sidebar */}
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
      </div>

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
