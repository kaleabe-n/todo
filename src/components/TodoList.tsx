import Todo from "../models"
import SingleTodo from "./SingleTodo";

interface Props  {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


function TodoList({todos,setTodos}:Props){
    return (
        <div className="m-5 d-flex flex-wrap">
            {todos.map((todo)=>(
            <div key={todo.id}><SingleTodo setTodos={setTodos} todo = {todo} todos = {todos} key={todo.id}/></div>) )}
        </div>
    )
}

export default TodoList