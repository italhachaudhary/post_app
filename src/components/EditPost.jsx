import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EditPost() {
  const location = useLocation();
  const post = location.state.data2;

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      .then((response) => {
        const { title, body } = response.data;
        setTitle(title);
        setBody(body);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [post.id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !body) {
      setError("Please enter all fields.");
      return;
    }

    if (!title) {
      setError("Please enter a title.");
      return;
    }

    if (!body) {
      setError("Please enter a body.");
      return;
    }

    const data = { title, body };
    console.log(data);

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      {loading ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container editPost">
          <h1 className="text-center">Edit Post</h1>
          <Link to="/">
            <button className="btn btn-primary">
              <i class="bi bi-arrow-left-circle-fill me-2"></i>
              Back
            </button>
          </Link>
          {error && <div className="alert alert-danger">{error}</div>}
          <form action="">
            <div className="mb-3 mt-3">
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
      )}
    </div>
  );
}
