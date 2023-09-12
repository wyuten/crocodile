// import { useState, useEffect } from 'react'
import { type RefWordProps } from '../types/RefWord'

export default function RefWord(data: RefWordProps) {

  return (
    <div>
        { data.word }
    </div>
  )
}
