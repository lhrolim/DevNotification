import React from 'react'
import '../../css/pages/home.css'
import Demo4 from '../../demos/Demo4'

const Index = ({authenticated}) => (
  <div className="home text-center">
     {authenticated &&  <Demo4/>
     }
  </div>
)

export default Index
