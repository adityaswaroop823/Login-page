import { useRef, useState } from "react";
import "./iinputTextBox.css";
import errorImg from "../../assets/images/errorIcon.png";

const InputTextBox = ({ hint, errorMsg, onChange }) => {
  const [data, setData] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  function onChangeHandler(e) {
    setData(e.target.value);
    onChange(e.target.value);
  }
  return (
    <div>
      <input
      fullWidth
        className="inputTextBox JSRegular"
        value={data}
        placeholder={hint}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChangeHandler(e)}
      />
      <div
        className="underline"
        style={{
          borderColor: focused
            ? "rgba(32, 183, 22, 1)"
            : "rgba(226, 232, 240, 1)",
        }}
      />

      {errorMsg.length != 0 && (
        <div className="errorMsgDiv">
          <img src={errorImg} alt="error" width="16px" height="16px" />
          <p>{errorMsg}</p>
        </div>
      )}
    </div>
  );
};

export default InputTextBox;
