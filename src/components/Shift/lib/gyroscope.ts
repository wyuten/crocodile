import throttle from 'lodash.throttle'
import { DevUIType } from '../types/Shift'
import Queue from '../../../assets/scripts/data-structures/Queue'

type DevUITypeArraySetter = React.Dispatch<React.SetStateAction<DevUIType[]>>
type DevUITypeObjectSetter = React.Dispatch<React.SetStateAction<DevUIType>>

let isGyroscopeWork = true
const eventFrequency = 200

const events = new Map([
  ['amplitude', {
    queue: new Queue(),
    amount: 30
  }],
  // ['median', {
  //   queue: new Queue(),
  //   amount: 10
  // }]
])

function getDeviceOrientationEventCb(setShifts: DevUITypeArraySetter, setMedian: DevUITypeObjectSetter, setWave: DevUITypeObjectSetter) {
  return (event: DeviceOrientationEvent) => {
    const leftToRight = event.gamma || 0 // gamma: left to right
    const inclineDegrees = leftToRight > 0 ? leftToRight - 90 : leftToRight + 90 || 0
    const workingRange = 60
    const isGyroscopeWasWorked = isGyroscopeWork

    isGyroscopeWork = inclineDegrees > -workingRange && inclineDegrees < workingRange

    if (isGyroscopeWasWorked !== isGyroscopeWork) events.get('amplitude')?.queue.empty()

    if (!isGyroscopeWork) return

    for (const [eventName, event] of events) {
      if (eventName === 'median') {
        // event.queue.enqueue(inclineDegrees.toFixed())
      } else if (eventName === 'amplitude') {
        event.queue.enqueue(inclineDegrees.toFixed())
      }

      if (event.queue.length > event.amount) {
        event.queue.dequeue()
      }
    }

    const amplitudeElements = events.get('amplitude')?.queue.elements

    const medianElements = events.get('amplitude')?.queue.elements.slice(-10)
    const medianSum = medianElements?.reduce((sum: number, item) => sum + Number(item), 0) || 0
    const medianValue = medianSum / (medianElements?.length || 0)

    const lastWave = 20

    setShifts([{ name: 'leftToRight', value: amplitudeElements?.toString() || '' }])
    setMedian({ name: 'median', value: medianValue?.toString() || '' })
    setWave({ name: 'waves', value: lastWave.toString() || '' })
  }
}

function setGyroscopeWatcher(setShifts: DevUITypeArraySetter, setMedian: DevUITypeObjectSetter, setWave: DevUITypeObjectSetter) {
  const deviceorientationHandler = throttle(
    getDeviceOrientationEventCb(setShifts, setMedian, setWave),
    eventFrequency, { leading: false, trailing: true }
  )
  window.addEventListener('deviceorientation', deviceorientationHandler, true)
  document.addEventListener('keydown', () => {
    isGyroscopeWork = !isGyroscopeWork
  })
}

export function watchGyroscopeAnswer(setShifts: DevUITypeArraySetter, setMedian: DevUITypeObjectSetter, setWave: DevUITypeObjectSetter) {
  if (window.DeviceOrientationEvent) {
    setGyroscopeWatcher(setShifts, setMedian, setWave)
  }
}
