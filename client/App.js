import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      input: ''
    }
  }

  addTodo() {
    axios.post('http://localhost:3000/todos', {data: this.state.input})
      .then((data) => console.log('Made it there and back again!'))
  }
  componentDidMount() {
    axios.get('http://localhost:3000/todos')
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <input 
          classname={'input'} 
          type={'text'}
          onChange={(event)=>this.setState({input: event.target.value})}
          onKeyDown={ event => event.key === "Enter" ? this.addTodo() : null }
        >
        </input>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));