import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteState";
import toast from "react-hot-toast";

function AddNotes() {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const addToast = () => toast.success("Added " + note.title);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    addToast();
    setNote({
      title: "",
      description: "",
      tag: "",
    })
  };

  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="my-3">Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={note.title}
            name="title"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={note.description}
            name="description"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
          Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={note.tag}
            name="tag"
            onChange={handleOnChange}
          />
        </div>
        <button disabled={ note.title.length === 0 || note.description.length===0 || note.tag.length===0 } type="submit" className="btn btn-info" onClick={handleSubmit}>
          Add note
        </button>
      </form>
    </div>
  );
}

export default AddNotes;
