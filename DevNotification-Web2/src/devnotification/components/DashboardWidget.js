import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';

import '../../css/elements/widget.css'

function mapStateToProps(state) {
  return {
    loading: state.global.loading
  };
}


const Widget = ({ title, description, children, loading }) => {
  return (
    <div>
      {loading ? (
        <div style={{ position: 'absolute', left: '50%', right: '50%' }}>
          <RingLoader />
        </div>
      ) : (<div className="widget dashboard-widget">
        <div className="row">
          <div className="col-12 col-md-9">
            <div className="title">{title}</div>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="col-12 col-md-3 ml-auto text-right right-icons">
            <i className="material-icons">cached</i>
            {/* <i className="material-icons">timeline</i> */}
          </div>
        </div>
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>)}
    </div>
  )
}

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string
  ])
}

export default connect(mapStateToProps)(Widget)
