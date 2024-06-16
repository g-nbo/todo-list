import { useState } from "react"
function ToDoItem(props) {


    const [removed, setRemoved] = useState(false)
    const [liText, setLiText] = useState(props.todo.title)
    const [completed, setCompleted] = useState(props.todo.completed)
    const [editing, setEditing] = useState(false)
    const [saved, setSaved] = useState(false)



    function handleChange(e) {
        e.preventDefault();
        setLiText(e.target.value)
    }

    return (
        <>
            {
                !removed ?

                    <form className="formBox" onSubmit={handleChange}>
                        <div>
                            <input onChange={() => setCompleted(!completed)} disabled={editing} checked={completed} type="checkbox" name={props.todo.id} id={props.todo.id} />
                            <label htmlFor={props.todo.id}> {editing ? saved ? liText : <input onChange={e => handleChange(e)} value={liText} type="text" /> : liText}</label>
                        </div>


                        <div>
                            {
                                editing ?
                                    "" :
                                    <button onClick={() => {
                                        setEditing(true)
                                        setSaved(false)
                                        setCompleted(false)

                                    }}>Edit</button>

                            }

                            {
                                editing ?
                                    <button onClick={() => {
                                        setSaved(true)
                                        setEditing(false)
                                    }} >Save</button> :

                                    <button disabled={!completed} onClick={() => setRemoved(true)}>Delete</button>

                            }
                        </div>

                    </form> :
                    ""
            }






        </>


    )
}

export default ToDoItem