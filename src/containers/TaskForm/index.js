import React from 'react';
import { connect } from 'react-redux';

let TaskForm = ({ dispatch }) => {

  let userName = null;
  let userEmail = null;
  let taskText = null;
  let imageUrl = null;

  function handleSubmit(e) {
    e.preventDefault();
    
    let username = userName.value;
    let email = userEmail.value;
    let text = taskText.value;
    let image = imageUrl;

    dispatch({ type: "REQUEST_ADD_TASK", username, email, text, image });
  }

  function handleChange() {
    let reader = new FileReader();
    let file = imageUrl.files[0];

    reader.onloadend = function () {
      imageUrl = reader.result;
    }
    reader.readAsDataURL(file)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="userName"
        name="userName"
        type="text"
        ref={input => { userName = input }} />
      <input
        id="userEmail"
        name="userEmail"
        type="email"
        ref={input => { userEmail = input }} />
      <input
        id="taskText"
        name="taskText"
        type="text"
        ref={input => { taskText = input }} />
      <input
        id="imageUrl"
        name="imageUrl"
        type="file"
        ref={input => { imageUrl = input }}
        onChange={handleChange} />
      <button type="submit">add</button>
    </form>
  )
};

TaskForm = connect()(TaskForm)

export default TaskForm;