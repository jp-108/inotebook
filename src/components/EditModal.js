import React, { useContext,useRef } from "react";
import { NoteContext } from "../context/NoteState";
import toast from "react-hot-toast";

function EditModal(props) {
  const closeRef = useRef(null);
  const { note, setNote } = props;
  const { editNote } = useContext(NoteContext);

  
  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  
  const saveChanges = () => {
    closeRef.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    toast.success("Updated " + note.etitle);
  };

  return (
    <div className="container">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="container">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  value={note.etitle}
                  name="etitle"
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
                  id="edescription"
                  value={note.edescription}
                  name="edescription"
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
                  id="etag"
                  value={note.etag}
                  name="etag"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={closeRef}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveChanges}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
