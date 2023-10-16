import React, { useState } from "react";

export default function TaskBar({ addTodo }) {
  // State variables to hold the title and description input values
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Function to handle the form submission
  const submit = async (e) => {
    e.preventDefault();

    // Check if the title and description fields are empty
    if (!title || !desc) {
      alert("Write something to do");
      return;
    }

    // Call the addTodo function from props to update the list locally
    addTodo(title, desc);

    try {
      // Create an object with title and desc to send in the POST request
      const body = { title, desc };

      // Make an asynchronous POST request to a local endpoint
      await fetch('http://localhost:5000/ListItems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.warn('Something is not good');
    }

    // Clear the input fields after submission
    setTitle("");
    setDesc("");
  };

  return (
    <form className="container" onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input
          type="text"
          name="desc"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          className="form-control"
          id="desc"
        />
      </div>

      <button type="submit" className="btn btn-sm btn-success">
        Submit
      </button>
    </form>
  );
}
