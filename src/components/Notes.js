import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteContext } from "../context/NoteState";
import Alert from "./Alert";
import NoteItem from "./NoteItem";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";

function Notes() {
  const ref = useRef(null);
  const context = useContext(NoteContext);
  const { notes, usernote } = context;
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
  const navigate = useNavigate("")

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }else{
      usernote();
      navigate("/home")
    }
    // eslint-disable-next-line
  }, []);

  const updateToast = (value) => {
    ref.current.click();
    setNote({
      id:value._id,
      etitle: value.title,
      edescription: value.description,
      etag: value.tag,
    });
  };

  return (
    <div>
      <span
        ref={ref}
        className="hide"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
      </span>

      <h1 className="my-3">Notes</h1>
      <div className="row">
        {notes.length===0 && <div className="container">No Notes Available</div>}
        {notes.map((notes, index) => {
          return (
            <NoteItem key={index} updateToast={updateToast} notes={notes} />
          );
        })}
      </div>

      <EditModal updateToast={updateToast} setNote={setNote} note={note} />
      <Alert />
    </div>
  );
}

export default Notes;
