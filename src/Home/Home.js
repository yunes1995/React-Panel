import React from 'react'
import Feature from "../component/features/Feature"
import Chart from "../component/Chart/Chart"
import { xAxisData } from '../datas'
import "./Home.css"

export default function Home() {
  return (
    <div className='Mainpage'>
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
    </div>
  )
}
