
import { useEffect, useRef } from "react";
import { Contenido_Voltear_Numero } from "../../Styled/StyledComponent";

export default function Voltear_Numero({ animationDuration, number }) {
    const NumeroRef = useRef(number);
    const { current: Numero_anterior } = NumeroRef;
  
    useEffect(() => {
      NumeroRef.current = number;
    }, [number]);
  
    return (
      <Contenido_Voltear_Numero
        animationDuration={animationDuration}
        key={number}
        shouldAnimate={Numero_anterior !== number}
      >
        <div className="top next">{number}</div>
        <div className="flipper">
          <div className="bottom">{number}</div>
          <div className="top">{Numero_anterior}</div>
        </div>
        <div className="bottom current">{Numero_anterior}</div>
      </Contenido_Voltear_Numero>
    );
  }