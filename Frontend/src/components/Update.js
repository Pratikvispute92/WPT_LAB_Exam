import React from "react";

export default function Update() {
  return (
    <div className="container">
      <h1>Updates  Deatils</h1>
      <form action="">
        <input type="Number" placeholder=" id" />
        <br />
        <input type="text" placeholder=" name" />
        <br />
        <input type="text" placeholder=" category" />
        <br />
        <input type="Date" placeholder=" Date" />
        <br />
        <input type="text" placeholder=" creatorName" />
        <br />
        <button class="btn btn-outline-success">Update</button>
      </form>
    </div>
  );
}
