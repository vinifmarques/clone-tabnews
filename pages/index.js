// ============================================================
//  Next.js Pages Router  →  pages/index.js
//  vinimarques.dev.br - Em construção (Post-Apocalypse Noir)
// ============================================================

import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [clock, setClock] = useState("--:--:-- LT");
  const [pct, setPct] = useState(0);
  const [dustParticles, setDustParticles] = useState([]);

  // Relógio local
  useEffect(() => {
    const update = () => {
      const n = new Date();
      const h = String(n.getHours()).padStart(2, "0");
      const m = String(n.getMinutes()).padStart(2, "0");
      const s = String(n.getSeconds()).padStart(2, "0");
      setClock(`${h}:${m}:${s} LT`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Progresso sincronizado com a barra CSS
  useEffect(() => {
    const total = 8000;
    const start = performance.now();
    let raf;
    const loop = (now) => {
      const el = (now - start) % total;
      setPct(Math.min(100, Math.floor((el / total) * 100)));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Partículas de poeira (geradas no client — evita mismatch de SSR)
  useEffect(() => {
    const N = window.innerWidth < 700 ? 25 : 60;
    const arr = Array.from({ length: N }).map(() => {
      const dur = Math.random() * 15 + 10;
      return {
        size: Math.random() * 2 + 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        dx: (Math.random() - 0.5) * 300,
        dy: -Math.random() * 400 - 100,
        dur,
        delay: -Math.random() * dur,
      };
    });
    setDustParticles(arr);
  }, []);

  return (
    <>
      <Head>
        <title>vinimarques.dev.br // Em construção</title>
        <meta name="description" content="vinimarques.dev.br - Em construção" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.atmosphere} />
      <div className={styles.dustLayer}>
        {dustParticles.map((p, i) => (
          <span
            key={i}
            className={styles.dustParticle}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}vw`,
              top: `${p.top}vh`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
            }}
          />
        ))}
      </div>
      <div className={styles.scanlines} />
      <div className={styles.grain} />
      <div className={styles.vignette} />

      <div className={styles.stage}>
        <div className={styles.topBar}>
          <div className={styles.topLeft}>
            <span className={styles.amberDot} />
            <span>TRANSMISSÃO ATIVA</span>
            <span>· SETOR 04</span>
          </div>
          <div className={styles.topRight}>{clock}</div>
        </div>

        <div className={styles.centerpiece}>
          <div className={styles.eyebrow}>
            <span>EM DESENVOLVIMENTO</span>
          </div>

          <h1 className={styles.wordmark}>
            vinimarques
            <span className={styles.dot}>.</span>
            <span className={styles.tld}>dev.br</span>
          </h1>

          <div className={styles.rule} />

          <p className={styles.tagline}>
            <strong>Emergindo das ruínas do velho sistema.</strong>
          </p>

          <div className={styles.telemetry}>
            <div className={styles.telCell}>
              <span className={styles.label}>Coordenadas</span>
              <span className={styles.value}>-31.77° / -52.34°</span>
            </div>
            <div className={styles.telCell}>
              <span className={styles.label}>Setor</span>
              <span className={styles.value}>BR · PELOTAS</span>
            </div>
            <div className={styles.telCell}>
              <span className={styles.label}>Status</span>
              <span className={`${styles.value} ${styles.blink}`}>
                RECONSTRUINDO
              </span>
            </div>
            <div className={styles.telCell}>
              <span className={styles.label}>ETA</span>
              <span className={styles.value}>EM BREVE</span>
            </div>
          </div>

          <div className={styles.statusBlock}>
            <div className={styles.statusLine}>
              <span>Reconstrução do sistema</span>
              <span className={styles.pct}>{pct}%</span>
            </div>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} />
            </div>
          </div>

          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/vini.mar.ques/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://github.com/vinifmarques"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>
            <svg className={styles.markGlyph} viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#ff8c42"
                strokeWidth="0.8"
                opacity="0.6"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
                stroke="#ff8c42"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <circle cx="12" cy="12" r="1.5" fill="#ff8c42" />
              <line
                x1="12"
                y1="2"
                x2="12"
                y2="6"
                stroke="#ff8c42"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <line
                x1="12"
                y1="18"
                x2="12"
                y2="22"
                stroke="#ff8c42"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <line
                x1="2"
                y1="12"
                x2="6"
                y2="12"
                stroke="#ff8c42"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <line
                x1="18"
                y1="12"
                x2="22"
                y2="12"
                stroke="#ff8c42"
                strokeWidth="0.5"
                opacity="0.6"
              />
            </svg>
            VINI · MARQUES
          </div>
          <div className={styles.centerMark}>
            &quot;the future is written in dust&quot;
          </div>
          <div>© MMXXVI</div>
        </div>
      </div>
    </>
  );
}
