import * as React from "react";
import PropTypes from "prop-types";

function SvgEye(props) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={props.width}
      height={props.height}
      fill={props.fill}
    >
      <path d="M320 256a64 64 0 11-64-64 64.07 64.07 0 0164 64zm189.81 9.42C460.86 364.89 363.6 426.67 256 426.67S51.14 364.89 2.19 265.42a21.33 21.33 0 010-18.83C51.14 147.11 148.4 85.33 256 85.33s204.86 61.78 253.81 161.25a21.33 21.33 0 010 18.84zM362.67 256A106.67 106.67 0 10256 362.67 106.79 106.79 0 00362.67 256z" />
    </svg>
  );
}

SvgEye.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default SvgEye;
