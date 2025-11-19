"use client"

import * as React from "react"

interface ToastProps {
  message: string
  onClose: () => void
}

export function Toast({ message, onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 right-4 z-[10000] animate-in slide-in-from-bottom-2">
      <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]">
        <span className="text-sm">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
