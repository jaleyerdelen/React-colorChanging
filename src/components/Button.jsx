import React from "react";

function Button(props) {
  const {
    themeChange,
    changer: { theme, changeText, bgColor, textColor, btnColor }
  } = props;

  return (
    <div className={`mt-5 border-light ${bgColor} ${textColor}`}>
      <h1 className={`text-center ${textColor}`}>Light-Dark</h1>
      <div class="text-center mt-5">
        <button
          className={`btn text-center btn-lg ${btnColor}`}
          onClick={themeChange}
        >
          {changeText}
        </button>
      </div>
    </div>
  );
}

export default Button;
