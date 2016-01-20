import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';

main();

function main() {
  ReactDOM.render(<Hello />, document.getElementById('app'));
}
