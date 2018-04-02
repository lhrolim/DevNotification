import React from 'react'
import UserWidget3 from './UserWidget3'
import users from '../json/users.json'

let user = users[2]

const buttons = [
  {
    btnClass: 'btn-primary btn-rounded',
    text: 'Follow'
  },
  {
    btnClass: 'btn-warning btn-rounded',
    text: 'Message'
  }
]

const SampleUserWidget3 = () => <UserWidget3 user={user} buttons={buttons} />

export default SampleUserWidget3
