import React from "react";

function CreateArea(props) {
  function handleSubmit(event){
    event.preventDefault(); 
    document.getElementById("title").value="";
    document.getElementById("content").value="";
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={props.handleTitleFunc} id="title" name="title" placeholder="Title" />
        <textarea onChange={props.handleContentFunc} id="content" name="content" placeholder="Take a note..." rows="3" />
        <button onClick={props.addNoteFunc}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;