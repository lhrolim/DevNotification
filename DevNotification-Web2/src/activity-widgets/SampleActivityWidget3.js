import React from 'react'
import ActivityWidget3 from './ActivityWidget3'

let items = [
  {
    date: 'A few seconds ago',
    title:
      'Lucas Smith checked out branch feature/123-branch at Themes/greatTheme',
    description: '2 commits with 22 additions and 2 deletions',
    name: 'Lucas Smith',
    img: '/assets/faces/m1.png'
  },
  {
    date: '2 hours ago',
    title: 'George Clinton pushed to bug/123-branch at Themes/greatTheme',
    description: '2 commits with 22 additions and 2 deletions',
    name: 'George Clinton',
    img: '/assets/faces/m5.png'
  },
  {
    date: '3 hours ago',
    title: 'Jane Perez pushed to branch/223-branch at Themes/greatTheme',
    description: '4 commits with 36 additions and 16 deletions',
    name: 'Jane Perez',
    img: '/assets/faces/w3.png'
  },
  {
    date: '4 hours ago',
    title: 'Michael Smith pushed to feature/223-branch at Themes/greatTheme',
    description: '4 commits with 16 additions and 13 deletions',
    name: 'Michael Smith',
    img: '/assets/faces/m2.png'
  },
  {
    date: '5 hours ago',
    title: 'Gladys Schuster closed issue #1234',
    description: 'q80c81c - fixed error. Emails not being sent',
    name: 'Gladys Schuster',
    img: '/assets/faces/w5.png'
  }
]

const SampleActivityWidget3 = () => <ActivityWidget3 items={items} />

export default SampleActivityWidget3
