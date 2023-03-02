import React, { useContext } from "react";
import { NoteContext } from "../context/NoteState";
import toast from "react-hot-toast";

export default function NoteItem(props) {
  const {  notes, updateToast } = props;
  const { deleteNote } = useContext(NoteContext);

  const updateNote = ()=>{
    updateToast(notes)
  }

  const deleteToast = () => {
    deleteNote(notes._id);
    toast.success(notes.title + " Deleted Successfully!", {
      className: "text-bg-danger",
    });
  };

  return (
    <div className="col-md-3 my-3">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <span className="card-icon">
            <i className="mx-2 fa fa-pen" onClick={updateNote}></i>
            <i className="fa fa-trash-can" onClick={deleteToast}></i>
          </span>
          <p className="card-text py-2">{notes.description}</p>
          {/* <p className="btn">{notes.date}</p> */}
        </div>
      </div>
    </div>
  );
}
