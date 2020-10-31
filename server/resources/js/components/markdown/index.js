import React, { Component } from 'react'
import MarkdownEditor from './editor'
import MarkdownViewer from './viewer'

class Markdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <div className="markdown-container">
        <MarkdownEditor text={ this.state.text } onChangeText={ this.onChangeText.bind(this) } />
        <MarkdownViewer text={ this.state.text } />
      </div>
    )
  }

  onChangeText (text) {
    this.setState({ text })
  }
}

export default Markdown