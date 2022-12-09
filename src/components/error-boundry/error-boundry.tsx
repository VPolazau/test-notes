import React, { Component } from 'react'

import ErrorIndicator from '../error-indicator'

interface IProps {
  children?: React.ReactNode
}

interface IState {
  hasError: boolean
}

export default class ErrorBoundry extends Component <IProps, IState>{
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children
  }
}
