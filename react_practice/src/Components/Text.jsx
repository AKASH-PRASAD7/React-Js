import { React, useState } from "react";

const Text = () => {
  const [text, setText] = useState();
  const toupper = () => {
    setText(text.toUpperCase());
  };

  const textarea1 = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };
  return (
    <>
      <h1>Enter Text</h1>
      <textarea
        name="text"
        id="textid"
        placeholder="enter"
        cols="130"
        rows="10"
        value={text}
        onChange={textarea1}
      ></textarea>
      <br />
      <button onClick={toupper}>Convert To Upercase</button>
    </>
  );
};

export default Text;
