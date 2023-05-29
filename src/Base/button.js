import styled from "styled-components";
import { variant, space, layout } from "styled-system";

const Button = styled('button')(
    {
        appearance: 'none',
        fontFamily: 'inherit',
        cursor: 'pointer'
    },
    variant({
        variants: {
            primary: {
                border: '1px solid black',
                bg: 'transparent',
                fontSize: '12px',
                borderRadius: '5px',
                padding: '12px'
            },
            secondary: {
                bg: 'black',
                border: 'none',
                fontSize: '12px',
                color: 'white',
                borderRadius: '5px',
                padding: '12px'
            }
        }
    }),
    space,
    layout
)

export default Button