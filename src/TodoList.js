import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import './App.css'
import axios from 'axios'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      list: ['study English', 'learn React']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    axios.get('/api.todolist')
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        })
  }

  render() {
    console.log('render');
    return (
        /*Fragment类似一个插槽，并不会渲染为一个标签*/
        <Fragment>
          <div>
            <label htmlFor="insertArea">输入内容</label>
            <input id="insertArea"
                   type="text"
                   className="input"
                   value={this.state.inputVal}
                   onChange={this.handleInputChange}/>
            <button onClick={this.handleButtonClick}>提交</button>
          </div>
          <ul ref={this.myRef}>
            {this.getTodoItem()}
          </ul>
        </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
              key={index}
              content={item}
              index={index}
              handleItemDelete={this.handleItemDelete}
          />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputVal: value
    }))
    /*错误 const value = e.target.value
    this.setState(() => ({
        inputVal: e.target.value
    }))*/
    /*不好 this.setState({
        inputVal: e.target.value
    })*/
  }

  handleButtonClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, this.state.inputVal],
      inputVal: ''
    }))
    /* this.setState({
         list: [...this.state.list, this.state.inputVal],
         inputVal: ''
     })*/
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    }, () => {
      console.log(this.myRef.current.children.length);
    })
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  test: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
  test: 'Hello pop'
}


export default TodoList