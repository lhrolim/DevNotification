import React from 'react'
import UserWidget4 from './UserWidget4'
import {random} from '../functions'
import users from '../json/users.json'

let user = users[1]

const icons = [
  {
    bg: 'transparent',
    color: 'default',
    icon: 'sli-social-facebook',
    iconColor: 'default',
    text: random(100, 999)
  },
  {
    bg: 'transparent',
    color: 'default',
    icon: 'sli-social-twitter',
    iconColor: 'default',
    text: random(100, 999)
  },
  {
    bg: 'transparent',
    color: 'default',
    icon: 'sli-social-pinterest',
    iconColor: 'default',
    text: random(100, 999)
  }
]

const SampleUserWidget4 = () => <UserWidget4 user={user} icons={icons} />

export default SampleUserWidget4
