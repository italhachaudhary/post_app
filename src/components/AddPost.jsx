import React, { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body, userId };
    console.log(data);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <form className="container addPost" onSubmit={handleSubmit}>
        <h1 className="text-center">Add Post</h1>
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
