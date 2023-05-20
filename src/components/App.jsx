import React, { useState } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import Addnote from './Addnote';



function App() {

    const[newItem, setNewItem] = useState([])

    function addNote(newNote){
        setNewItem(prevNotes => {
           return [...prevNotes, newNote]
        })
    }

    function deleteNote(id){
        setNewItem(prevNotes => {
            return prevNotes.filter((noteItem , index) =>{
                return index !== id
            })
        })
    }

    return (
    <div>
        <Header />
        
        <Addnote 
        onAdd={addNote} />

        {newItem.map((note, index) => { 
            return (
            <Note
            key = {index}
            id = {index}
            onDelete = {deleteNote}
            title = {note.title}
            content = {note.content}
            />
            )
    })}


        <Footer />
    </div>
    )
}

export default App