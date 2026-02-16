import { createGlobalStyle } from "styled-components";
import { typography } from "../constants";

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: ${typography.primaryFont}, Arial, Helvetica, sans-serif;
        font-size: ${typography.fontSize.body};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${({ theme }) => theme.background.primary};
    }

    button, input, select, textarea, option, optgroup {
        font-family: inherit;
    }
`;
