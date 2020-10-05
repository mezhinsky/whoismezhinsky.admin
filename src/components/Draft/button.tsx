import React from "react";
import PropTypes from "prop-types";

const StyleButton = ({ style, active, label, onToggle }): any => {

	const onToggleHandler = e => {
		e.preventDefault();
    if (typeof onToggle === "function") {
			onToggle(style)
    }
	}

  let className = "RichEditor-styleButton";
  if (active) {
    className += " RichEditor-activeButton";
	}
	return (
		<span className={className} onMouseDown={onToggleHandler}>
			{label}
		</span>
	);
}

StyleButton.propTypes = {
	style: PropTypes.string,
	active: PropTypes.bool,
	label: PropTypes.string,
  onToggle: PropTypes.func,
};

export default StyleButton;
