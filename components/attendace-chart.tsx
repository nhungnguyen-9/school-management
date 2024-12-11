'use client'

import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


export const AttendanceChart = ({
    data
}: {
    data: {
        name: string,
        present: number,
        absent: number,
    }[]
}) => {
    return (
        <ResponsiveContainer width='100%' height='90%'>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
                <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }} />
                <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
                <Bar dataKey="present" fill="#f6e58d" legendType='circle' radius={[10, 10, 0, 0]} />
                <Bar dataKey="absent" fill="#7ed6df" legendType='circle' radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}
