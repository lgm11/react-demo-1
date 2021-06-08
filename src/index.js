import React from 'react';
import reactDom from 'react-dom'
import Component from './aaa.js';
import App from './App.js'



reactDom.render(<App />,document.getElementById('root'))
reactDom.render(<Component />,document.getElementById('aaa'))