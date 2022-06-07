import React from 'react'
import ReactDOM from 'react-dom';

import Editor from './components/Editor';

console.log(window.location.pathname)
ReactDOM.render(<Editor/>, document.getElementById('editor'));