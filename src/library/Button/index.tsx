import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  onAction: () => void;
};

const Component = styled.button(
  (props) => `
    //styles
`
);

const Button: React.FC<Props> = ({ text, onAction }: Props) => {
  return <Component onClick={() => onAction()}>{text}</Component>;
};

export default Button;
