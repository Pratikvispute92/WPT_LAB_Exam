import React, { useRef, useState } from "react";
import axios from "axios";

export default function Add() {
  const [details, setDetails] = useState([]);

  var x1 = useRef();
  var x2 = useRef();
  var x3 = useRef();
  var x4 = useRef();
  var x5 = useRef();

  var f1 = () => {
    var id = x1.current.value;
    var name = x2.current.value;
    var category = x3.current.value;
    var dateCreated = x4.current.value;
    var creatorName = x5.current.value;
    console.log();

    axios
      .post("http://localhost:9090/articles", {
        id: id,
        name: name,
        category: category,
        dateCreated: dateCreated,
        creatorName: creatorName,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" >
      <h1>Add Articles Deatils</h1>
      <form action="">
        <input type="Number" placeholder=" id" ref={x1} />
        <br />
        <input type="text" placeholder=" name" ref={x2} />
        <br />
        <input type="text" placeholder=" category" ref={x3} />
        <br />
        <input type="Date" placeholder="Choose Date" ref={x4} />
        <br />
        <input type="text" placeholder=" creatorName" ref={x5} />
        <br />
        <button class="btn btn-outline-success" onClick={f1}>
          Submit
        </button>
      </form>
    </div>
  );
}


