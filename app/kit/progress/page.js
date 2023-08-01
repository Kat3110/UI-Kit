'use client'
import {useState, useEffect} from 'react';
import ProgressCircle from '@/components/progress-bar/ProgressCircle';

export default function Progress() {

  return (
    <div>
      <h1>Progress</h1>
      <div className="block">
        <h2>Progress Bar</h2>
        <hr/>
        <ProgressCircle
          percent={40}
          color='primary'
        />
      </div>
    </div>
  )
}
