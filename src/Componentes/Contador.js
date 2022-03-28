
import { useEffect, useMemo, useState } from "react";
import { DateTime } from "luxon";
import { useRouter } from "next/router";
import Voltear_Numero from "./Voltear_Numero";
import { Contenido_contador } from "../../Styled/StyledComponent";


const Obtener_tiempo = (FinDia) => {
    const now = DateTime.local();
    const { days, hours, minutes, seconds } = FinDia.diff(now, [
      "days",
      "hours",
      "minutes",
      "seconds",
    ]);
    return {
      days: Math.max(0, Math.trunc(days)),
      hours: Math.max(0, Math.trunc(hours)),
      minutes: Math.max(0, Math.trunc(minutes)),
      seconds: Math.max(0, Math.trunc(seconds)),
    };
  };
  
  const UsoContador = (FinDia) => {
    const initial = Obtener_tiempo(FinDia);
    const [{ current, previous }, setContador] = useState({
      current: initial,
      previous: null,
    });
  
    useEffect(() => {
      const timer = window.setInterval(() => {
        setContador(({ current }) => {
          return {
            previous: current,
            current: Obtener_tiempo(FinDia),
          };
        });
      }, 1000);
      return () => clearInterval(timer);

    }, []);
  
    return { previous, current };
  };
  
  export default function Contador() {
    const router = useRouter();
    const defaultTime = useMemo(() => DateTime.local(2022, 4, 12, 0), []);
    const initialDate = router.query.date
      ? DateTime.fromISO(
          Array.isArray(router.query.date)
            ? router.query.date[0]
            : router.query.date
        )
      : null;
    const { current } = UsoContador(
      initialDate && initialDate.isValid ? initialDate : defaultTime
    );
  
    const INTERVAL = 1000;
  
    return (
      <Contenido_contador>
        {Object.keys(current).map((key) => {
          return (
            <div key={key}>
              <Voltear_Numero
                animationDuration={INTERVAL}
                number={current[key]}
              />
              <div className="mobile">{key.charAt(0).toUpperCase()}</div>
              <div className="desktop">
                {key.charAt(0).toUpperCase() + key.substr(1)}
              </div>
            </div>
          );
        })}
      </Contenido_contador>
    );
  }