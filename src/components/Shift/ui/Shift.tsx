import { useState, useEffect } from 'react'
import { ShiftType } from '../types/Shift'
import { setAccelerometerWatcher } from '../lib/Shift'

export default function Shift() {
  const [shifts, setShifts] = useState<ShiftType[]>([])

  useEffect(() => {
    setAccelerometerWatcher(setShifts)
  }, [])

  return (
    <>
      {
        shifts.map(
          (shift) => <p key={shift.name}>{ shift.name }: { shift.value }</p>
        )
      }
    </>
  )
}
