import React from 'react'
import UserWidget5 from './UserWidget5'
import users from '../json/users.json'
import {random} from '../functions'

let user = users[4]

const statistics = [
  {title: 'Friends', subtitle: random(10, 99), align: 'center'},
  {title: 'Comments', subtitle: random(10, 99), align: 'center'}
]

const SampleUserWidget5 = () => (
  <UserWidget5 user={user} statistics={statistics} />
)

export default SampleUserWidget5
