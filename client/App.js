import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      response: ''
    }
    this.inputStyle = {
      width: '240px',
      height: '30px',
      fontSize: '16px',
    }
    this.pStyle = {
      fontSize: '16px'
    }
  }
  updateInput(datuh) {
    this.setState({input: datuh});
  }
  launchPayload(dutah) {
    Axios.post('/input', dutah)
      .then(data => this.setState({response: data}))
      .catch(err => console.log(err, 'failed to post'))
  }
  componentDidMount() {
    Axios.get('/input')
      .then(data => this.setState({response: data}))
      .catch(err => console.log(err, 'failed to fetch'))
  }
  render() {
    return (
      <>
        <input 
          type='text'
          placeholder='High-quality placeholder text'
          style={this.inputStyle}
          onChange={event => this.updateInput(event.target.value)}
          onKeyDown={event => event.key === "Enter" ? (this.launchPayload(this.state.input), event.target.value = null ): null }
        >
        </input>
        <p style={this.pStyle}></p>
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));