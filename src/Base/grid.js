import styled from "styled-components";
import { layout, grid } from "styled-system";

const Grid = styled.div`
    display: grid;
    place-items: ${props => props.placeItems};
    ${grid}
    ${layout}
`

export default Grid