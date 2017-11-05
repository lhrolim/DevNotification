import React from 'react'
import UserWidget1 from './UserWidget1'
import users from '../json/users.json'

let user = users[0]

const SampleUserWidget1 = () => <UserWidget1 user={user} />

export default SampleUserWidget1
