import React from 'react'
import {connect} from 'react-redux'
import {changeInput, addItem, deleteItem} from './store/actionCreator'

const TodoList = (props) => {
    const {inputValue, changeInputValue, handleClick, handleDelete} = props
    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    props.list.map((item, index) => {
                        return (
                            <li onClick={()=>handleDelete(index)} key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = changeInput(e.target.value)
            dispatch(action)
        },
        handleClick(){
            const action = addItem()
            dispatch(action)
        },
        handleDelete(index){
            const action = deleteItem(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)