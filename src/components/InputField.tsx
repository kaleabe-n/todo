import { useRef } from "react";

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}


function InputField({todo,setTodo,handleAdd}:Props){
    let inputRef:React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    let handleSubmit = (e:React.FormEvent)=>{
        if(todo){
            inputRef.current?.blur()
            setTodo("")
        }else{
            inputRef.current?.focus()
        }
        handleAdd(e)
    }

    return (
        <div className="text-center m-5">
            <form className="input-group" onSubmit={handleSubmit}>
                <input value={todo} onChange={
                    (e)=>setTodo(e.target.value)
                    } type="input" ref={inputRef} className="display-relative form-control"/>
                <button type="submit" className="btn bg-primary input-group-append text-light zindex-tooltip">Go</button>
            </form>  
        </div>
    )
}

export default InputField;