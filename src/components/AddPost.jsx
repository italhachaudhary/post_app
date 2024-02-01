import React, { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body, userId };
    console.log(data);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("Post submitted successfully!");
          console.log(response);
        } else {
          throw new Error("Failed to submit post.");
        }
      })
      .catch((error) => {
        console.error(error);
        setSuccessMessage("Failed to submit post.");
      });
  };

  return (
    <div>
      <form className="container addPost" onSubmit={handleSubmit}>
        <h1 className="text-center">Add Post</h1>
        {successMessage && <p>{successMessage}</p>}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label ">Body</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User ID</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setUserId(e.target.value)}
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
