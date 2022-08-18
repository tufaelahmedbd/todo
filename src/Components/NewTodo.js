import React,{useState} from 'react';
import style from './newtodo.module.css';
function NewTodo(props) {
    const [todo,setTodo]=useState({title:"",desc:""})
    const {title,desc}=todo;
    const handleChange=(event)=>{
        const name=event.target.name;
        setTodo((oldTodo)=>{
            return{...oldTodo, [name]:event.target.value}
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"",desc:""})
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title</label>
                <input type="title" id="title" name="title" value={todo.title} onChange={handleChange} required/>
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="desc">Description</label>
                <input type="desc" id="desc" name="desc" value={todo.desc}
                       onChange={handleChange} required/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodo;