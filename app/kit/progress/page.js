'use client'
import ProgressCircle from '@/components/progress-circle/ProgressCircle';
import Progressbar from '@/components/progressbar/Progressbar';

export default function Progress() {

  return (
    <div>
      <h1>Progress</h1>
      <div className="block">
        <h2>Progress Circle</h2>
        <hr/>
        <ProgressCircle
          percent={60}
          color='success'
        />
        <h2>Progress Bar</h2>
        <hr/>
        <Progressbar
          percent={30}
          color='warning'
        />
      </div>
    </div>
  )
}
