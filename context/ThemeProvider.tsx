'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/4c23ccd6-3f47-4cc5-8dd6-6b866ddcbb69',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeProvider.tsx:14',message:'ThemeProvider render',data:{mounted,theme},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
  // #endregion

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/4c23ccd6-3f47-4cc5-8dd6-6b866ddcbb69',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeProvider.tsx:20',message:'useEffect executing',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    setMounted(true)
    // Check localStorage first, then default to dark
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) {
      setTheme(stored)
      if (stored === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // Default to dark mode (dark-first design).
      const initialTheme = 'dark'
      setTheme(initialTheme)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Always render the Provider - mounted state only controls when we apply theme to document
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/4c23ccd6-3f47-4cc5-8dd6-6b866ddcbb69',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeProvider.tsx:52',message:'Returning children WITH Provider (always)',data:{mounted,theme},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/4c23ccd6-3f47-4cc5-8dd6-6b866ddcbb69',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeProvider.tsx:62',message:'useTheme called',data:{contextIsUndefined:context===undefined},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  if (context === undefined) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/4c23ccd6-3f47-4cc5-8dd6-6b866ddcbb69',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeProvider.tsx:65',message:'ERROR: context undefined, throwing error',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/4c23ccd6-3f47-4cc5-8dd6-6b866ddcbb69',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ThemeProvider.tsx:69',message:'useTheme returning context successfully',data:{theme:context.theme},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  return context
}
