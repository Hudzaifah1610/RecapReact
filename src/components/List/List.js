import React from "react";
import "./List.css";
const List = ({ nomor, email, password }) => {
  return (
    <div className="card">
      <p>
       Name: {email}
      </p>
      <p>
       password: {password}
      </p>
    </div>
  );
};

export default List;
