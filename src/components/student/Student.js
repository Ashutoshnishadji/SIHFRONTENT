import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
    const {admissionNo}=useParams()
    console.log('hello')
  return (
    <div>{`student admission no is ${admissionNo}`}</div>
  )
}
