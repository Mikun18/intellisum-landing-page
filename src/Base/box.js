import styled,{css} from "styled-components";
import {
  space,
  color,
  layout,
  border,
  position,
  shadow,
  typography,
  background,
} from "styled-system";

const Box = styled.div`
    ${space}
    ${layout}
    ${color}
    ${position}
    ${shadow}
    ${border}
    ${typography}
    ${background}

    ${props => props.bgmodal && css`
      height: 100%;
      width: 100%;
      position: fixed;
      z-index: 1;
      top: 0px;
      background-color: white;
    `}
`

export default Box
