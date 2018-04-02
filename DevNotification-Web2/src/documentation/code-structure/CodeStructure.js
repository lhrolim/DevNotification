import React from 'react'
import NamingConventions from './NamingConventions'
import ImportantFolders from './ImportantFolders'
import ImportantFiles from './ImportantFiles'

const CodeStructure = () => (
  <div className="row">
    <div className="col">
      <NamingConventions />
      <ImportantFolders />
      <ImportantFiles />
    </div>
  </div>
)
export default CodeStructure
