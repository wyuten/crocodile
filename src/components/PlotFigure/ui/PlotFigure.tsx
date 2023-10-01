import { useEffect, useRef } from 'react'
import { plot, lineY, ruleY } from '@observablehq/plot'
import { type PlotFigureProps } from '../types/PlotFigure'
import './PlotFigure.css'

export default function PlotFigure({ dots }: PlotFigureProps) {
  const containerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!dots) return
    const plotInstance = plot({
      y: {domain: [-90, 90]},
      color: {scheme: "burd"},
      marks: [
        ruleY([0]),
        lineY(dots, {x: 'number', y: 'shift'})
      ]
    })
    containerRef?.current?.append(plotInstance)
    return () => plotInstance.remove()
  }, [dots])

  return (
    <div className={'plot'} ref={containerRef}></div>
  )
}
