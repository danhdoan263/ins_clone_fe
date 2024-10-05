import React from "react";
import PropTypes from "prop-types";

const ButtonField = ({
  children = "button default",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
      loading="false"
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
//set type props
ButtonField.PropsType = {
  children: PropTypes.node.isRequired,
  onclick: PropTypes.func,
  type: PropTypes.oneOf[("button", "submit", "reset")],
  disabled: PropTypes.bool,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default ButtonField;
