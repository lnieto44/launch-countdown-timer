
import React from "react";
import "../Styled/estilos.css"


function Countdown({ Component, paginas }) {
  return (
    <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap"
          rel="stylesheet"
        />

      <Component {...paginas} />
    </>
  );
}

export default Countdown;
