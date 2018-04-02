import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const Dashboard = () => (
  <div>
    <div className="p-15 p-t-20 p-b-0">
      <Section1 />
    </div>
    <Section2 />
    <Section3 />
    <Section4 />
  </div>
)
export default Dashboard
