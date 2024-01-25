import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../components/PostData";

export default function Details() {
  const { id } = useParams();
  const post = data.find((post) => post.id == id);

  return (
    <div>
      <div className="container">
        <div className="card mb-3" key={post.id}>
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text text-black">{post.body}</p>
            <p className="card-text text-black">{post.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
