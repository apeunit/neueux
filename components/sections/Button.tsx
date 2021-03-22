import React from 'react';
import PropTypes from 'prop-types';

const styles = ({type,size}) => {
  let style = '';
  let sizeStyle='';
  switch (type) {
    case 'primary':
      style = 'bg-black text-white';
      break;
    case 'secondary':
      style = 'bg-gray-100 text-black hover:bg-gray-200';
      break;
    case 'tertiary':
      style =
        'bg-transparent border border-solid border-color text-gray-500';
      break;
    case 'transparent':
      style = 'bg-transparent text-black';
      break;
    default:
      style = 'bg-black text-white';
  }

  switch (size) {
    case 'sm':
      sizeStyle = 'py-3 px-4 text-xs text-black leading-4 font-bold';
      break;
    case 'lg':
      sizeStyle =
        'py-5 px-5';
      break;
    default:
      sizeStyle = 'py-5 text-xs px-5';
  }
  return `${style} ${sizeStyle} focus:outline-none cursor-pointer leading-4 transition-250ms inline-block`;
};
const Button = ({
  id,
  children,
  type,
  onClick,
  disabled,
  rounded,
  size,
}) => (
  <button
    id={id}
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={[
      styles({type,size}),
      disabled ? '' : '',
      rounded && 'rounded-full inline-block',
    ].join(' ')}
  >
      {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
};
Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  rounded: true,
  loading: false,
  id: '',
};
export default Button;