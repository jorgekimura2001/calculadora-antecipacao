import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --color-blue-focus: #66AFE9;
        --color-blue-1: #3D75BB;
        --color-blue-0: #5D9CEC;
        
        --color-grey-4: #d1dce314;
        --color-grey-3: #656565;
        --color-grey-2: #CECECE;
        --color-grey-1: #DDE6E9;
        --color-grey-0: #F5F7FA;
        
        --color-black: #000000;
        --color-white: #ffffff;

        --color-error: #FD3F3F;
    }

    html, body{
        width: 100%;
        height: 100vh;
        background-color: var(--color-grey-0);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, a, img, ol, ul, li, form, label, article, aside, figure, figcaption, footer, header, nav, section, main, button, input  {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    article, aside, figcaption, figure, 
    footer, header, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote{
        quotes: none;
    }
    blockquote:before, blockquote:after{
        content: '';
        content: none;
    }
    button{
        cursor: pointer;
    }
`

export default GlobalStyle