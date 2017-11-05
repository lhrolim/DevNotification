import React from 'react'
import Widget from '../../elements/DashboardWidget'
import UserWidget2 from '../../user-widgets/UserWidget2'
import users from '../../json/users.json'

const Section6 = () => (
  <Widget title="Users" description="Important customers">
    <UserWidget2 users={users} amount={5} />
  </Widget>
)
export default Section6
