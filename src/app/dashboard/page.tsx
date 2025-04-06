"use client"

import { Header } from '@/components/header'
import { UpdateHistory } from '@/components/updateHistory'
import React from 'react'

function page() {
  return (
    <div>
      <Header main='Main Page' sub='Dashboard' />
      <div className="px-6 py-6 max-w-5xl mx-auto">
      <UpdateHistory />
      </div>

    </div>
  )
}

export default page