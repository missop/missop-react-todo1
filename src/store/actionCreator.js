import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODOLIST, GET_INIT_LIST} from './actionTypes'
export const changeInput = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})
export const addTodos = () => ({
    type: ADD_TODO_ITEM
})
export const deleteTodos = (index) => ({
    type: DELETE_TODO_ITEM,
    index: index
})
export const initTodoList = (todoList) => ({
    type: INIT_TODOLIST,
    list: todoList
})
export const getInitList = () => ({
    type: GET_INIT_LIST
})