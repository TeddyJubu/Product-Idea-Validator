'use client'

import { useState } from 'react'

interface IceScore {
    id: string
    name: string
    impact: number
    confidence: number
    effort: number
    score: number
}

export default function Home() {
    const [ideas, setIdeas] = useState<IceScore[]>([])
    const [currentIdea, setCurrentIdea] = useState({
          name: '',
          impact: '',
          confidence: '',
          effort: ''
    })

  const calculateScore = (impact: number, confidence: number, effort: number): number => {
        if (effort === 0) return 0
        return (impact * (confidence / 100)) / effort
  }

  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
              <div className="max-w-4xl mx-auto space-y-8">
                      <div className="text-center space-y-4">
                                <h1 className="text-4xl font-bold text-slate-900">ICE Score Calculator</h1>h1>
                                <p className="text-slate-600 max-w-2xl mx-auto">
                                            Prioritize your ideas using the ICE framework: <strong>Impact × Confidence ÷ Effort</strong>strong>
                                          </p>p>
                              </div>div>
                      <div className="text-center text-sm text-slate-500 space-y-2">
                                <p><strong>Formula:</strong>strong> ICE Score = (Impact × Confidence) ÷ Effort</p>p>
                                <p>Higher scores = better opportunities to prioritize first</p>p>
                              </div>div>
                    </div>div>
            </div>div>
      )
}</div>
