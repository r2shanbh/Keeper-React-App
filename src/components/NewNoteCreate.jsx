import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { field, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [field]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    // to empty new note block
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          field="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          field="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Content"
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
