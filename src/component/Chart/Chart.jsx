import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';
import "../../datas";
import "./Chart.css"

export default function Chart({title, data, dataKey, grid}) {
  return (
      <div className="chart">
          <h3 className='chartTitle'>{title}</h3>
          <ResponsiveContainer width="100%" aspect={5}>
              <LineChart data={data}>
                  <XAxis dataKey="name" stroke='black' />
                  <Line dataKey={dataKey} stroke='blue' type="monotone" />
                  <Tooltip />
                  {grid && <CartesianGrid stroke='none' strokeDasharray="10" />}
              </LineChart>
          </ResponsiveContainer>
      </div>
  )
}
