import React, { useContext } from 'react'
import { Btnval } from './App'

export default function Input() {

    const {val}=useContext(Btnval)
  return (
  <>
  <input type="text" value={val} placeholder='Enter your ' />

  </>
  )
}
