import { useEffect, useRef, useState } from "react";
import Todo from "../models"
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'
import {MdOutlineDone} from 'react-icons/md'

interface Props{
    todo:Todo;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    todos:Todo[];
}

function SingleTodo({todo,setTodos,todos}:Props){
    let editorRef:React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    let [isEditing,setIsEditing] = useState(false)
    let [currTodo,setCurrTodo] = useState(todo.todo)
    let currId = todo.id

    useEffect(()=>{editorRef.current?.focus()},[isEditing])

    function handleEdit(e:React.FormEvent){
        e.preventDefault()
        setTodos(todos.map((t)=>{
            if(t.id ===todo.id){
                if(currTodo){
                    t.todo = currTodo
                }else{
                    setCurrTodo(t.todo)
                }
                return t
            } else{
                return t
            }
        }))

    }
    let onDelete:()=>void = ()=>{
        setTodos(todos.filter((todo)=>todo.id!==currId))
    }

    let onComplete:()=>void = ()=>{
        setTodos(todos.map((t)=>{
            if(t.id ===currId){
                t.isDone = !t.isDone
                return t
            } else{
                return t
            }
        }))
        console.log(todos)

    }

    return (
        <div className={!todo.isDone?"bg-info todo-card":"bg-success todo-card"} >
            <form className="d-flex justify-content-between" onSubmit={handleEdit}>{
                !isEditing?
                todo.isDone?(<s className="my-1 mx-2">{currTodo}</s>):(<p className="my-1 mx-2">{todo.todo}</p>):
                <input type="input" ref={editorRef} value={currTodo} onChange={(e)=>setCurrTodo(editorRef.current!.value)}/>
                }
                <div>
                    <button type="submit" className="btn bg-none p-0 m-1" onClick={()=>setIsEditing(!isEditing) }><AiFillEdit/></button>
                    <button type="button" className="btn bg-none p-0 m-1" onClick={onDelete}><AiFillDelete/></button>
                    <button type="button" className="btn bg-none p-0 m-1" onClick={onComplete}><MdOutlineDone/></button>
                </div>

            </form>
        </div>
    )
}

export default SingleTodo