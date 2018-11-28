import { space, color, display } from "styled-system";
import styled from "styled-components";

const Button = styled.button`
  ${space}
  ${color}
  ${display}
`;

Button.displayName = "Button";

export default Button;
