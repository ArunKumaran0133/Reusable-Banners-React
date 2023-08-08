import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickMe = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
    console.log('clickMe Clicked')
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">
          The Button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="click-me-para">Click the button to increase the count!</p>
        <button className="button" onClick={this.clickMe} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
