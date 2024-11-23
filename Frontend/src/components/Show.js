import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Show() {
  const [details, setdetails] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:9090/articles")
      .then((response) => {
        console.log(response.data);
        setdetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <h1> Details </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col">CreatorName</th>
          </tr>
        </thead>
        <tbody>
          {details &&
            details.map((details) => {
              return (
                <tr>
                  <td>{details.id}</td>
                  <td>{details.name}</td>
                  <td>{details.category}</td>
                  <td>{details.dateCreated}</td>
                  <td>{details.creatorName}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
