import React, {useState} from "react";
import "./homepage.css";
import Button from "../Button/Button";

const Homepage = () => {
  const [Text, setMassage] = useState("Please write here ... ");

  const forBoldChar = () => {
    console.log(Text);
    setMassage("##" + Text)
  }



  return (
    <body>
      <aside className="aside-container">
        <div className="aside-head">
          <h1>Notes</h1>
          <Button cl="green" title="+"></Button>
        </div>
        <hr></hr>
        <div className="aside-body"></div>
      </aside>
      <section>
        <div className="section-buttons">
          <div className="btns">
            <Button
              title="Write"
              className="bold-btn"
              padding="10px 20px"
              onclick={forBoldChar}
            ></Button>
            <Button
              title="Preview"
              className="bold-btn"
              padding="10px 20px"
            ></Button>
          </div>
          <ul className="bold">
            <Button title="H"></Button>
            <Button title="B" onclick={forBoldChar}></Button>
            <Button title="I"></Button>
            <Button title="$"></Button>
          </ul>
          <ul>
            <Button
              title={<span class="material-symbols-outlined">link</span>}
            ></Button>
            <Button
              title={
                <span class="material-symbols-outlined">low_priority</span>
              }
            ></Button>
            <Button
              title={<span class="material-symbols-outlined">unfold_more</span>}
            ></Button>
            <Button
              title={<span class="material-symbols-outlined">image</span>}
            ></Button>
          </ul>
          <ul>
            <Button
              title={
                <span class="material-symbols-outlined">
                  format_list_numbered_rtl
                </span>
              }
            ></Button>
            <Button
              title={<span class="material-symbols-outlined">subject</span>}
            ></Button>
            <Button
              title={<span class="material-symbols-outlined">toc</span>}
            ></Button>
          </ul>
        </div>
        <div className="section-textArea">
          <textarea cols="200" value={Text}></textarea>
        </div>
      </section>
    </body>
  );
};

export default Homepage;
