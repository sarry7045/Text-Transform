import React, { useState } from "react";
export default function Page1(props) {
  const [text, setText] = useState("Enter Text Here");

  const Uppercase = () => {
    console.log("Uppercase Clicked");
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert("Converted to Uppercase!", "Success");
  };

  const Lowercase = () => {
    console.log("LowerCase Clicked");
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert("Converted to Lowercase", "Success");
  };

  const Copytext = () => {
    console.log("CopyText Clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "Success");
  };

  const ExtraSpaces = () => {
    console.log("ExtraSpaces Clicked");
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.showAlert("Remove Extra Spaces", "Success");
  };

  const Cleartext = () => {
    console.log("Cleartext Clicked");
    let NewText = "";
    setText(NewText);
    props.showAlert("Text Cleared", "Success");
  };

  const HandleOnChange = (event) => {
    console.log("Uppercase Clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#42743" }}
      >
        <div className="mb-2">
          <label for="exampleFormControlTextarea1 text-center" className="form-label">
            <strong className="text-center mx-2">Textarea:</strong>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#42743",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={Uppercase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={Lowercase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={ExtraSpaces}>
            Remove Exatra Spaces
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={Copytext}>
            Copy Texts
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={Cleartext}>
            Clear Texts
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#42743" }}
      >
        <strong>
          <h4>Text Summary</h4>
        </strong>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
