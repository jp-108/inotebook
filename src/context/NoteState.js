import React, {createContext, useState} from "react";

export const NoteContext = createContext();

const NoteState = (props)=>{
  let host = "http://localhost:5400/route"
  const initialNote =[];

  const [notes, setNotes] = useState(initialNote)

    let usernote = async()=>{ 
      let note = await fetch(`${host}/fetchnotes`,{
      method:"get",
      headers:{
        "Content-Type": "application/json",
        "Authorization" : localStorage.getItem('token')
      }
    })
   note = await note.json();
    setNotes(note)
  }

    
    // Add Note
      const addNote =async(title, description, tag)=>{
        let note = await fetch(`${host}/addnotes`,{
          method:"post",
          body: JSON.stringify({title, description, tag}),
          headers:{
            "Content-Type": "application/json",
            "Authorization" : localStorage.getItem('token')
          }
        }
        )
        note =await note.json(); 
        setNotes(notes.concat(note))
      }

    // Delete Note
 const deleteNote =  async (id)=>{
  let note = await fetch(`${host}/delete/${id}`,{
    method:"delete",
    body: JSON.stringify({id}),
    headers:{
      "Content-Type": "application/json",
      "Authorization" : localStorage.getItem('token')
    }
  }
  )
    // eslint-disable-next-line
    note =await note.json();
    const newNote = (notes.filter((note)=>{return note._id !== id}))
    setNotes(newNote)  
      }

    // Edit Note

    const editNote = async(id, title, description, tag)=>{
      let note = await fetch(`${host}/update/${id}`,{
        method:"put",
        body: JSON.stringify({title, description, tag}),
        headers:{
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem('token')
        }
      }
      )
      // eslint-disable-next-line
      note =await note.json();
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id){
          element.title=title;
          element.description=description;
          element.tag=tag;
          break;
        }
      }
      const newNote =  JSON.parse(JSON.stringify(notes)) 
      //const newNote = (notes.filter((note)=>{return note})) <== this can also work
      setNotes(newNote) 
      console.log(newNote)

    }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, usernote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;