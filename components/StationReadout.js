import { useEffect, useState } from "react";
import StationSignal from "./StationSignal";
import styles from "../styles/Home.module.css";

const stationTime = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

export default function StationReadout() {
  const [time, setTime] = useState("");
  useEffect(() => {
    function update() {
      setTime(stationTime.format(new Date()));
    }
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <dl className={styles.readout} aria-label="Estação de Pelotas">
      <div>
        <dt>Estação</dt>
        <dd>
          <StationSignal />
        </dd>
      </div>
      <div>
        <dt>Coordenadas</dt>
        <dd>31.77° S · 52.34° O</dd>
      </div>
      <div>
        <dt>Hora local</dt>
        <dd>{time ? <time dateTime={time}>{time}</time> : "––:––:––"}</dd>
      </div>
    </dl>
  );
}
