import { space, color, borders, display } from "styled-system";
import styled from "styled-components";

const Box = styled.div`
  ${space}
  ${color}
  ${borders}
  ${display}
`;

Box.defaultProps = {
  display: "inline-block",
  border: "1px solid"
};

Box.displayName = "Box";

export default Box;
