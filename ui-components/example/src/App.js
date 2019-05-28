import React, { Component } from 'react'

import ExampleComponent from '@rws-air/ui-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent label='Modern React component module' onClick={() => console.log('vbll')} />
      </div>
    )
  }
}
