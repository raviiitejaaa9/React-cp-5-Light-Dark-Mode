// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {count: 0}

  onBtnClk = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    let reqEl

    if (count % 2 === 0) {
      reqEl = (
        <div className=" bg-black">
          <h1 className="head-light"> Click To Change Mode </h1>
          <button className="button" type="button" onClick={this.onBtnClk}>
            Light Mode
          </button>
        </div>
      )
    } else {
      reqEl = (
        <div className="bg-white">
          <h1 className="head-dark"> Click To Change Mode </h1>
          <button className="button" type="button" onClick={this.onBtnClk}>
            Dark Mode
          </button>
        </div>
      )
    }

    return <div className="bg-container">{reqEl}</div>
  }
}

export default LightDarkMode
