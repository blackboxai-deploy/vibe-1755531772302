'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleString())
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hello World!
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
              Welcome to your beautiful Next.js application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                🎉 Congratulations! Your Hello World app is running successfully.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Time:</p>
                <p className="text-lg font-mono text-blue-600 dark:text-blue-400">
                  {currentTime}
                </p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with Next.js 15, React 19, and shadcn/ui
              </p>
              <div className="flex justify-center space-x-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                  Live and running
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}