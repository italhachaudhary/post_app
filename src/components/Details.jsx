import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const post = location.state.data2;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="card mb-3" key={post.id}>
            <div className="card-body">
              <Link to="/">
                <button className="btn btn-primary">
                  <i class="bi bi-arrow-left-circle-fill me-2"></i>
                  Back
                </button>
              </Link>
              <h3 className="card-title mt-3">{post.title}</h3>
              <p className="card-text text-black">{post.body}</p>
              <p className="card-text text-black">{post.id}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
