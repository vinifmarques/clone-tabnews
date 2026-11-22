import { useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function StationSignal() {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  function tune() {
    const clip = audio.current;
    if (!clip.paused) {
      clip.pause();
      return;
    }
    clip.currentTime = 0;
    clip.play().catch(() => setPlaying(false));
  }
  return (
    <>
      <button
        type="button"
        className={styles.stationSignal}
        onClick={tune}
        aria-label={
          playing
            ? "Parar o sinal de Satolep"
            : "Pelotas, sintonizar sinal musical"
        }
        title={playing ? "Satolep no ar" : "Sintonizar a estação"}
        aria-pressed={playing}
      >
        {playing ? "Satolep ♪" : "Pelotas / RS"}
      </button>
      <audio
        ref={audio}
        preload="none"
        src="/portfolio/sinal-satolep.wav"
        onPlaying={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
      />
    </>
  );
}
