import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostData() {
  const [data2, setData2] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData2(data));
  }, []);

  const deleteCard = (id) => {
    const newData = data2.filter((current) => current.id !== id);
    setData2(newData);
  };

  return (
    <div className="container main-card">
      {data2.map((post) => (
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
                className="btn btn-secondary ms-2"
                onClick={() => {
                  deleteCard(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="mb-2 hide">
            <strong>Are you sure ?</strong>
            <button className="btn btn-danger ms-2 ">Yes</button>
            <button className="btn btn-primary ms-2 ">No</button>
          </div>
        </>
      ))}
    </div>
  );
}
