import { useState, useEffect } from 'react'
import { DevUIType } from '../types/Shift'
import { watchGyroscopeAnswer } from '../lib/gyroscope'
import PlotFigure from '../../PlotFigure/ui/PlotFigure'
import { ShiftDot } from '../../PlotFigure/types/PlotFigure'

export default function Shift() {
  const [shifts, setShifts] = useState<DevUIType[]>([])
  const [median, setMedian] = useState<DevUIType>({name: '', value: ''})
  const [wave, setWave] = useState<DevUIType>({name: '', value: ''})
  const [graphDots, setGraphDots] = useState<ShiftDot[]>([])

  useEffect(() => {
    watchGyroscopeAnswer(setShifts, setMedian, setWave)
  }, [])

  useEffect(() => {
    if (!shifts.length) return
    const dots = shifts[0].value.split(',').map((dot, index) => ({ number: index, shift: Number(dot) || 0}))
    setGraphDots(dots)
  }, [shifts])

  return (
    <div>
      <PlotFigure dots={graphDots} />
      { /*
        shifts.map(
          (shift) => <p key={shift.name}>{ shift.name }: { shift.value }</p>
        )
        */
      }
      { <p>{median.value}</p> }
      { <p>{wave.value}</p> }
    </div>
  )
}
