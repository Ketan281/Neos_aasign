import React, {useState} from 'react';
import './NewTodoForm.css'
import { connect } from 'react-redux';
import { createTodo } from './actions';
const NewTodoForm = ({todos , onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return(
        <div className='new-todo-form'>
            <input type="text" 
            className="new-todo-input"
            value={inputValue}
            placeholder =" type your todo !!!"
            onChange = { e => setInputValue(e.target.value)}
            />
            <button 
            onClick ={ ()=>{
                //check for duplicate text
                const isDuplicateText =
                    todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText){
                    onCreatePressed(inputValue);
                    setInputValue("")
                }
                
            }}
            
            className="new-todo-button">
                Create Todo
                
            </button>
        </div>
    );
 }

 //is a object that is full state
 //is to take state and return a another object
 const mapStateToProps = state =>({
     todos :state.todos,
 });

 //is a function that allows trigger actions redux store respose too!
 const mapDispatchToProps = dispatch =>({
    onCreatePressed : text => dispatch(createTodo(text))
 });

 //exporting connected component
export default connect(mapStateToProps,mapDispatchToProps) (NewTodoForm);