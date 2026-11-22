import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function TerminalScene({ children }) {
  const scene = useRef(null);
  const reflection = useRef(null);

  useEffect(() => {
    const surface = scene.current;
    const glint = reflection.current;
    let pulse;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    function impact(event) {
      if (
        reduced.matches ||
        event.detail === 0 ||
        event.target.closest("a,button") ||
        window.getSelection()?.toString()
      )
        return;
      const bounds = surface.getBoundingClientRect();
      pulse?.cancel();
      glint.style.left = event.clientX - bounds.left + "px";
      glint.style.top = event.clientY - bounds.top + "px";
      pulse = glint.animate(
        [
          {
            transform: "translate(-50%,-50%) rotate(-22deg) scale(.35)",
            opacity: 0,
          },
          { opacity: 0.8, offset: 0.18 },
          {
            transform: "translate(-50%,-50%) rotate(-22deg) scale(1.25)",
            opacity: 0,
          },
        ],
        { duration: 680, easing: "ease-out" }
      );
    }
    function reset() {
      pulse?.cancel();
    }

    surface.addEventListener("click", impact);
    reduced.addEventListener("change", reset);
    return () => {
      surface.removeEventListener("click", impact);
      reduced.removeEventListener("change", reset);
      reset();
    };
  }, []);

  return (
    <section className={styles.intro} aria-labelledby="nome" ref={scene}>
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.monitorFrame}>
          <i className={styles.terminalCaret} />
        </div>
        <div className={styles.reflection} ref={reflection} />
      </div>
      {children}
    </section>
  );
}
