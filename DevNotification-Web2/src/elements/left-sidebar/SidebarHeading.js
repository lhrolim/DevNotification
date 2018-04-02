import React from 'react'
import SidebarHeadingImage from './SidebarHeadingImage'
import SidebarHeadingDropdown from './SidebarHeadingDropdown'
import '../../css/elements/sidebar-heading-1.css'
import '../../css/elements/collapsed-sidebar-heading-1.css'

const SidebarHeading = () => (
  <div className="sidebar-heading sidebar-heading-1 text-center">
    <SidebarHeadingImage />
    <SidebarHeadingDropdown />
  </div>
)
export default SidebarHeading
