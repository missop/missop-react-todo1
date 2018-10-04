import React, {Component} from 'react'
import TodoListUI from './TodoListUI'
import store from './store'
import {getInitList, changeInput, addTodos, deleteTodos} from './store/actionCreator'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    handleInputChange(e) {
        const action = changeInput(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleButtonClick() {
        const action = addTodos();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = deleteTodos(index)
        store.dispatch(action)
    }
}

export default TodoList