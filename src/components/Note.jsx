import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from '@material-ui/icons/Update';

function Note(props) {

  const [note, setNote] = React.useState({
    title: props.title,
    content: props.content
  })
  
  function handleChange(event){
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }
  
  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleUpdate(){
    props.onUpdate(props.id, note);
  }

  return (
    <div className="note">
      <input name="title" value={note.title} onChange={handleChange} />
      <textarea  name="content" onChange={handleChange} value={note.content}></textarea>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <button onClick={handleUpdate}>
        <UpdateIcon />
      </button>
    </div>
  );
}

export default Note;
