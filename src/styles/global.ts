import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --red: #E62E4D;
        --shape: #ffffff;

        --title: #363F5F;
        --text:  #969CB3;
        --background: #F0F2F5;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width:1080px) {
            font-size: 93.75%;
        }
        @media (max-width:728) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;