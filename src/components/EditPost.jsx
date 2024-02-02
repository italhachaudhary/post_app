import React, { useState } from "react";
import { useLocation } from "react-router";

export default function EditPost() {
  const location = useLocation();
  const post = location.state.data2;

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, body };
    console.log(data);

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="container editPost">
        <h1 className="text-center">Edit Post</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Body
            </label>
            <input
              type="text"
              className="form-control"
              value={body}
              onChange={handleBodyChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
