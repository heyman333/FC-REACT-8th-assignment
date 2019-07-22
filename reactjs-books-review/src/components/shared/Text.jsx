import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  outline: none;
  border: 1px solid brown;
  height: 30px;
  &:focus {
    border: 1px solid orange;
  }
`;

const TextInput = ({ className, value, required, id, autoFocus, type }) => {
  return (
    <StyledTextInput
      type={type}
      className={className}
      value={value}
      required={required}
      id={id}
      autoFocus={autoFocus}
    />
  );
};

export default TextInput;
