import React from 'react'
import UserWidget6 from './UserWidget6'
import users from '../json/users.json'

let user = users[5]

let icons = ['facebook', 'twitter', 'youtube']

const SampleUserWidget6 = () => <UserWidget6 user={user} icons={icons} />

export default SampleUserWidget6
