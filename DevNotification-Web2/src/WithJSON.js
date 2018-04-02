/**
 * React HOC for loading JSON data from url as props
 * @param as puts results in [as] key 
 **/
import React from 'react'

const withJSON = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loader: false,
        [this.props.as]: null,
        data: {}
      }
    }

    componentDidMount() {
      fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            data: data,
            [this.props.as]: data,
            loaded: true
          })
        })
    }

    render() {
      let newProps = {...this.state.data}
      let newPropsAs = {...this.state.as}
      let loaded = this.state.loaded
      if (!loaded) {
        return <div />
      }
      return (
        <Component
          {...this.props}
          {...this.state}
          {...newProps}
          {...newPropsAs}
        />
      )
    }
  }
}

export default withJSON
