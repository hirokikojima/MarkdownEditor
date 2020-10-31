import React, { Component } from 'react'

class MarkdownViewer extends Component {
  render () {
    const {
      text
    } = this.props

    return (
      <div className="viewer">
        <span>{ text }</span>
      </div>
    )
  }
}

export default MarkdownViewer