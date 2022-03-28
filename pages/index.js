/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Contenido_principal, Titulo } from '../Styled/StyledComponent';
import Contador from "../src/Componentes/Contador";
import Pie_pagina from "../src/Componentes/Pie_pagina"


export default function Inicio() {
  return (
    <>
      <Contenido_principal>
        <Titulo>WE'RE LAUCHING SOON</Titulo>
        <Contador />
        {}
      </Contenido_principal>
      <Pie_pagina />
    </>
  );
}
