import './bootstrap.min.css'
import './index.css';
import  InputField  from './components/InputField'
import { useState } from 'react';
import Todo from './models';
import TodoList from './components/TodoList';

function App() {
    let [todos,setTodos] = useState<Todo[]>([])
    let [todo,setTodo] = useState<string>("")

    const handleAdd = (e:React.FormEvent)=>{
        e.preventDefault()
        if (todo)
        {
          let newTodo:Todo = {
            id : Date.now(),
            todo : todo,
            isDone : false
          }
          setTodos([...todos,newTodo])
        }       
      }
          
  
    return (
    <div className="App">
      <div className="boxes">
        <header className="App-header bg-primary p-3 text-center zindex-dropdown">
          <span className='header text-light display-5 m-auto'>Taskify</span>
        </header>
        <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
      </div>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>

  );
}

export default App;
