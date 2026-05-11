import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Custom SVG Icons to avoid bundling issues
const ZapIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)
const ActivityIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)
const DownloadIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
const UploadIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)
const GlobeIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)
const MonitorIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)
const LinkIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)
const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const LaptopIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="12" rx="2" ry="2" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)
const ChevronDownIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const RainbowGauge = ({ speed, maxSpeed = 200 }) => {
  const percent = Math.min(speed / maxSpeed, 1)
  const radius = 80
  const circumference = Math.PI * radius // Half circle circumference
  const offset = circumference - (percent * circumference)

  return (
    <div className="relative w-full max-w-lg aspect-[2/1] flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 200 110">
        {/* Background Arc */}
        <path
          d="M20 90 A80 80 0 0 1 180 90"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Rainbow Progress Arc */}
        <motion.path
          d="M20 90 A80 80 0 0 1 180 90"
          fill="none"
          stroke="url(#rainbowGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ type: 'spring', damping: 25, stiffness: 60 }}
          style={{ strokeDasharray: circumference }}
        />
        <defs>
          <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="16.6%" stopColor="#ff7f00" />
            <stop offset="33.3%" stopColor="#ffff00" />
            <stop offset="50%" stopColor="#00ff00" />
            <stop offset="66.6%" stopColor="#0000ff" />
            <stop offset="83.3%" stopColor="#4b0082" />
            <stop offset="100%" stopColor="#8f00ff" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center pb-4">
        <span className="text-7xl font-black rainbow-text">
          {speed.toFixed(1)}
        </span>
        <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">Mbps</span>
      </div>
    </div>
  )
}

const RainbowGraph = ({ data, color = "rainbow" }) => {
  if (data.length < 2) return <div className="h-12 w-full" />
  
  const maxVal = Math.max(...data, 200)
  const width = 200
  const height = 50
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - (val / maxVal) * height
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className="w-full h-12 overflow-visible" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(143, 0, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(143, 0, 255, 0)" />
        </linearGradient>
      </defs>
      <motion.polyline
        fill="none"
        stroke="url(#rainbowGradient)"
        strokeWidth="2"
        points={points}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      />
      <motion.polygon
        fill="url(#graphGradient)"
        points={`0,${height} ${points} ${width},${height}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </svg>
  )
}

const ResultCard = ({ label, value, unit, icon: Icon, active, graphData }) => (
  <div className={`rainbow-border overflow-hidden transition-all duration-500 ${active ? 'scale-105 shadow-[0_0_30px_rgba(143,0,255,0.3)]' : 'opacity-70'}`}>
    <div className="p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase">
        <Icon size={14} className={active ? 'text-purple-400' : ''} />
        {label}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-light">{value === '--' ? value : parseFloat(value).toFixed(1)}</div>
        <div className="text-[10px] text-gray-500 mb-1">{unit}</div>
      </div>
      {graphData && <RainbowGraph data={graphData} />}
    </div>
  </div>
)

export default function App() {
  const [state, setState] = useState('IDLE')
  const [ping, setPing] = useState('--')
  const [jitter, setJitter] = useState('--')
  const [download, setDownload] = useState(0)
  const [upload, setUpload] = useState(0)
  const [history, setHistory] = useState({ dl: [], ul: [] })
  const [activePhase, setActivePhase] = useState(null)

  const startTest = async () => {
    setState('TESTING')
    setHistory({ dl: [], ul: [] })
    
    // Ping Phase
    setActivePhase('ping')
    for (let i = 0; i < 15; i++) {
      setPing((5 + Math.random() * 5).toFixed(0))
      setJitter((Math.random() * 3).toFixed(0))
      await new Promise(r => setTimeout(r, 80))
    }

    // Download Phase
    setActivePhase('download')
    const dlTarget = 150 + Math.random() * 100
    for (let i = 0; i < 60; i++) {
      const current = i < 15 ? (dlTarget * (i / 15)) : dlTarget + (Math.random() - 0.5) * 20
      setDownload(current)
      setHistory(prev => ({ ...prev, dl: [...prev.dl, current] }))
      await new Promise(r => setTimeout(r, 100))
    }

    // Upload Phase
    setActivePhase('upload')
    const ulTarget = 100 + Math.random() * 50
    for (let i = 0; i < 60; i++) {
      const current = i < 15 ? (ulTarget * (i / 15)) : ulTarget + (Math.random() - 0.5) * 15
      setUpload(current)
      setHistory(prev => ({ ...prev, ul: [...prev.ul, current] }))
      await new Promise(r => setTimeout(r, 100))
    }

    setActivePhase(null)
    setState('FINISHED')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden bg-[#050505]">
      {/* Background Rainbow Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full rainbow-gradient"
            style={{ top: `${12.5 * i}%` }}
            animate={{ 
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-5xl z-10 space-y-12">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold tracking-widest text-gray-400 uppercase">Speed Performance</h1>
          <div className="h-1 w-24 rainbow-gradient rounded-full animate-rainbow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side Metrics */}
          <div className="space-y-4">
            <ResultCard label="Ping" value={ping} unit="ms" icon={ZapIcon} active={activePhase === 'ping'} />
            <ResultCard label="Jitter" value={jitter} unit="ms" icon={ActivityIcon} active={activePhase === 'ping'} />
          </div>

          {/* Center Gauge */}
          <div className="flex flex-col items-center justify-center scale-110">
            <RainbowGauge speed={activePhase === 'download' ? download : (activePhase === 'upload' ? upload : (state === 'FINISHED' ? download : 0))} />
            
            <div className="mt-4">
              <AnimatePresence mode="wait">
                {state !== 'TESTING' ? (
                  <motion.button
                    key="btn"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(143, 0, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startTest}
                    className="px-12 py-4 rounded-full rainbow-border group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative text-2xl font-black tracking-tighter">
                      {state === 'IDLE' ? 'START TEST' : 'RETRY'}
                    </span>
                  </motion.button>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-purple-400 font-mono text-sm tracking-[0.3em]"
                    >
                      MEASURING {activePhase?.toUpperCase()}...
                    </motion.div>
                    <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rainbow-gradient"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Metrics */}
          <div className="space-y-4">
            <ResultCard label="Download" value={download || '--'} unit="Mbps" icon={DownloadIcon} active={activePhase === 'download'} graphData={history.dl} />
            <ResultCard label="Upload" value={upload || '--'} unit="Mbps" icon={UploadIcon} active={activePhase === 'upload'} graphData={history.ul} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 pt-12 border-t border-white/5">
          <div className="flex items-center gap-3 text-gray-400 bg-white/5 px-6 py-3 rounded-full border border-white/10">
            <LaptopIcon size={18} className="text-purple-400" />
            <span className="font-bold tracking-tight">True Online</span>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="font-mono text-sm opacity-70">27.145.121.93</span>
          </div>
        </div>
      </div>
    </div>
  )
}
