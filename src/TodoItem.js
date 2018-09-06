import React, {Component} from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    const {test, content} = this.props
    return (
        <div onClick={this.handleClick}>
          {test} - {content}
        </div>
    )
  }

  handleClick() {
    const {handleItemDelete, index} = this.props;
    handleItemDelete(index);
  }
}

export default TodoItem