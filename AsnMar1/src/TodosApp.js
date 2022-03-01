import { useState, useContext, useReducer } from 'react';
import TodosReducer from './Todos.Reducer';
import TodoUseContext from './TodoUseContext';
const TodosApp = () => {
    const todoUse = useContext(TodoUseContext)
    const [item, setItem] = useState("")
    const [status, setStatus] = useState("")
    const [state, dispatch] = useReducer(TodosReducer, todoUse);
    const addTodo = () => {
        dispatch({ type: "add", item: item, status: status });
    }
    let deleteTodo = (indexToDelete) => {
        dispatch({ type: "delete", index: indexToDelete });
    }
    const clearAll = () => {
        dispatch({ type: "clearall" });
    }
    return (
        <div>
            <div className='TodosApp'>
                <h2>Todos Application</h2>
                <input type="text" name="item" placeholder="Enter A Todo Item" onInput={(e) => { setItem(e.target.value) }} />
                <select name="status"  onChange={(e)=>{setStatus(e.target.value)}}>
                    <option value="complete">complete</option>
                    <option value="incomplete">incomplete</option>
                </select><br />
                <button className="btn1" onClick={addTodo}>Add Todo</button>
                <button className="btn1" onClick={clearAll}>Clear All</button>
            </div>
            <div>
                <h2>Todos List</h2>
                {state.map((val, index) => (
                    <div className='demo'>
                        <p>Item: {val.item}</p>
                        <p>Status: {val.status}</p>
                        <button className="btn1" onClick={() => { deleteTodo(index) }}>Delete Todo</button>
                    </div>
                ))}
            </div>

        </div>
    )

}
export default TodosApp