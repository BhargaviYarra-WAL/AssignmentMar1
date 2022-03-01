import React from "react";
import Hobbies from "./Hobbies.js";
import ShowProductAndPrice from "./ShowProductAndPrice.js";
import "./App.css";
import BetterCounter1 from "./BetterCounter1.js";
import TodoApp from "./TodoApp";
import ShowNameAndAge from "./ShowNameAndAge";
import Forum from "./Forum.js";
import Add from "./Add.js";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AddTodo from "./TutorialMarch1/AddTodo.js";
import TodoCount from "./TutorialMarch1/TodoCount.js";
import TodoList from "./TutorialMarch1/TodoList.js";
import TodoUseContext from './TodoUseContext'
import TodosApp from "./TodosApp.js";
const App = () => {
  const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]); 
  const todoUse=[{ item: "Reading", status: "incomplete" }]
  return (
    <div className="App">
      <TodoUseContext.Provider value={todoUse}>
        <TodosApp/>
      </TodoUseContext.Provider>
      
      
      {/*<BrowserRouter>
        <Link to="/bettercounter1">Better Link Counter</Link><br />
        <Link to="/hobbies">Better Link Hobbies</Link><br />
        <Link to="/show/bhargavi/21">Show Name And Age</Link><br />
        <Link to="/bettercounter1/todo">Todo as child</Link><br />
        <Link to="/forum/add">Add as child</Link><br />
        <Link to="/showprod/Realme7/16,000Rs">Show Product And Price</Link><br />

        <Routes>
          <Route path="/bettercounter1" element={<BetterCounter1 />}>
            <Route path="todo" element={<TodoApp />} />
          </Route>

          <Route path="/forum" element={<Forum />}>
            <Route path="add" element={<Add />} />
          </Route>

          <Route path="/hobbies" element={<Hobbies />} />

          <Route path="/show/:name/:age" element={<ShowNameAndAge />} />

          <Route path="/showprod/:name/:price" element={<ShowProductAndPrice />} />
        </Routes>
      </BrowserRouter>
      <Add></Add>
      <TodoCount  todos={todos}  />
      <TodoList todos={todos} />
      <AddTodo  setTodos={setTodos} />
*/}
      
      

    </div>
  );
}
export default App;