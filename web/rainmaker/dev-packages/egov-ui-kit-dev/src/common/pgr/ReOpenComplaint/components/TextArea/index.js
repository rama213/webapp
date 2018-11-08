import React from "react";
import { TextArea } from "components";

const hintStyle = {
  color: "rgba(0, 0, 0, 0.3799999952316284)",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: "400",
  letterSpacing: "0.3px",
};

const TextAreaUi = ({ onChange, hintText, value }) => {
  return (
    <TextArea
      id="reopencomplaint-comment-field"
      hintText={hintText}
      hintStyle={hintStyle}
      rowsMax={2}
      onChange={onChange}
      underlineShow={true}
      underlineStyle={{ borderColor: "#e0e0e0" }}
      underlineFocusStyle={{ borderColor: "#e0e0e0" }}
      value={value}
    />
  );
};

export default TextAreaUi;
