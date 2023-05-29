import styled,{css} from "styled-components";

const Image = styled.img`
    width: ${props => props.width};
    position: ${props => props.position};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};

    @media(max-width: ${({theme}) => theme.breakpoints.md}){
        ${props => props.gen && css`
            width: 100%;
        `}

    }

`

export default Image