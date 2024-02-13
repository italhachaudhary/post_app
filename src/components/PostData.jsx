import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PostData() {
  const [data2, setData2] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
        )
        .then((response) => {
          setData2(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, 1000);
  }, [start, limit]);

  const deleteCard = (id) => {
    const newData = data2.filter((current) => current.id !== id);
    setData2(newData);
    setPostIdToDelete(null);
  };

  const confirmMessage = (id) => {
    setPostIdToDelete(id);
    setConfirm(true);
  };

  const hideConfirmMessage = () => {
    setConfirm(false);
    setPostIdToDelete(null);
  };

  return (
    <div className="container main-card">
      <Link to="/addpost">
        <button className="btn btn-primary mb-3">Add Post</button>
      </Link>
      {loading ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        data2.map((post) => (
          <>
            <div className="card mb-3" key={post.id}>
              <div className="card-body">
                <h3 className="card-title">
                  {post.id}- {post.title}{" "}
                </h3>
                <p className="card-text text-black">{post.body}...</p>
                <Link to={`/details/${post.id}`} state={{ data2: post }}>
                  <button className="btn btn-success">View Details</button>
                </Link>
                <button
                  className="btn btn-secondary ms-2 delete-btn"
                  onClick={() => {
                    confirmMessage(post.id);
                  }}
                >
                  Delete
                </button>
                <Link to={`/edit/${post.id}`} state={{ data2: post }}>
                  <button className="btn btn-warning ms-2">Edit</button>
                </Link>
              </div>
            </div>
            {confirm && postIdToDelete === post.id && (
              <div className="mb-2">
                <strong>Are you sure ?</strong>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => deleteCard(post.id)}
                >
                  Yes
                </button>
                <button
                  className="btn btn-primary ms-2"
                  onClick={() => hideConfirmMessage()}
                >
                  No
                </button>
              </div>
            )}
          </>
        ))
      )}
      <div>
        <select
          name=""
          id=""
          className="mb-3 btn btn-primary"
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
