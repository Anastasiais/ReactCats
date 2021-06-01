import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 40%;
  height: 40px;
  align-items: center;
  margin: 5px 5px;
  cursor: ${props => props.disabled? "not allowed" : "pointer"};
`;


function Button({onClick, disabled}) {
    return (
        <div>
           <StyledButton type="submit" disabled={disabled} onClick={onClick}>Get Cat</StyledButton>
        </div>
    )
}

export default Button;
