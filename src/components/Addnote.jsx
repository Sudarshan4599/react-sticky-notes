import React, { useState, } from 'react';
import Fab from "@material-ui/core/Fab"
import Zoom  from '@material-ui/core/Zoom';


function Addnote(props){

    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        title : "",
        content : ""
    })

    function handleChange(event){
        const {name, value} = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }


    function handleClick (event){
            props.onAdd(note)
            setNote({
                title : "",
                content : ""
            })
            event.preventDefault()
    }

    function expand () {
        setExpanded(true)
    }

    return (
        <div>
            <form className='create-note'>
                {isExpanded && (<input 
                onChange={handleChange}
                name="title" 
                placeholder='Title' 
                value={note.title} 
                />
                )}

                <textarea 
                onClick={expand}
                onChange={handleChange}
                name='content' 
                placeholder='Take a Note...' 
                rows={isExpanded ? 3 :2}
                value={note.content}
                />
            <Zoom in={isExpanded}>   
                <Fab onClick={handleClick}> 
                <h1> + </h1>
                </Fab>
                </Zoom>  
            </form>
        </div>
    )
}

export default Addnote