import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !body && !userId && !id) {
      setError("Please enter all fields.");
      return;
    }

    if (title.length < 5) {
      setError("Title must be at least 5 characters long.");
      return;
    }

    if (body.length > 500) {
      setError("Body must be less than 500 characters long.");
      return;
    }

    if (!userId || userId <= 0) {
      setError("Please enter a valid user ID.");
      return;
    }

    if (!id || id <= 0) {
      setError("Please enter a valid ID.");
      return;
    }

    const data = { title, body, userId, id };
    console.log(data);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form className="container addPost">
        <h1 className="text-center">Add Post</h1>
        <Link to="/">
          <button className="btn btn-primary">
            <i class="bi bi-arrow-left-circle-fill me-2"></i>
            Back
          </button>
        </Link>
        {error && <div className="alert alert-danger mt-3">{error}</div>}

        <div className="mb-3 mt-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label ">Body</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User ID</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
