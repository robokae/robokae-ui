import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import { createGlobalStyle } from "styled-components";
import { typography } from "../constants";

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: ${typography.primaryFont}, Arial, Helvetica, sans-serif;
        font-size: ${typography.fontSize.body};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button, input, select, textarea, option, optgroup {
        font-family: inherit;
    }
`;
