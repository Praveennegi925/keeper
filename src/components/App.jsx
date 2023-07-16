import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [titleText,setTitle]=useState('');
  let [contentText,setContent]=useState('');
  let [noteArray,setNoteArray]=useState([]);
  let [noteObj,setnoteObj]=useState({
           title:"",
           content:""
  });
 
   function handleTitle (event){
     titleText=event.target.value;
     setTitle(titleText);
     setnoteObj((preVal)=>{
      return {
        title:titleText,
        content:preVal.content
       }  
     })
   }

  function handleContent(event){
     contentText=event.target.value;
     setContent(contentText);
     setnoteObj((preVal)=>{
      return {
        title:preVal.title,
        content:contentText
       }  
     });
     
  }
  function addNote(){
     if(noteObj.title==="" || noteObj.content===""){
      return;
     }
     setContent("");
     setTitle("");
     setnoteObj((preVal)=>{
      return {
        title:"",
        content:""
       }  
     });
     setNoteArray(prevItems => {
      return [...prevItems, noteObj];
    });
    
  }
    function deleteNote(id){
 
      setNoteArray(preVal=>{
          return preVal.filter((item,index)=>{
             return id!==index;
          }); 
      });
    }

  return (
    <div>
      <Header />
      <CreateArea handleTitleFunc={handleTitle} handleContentFunc={handleContent} addNoteFunc={addNote}/>
      {
        noteArray.map((element,index)=>(<Note key={index} title={element.title} content={element.content}  id={index} deleteFunc={deleteNote} />))
      }
      <Footer />
    </div>
  );
}

export default App;