import { useContext, useEffect } from "react";
import { createGlobalStyle, css } from "styled-components";
import { UserContext } from "../context/UserContext";

export const Styles = () => {
  const { userLogado } = useContext(UserContext);

  useEffect(() => {
    console.log(userLogado);
  }, [userLogado]);
};

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.2px;
}

html, body{
    height: 100%;
}

input, button{
    background: none;
    outline: none;
    border: 0;
    display: block;

}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
    outline: none;
}

ul li{
    list-style: none;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
    color: var(---main-color-dark-gray);
}


${({ location }) =>
  location !== "/"
    ? css`
        #root {
          display: grid;
          grid-template-columns: 200px auto;
        }
      `
    : css`
        #root {
          display: initial;
          grid-template-columns: 200px auto;
        }
      `}




:root{
    --main-color-white: #ffffff;
    --main-color-opacity-white: #ffffff61;
    --light-box-shadow: rgba(0,0,0,.1);
    --main-color-black: #000000;
    --main-color-green: #45b34a;
    --main-color-light-green: #45b34a3d;
    --main-color-hover-green: #7be115;
    --main-border-color-green: #45b34a;
    --main-color-dark-gray: #2b2b2b;
    --main-color-light-gray: #b8b7b7;
    --main-color-text-gray: #999999;
}

`;
