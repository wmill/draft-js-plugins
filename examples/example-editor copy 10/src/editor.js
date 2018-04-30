import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';

// Always import Draft.css
import 'draft-js/dist/Draft.css';

import './editor.css'

class App extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    plugins: [] // put your plugins in here, they'll be passed on to the Editor
  }

  onChange = editorState = this.setState({ editorState })

  render() {
    return (
      <Editor
        onChange={this.onChange}
        editorState={this.state.editorState}
        plugins={this.state.plugins}
      />
    );
  }
}

export default App;
