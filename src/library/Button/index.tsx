import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  color: string;
  onAction: () => void;
};

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  color: string;
};

const Component = styled.button(
  (props: ButtonProps) => `
    padding: 1rem;
    border-radius: 30px;
    border: 2px solid ${props.primary ? "#56BEB4" : "#000"};
    min-width: 300px;
    color: ${props.color};
    font-size: 16px;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: ${props.primary ? "#56BEB4" : "#000"};
      color: #fff;
    }
`
);

const Button: React.FC<Props> = ({
  text,
  onAction,
  primary,
  secondary,
  color,
}: Props) => {
  return (
    <Component
      primary={primary}
      secondary={secondary}
      color={color}
      onClick={() => onAction()}
    >
      {text}
    </Component>
  );
};

export default Button;
