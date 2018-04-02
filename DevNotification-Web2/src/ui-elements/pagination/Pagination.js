import React from 'react'
import {connect} from 'react-redux'
import SamplePagination from './SamplePagination'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/pagination.css'

const Pagination = ({colors}) => (
  <div className="row">
    <div className="col">
      {Object.keys(colors).map((color, i) => (
        <Widget
          title={`Pagination using ${color} colors`}
          description={`Use the <code>.pagination-${color}</code> className along with the <code>.pagination</code> className for ${color} color pagination links. Use the <code>.pagination-sm</code> and the <code>.pagination-lg</code> classNames for additional sizes.`}
          key={i}>
          <SamplePagination
            className={`pagination pagination-sm pagination-${color}`}
          />
          <SamplePagination className={`pagination pagination-${color}`} />
          <SamplePagination
            className={`pagination pagination-lg pagination-${color}`}
          />
        </Widget>
      ))}
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
