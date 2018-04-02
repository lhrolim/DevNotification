import React from 'react'
import UserWidget7 from './UserWidget7'
import users from '../json/users.json'

let user = users[6]

const SampleUserWidget7 = () => <UserWidget7 user={user} />

export default SampleUserWidget7
