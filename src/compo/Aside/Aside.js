import React, { useState } from "react";
import Button from "../Button/Button";

const Aside = () => {
  const [note, setNote] = useState(
        localStorage.getItem("notelength").length>0
      ? JSON.stringify(localStorage.getItem("note"))
      : []
       );
  console.log(note);
    return
    <div>
      {note.map((note, index) => {
        <p><span>{index}.</span>{note}</p>;
      })}
    </div>;
};

export default Aside;
