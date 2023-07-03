import { ShiftType } from '../types/Shift'

export function setAccelerometerWatcher(setShifts: React.Dispatch<React.SetStateAction<ShiftType[]>>) {
  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      'deviceorientation',
      (event) => {
        const rotateDegrees = event.alpha || 0 // alpha: rotation around z-axis
        const leftToRight = event.gamma || 0 // gamma: left to right
        const frontToBack = event.beta || 0 // beta: front back motion

        setShifts([
          { name: 'frontToBack', value: frontToBack.toFixed() },
          { name: 'leftToRight', value: leftToRight.toFixed() },
          { name: 'rotateDegrees', value: rotateDegrees.toFixed() }
        ])
      },
      true
    )
  }
}
