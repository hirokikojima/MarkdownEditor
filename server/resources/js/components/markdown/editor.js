import React, { Component } from 'react'

class MarkdownEditor extends Component {
  render () {
    const {
      text
    } = this.props

    return (
      <div className="editor">
        <textarea value={ text } onChange={ this.handleOnChangeText.bind(this) } />
      </div>
    )
  }

  handleOnChangeText (e) {
    this.props.onChangeText(e.target.value)
  }

  
}

export default MarkdownEditor