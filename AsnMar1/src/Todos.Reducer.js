const TodosReducer = (state, action) => {
    if (action.type == "add") {
        let todoOb={
            item:action.item,
            status:action.status,
        }
        let newTodo=[...state,todoOb];
        return newTodo
    }
    if (action.type == "delete") {
        console.log(action.index)
        let newState = state.filter(function (val,index) {
            if (action.index == index) {
                return false
            }
            return true
        })
        return newState
    }
    if (action.type == "clearall") {
        return ([])
    }


}
export default TodosReducer;