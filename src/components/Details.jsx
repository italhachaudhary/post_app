import React from "react";
import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  return (
    <div className="container">
        <div className="card mb-3" key={state.id}>
          <div className="card-body">
            <h3 className="card-title">{state.title}</h3>
          <p className="card-text text-black">{state.body}</p>
          <p className="card-text text-black">{state.id}</p>
          </div>
        </div>
  </div>
  );
}
