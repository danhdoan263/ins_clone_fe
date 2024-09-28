import React from "react";
import PropsType from "prop-types";

const ButtonField = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  loading,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
      loading={loading}
    >
      {children}
    </button>
  );
};
//set type props
ButtonField.PropsType = {
  children: PropsType.node.isRequired,
  onclick: PropsType.func,
  type: PropsType.oneOf[("button", "submit", "reset")],
  disabled: PropsType.bool,
  className: PropsType.string,
  loading: PropsType.bool,
};
//set default value props
ButtonField.defaultProps = {
  children: "button defaultaaaa",
  loading: false,
};

export default ButtonField;
