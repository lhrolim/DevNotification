import React from 'react'
import ActivityWidget7 from './ActivityWidget7'

let items = [
  {
    title: 'Customer development',
    subtitle: 'Today',
    color: 'warning',
    value: 74
  },
  {
    title: 'Mobile app project',
    subtitle: 'This week',
    color: 'danger',
    value: 66
  },
  {
    title: 'Plan trip to Europe',
    subtitle: 'Next month',
    color: 'success',
    value: 66
  },
  {
    title: 'Meeting with important client',
    subtitle: 'Tomorrow',
    color: 'primary',
    value: 45
  }
]

const SampleActivityWidget7 = () => <ActivityWidget7 items={items} />

export default SampleActivityWidget7
