import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const messages = [
    "Ajustando os detalhes",
    "Quase lá",
    "Preparando algo especial",
  ];

  const [statusIndex, setStatusIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setStatusIndex((i) => (i + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const orb1 = document.querySelector(`.${styles.orb1}`);
      const orb2 = document.querySelector(`.${styles.orb2}`);
      if (orb1) orb1.style.transform = `translate(${x}px, ${y}px)`;
      if (orb2) orb2.style.transform = `translate(${-x}px, ${-y}px)`;
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <Head>
        <title>Vini Marques | Em Construção</title>
        <meta
          name="description"
          content="vinimarques.dev.br - Site em construção"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.body}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>

        <main className={styles.container}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Em Desenvolvimento</span>
          </div>

          <h1 className={styles.title}>Algo novo está sendo criado</h1>

          <p className={styles.subtitle}>
            Estou construindo uma nova presença digital.
            <br />
            <strong>Volte em breve</strong> para conferir o resultado.
          </p>

          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
          </div>

          <div className={styles.domain}>vinimarques.dev.br</div>

          <div className={styles.footer}>
            <span>© 2026 Vini Marques</span>
            <span className={styles.divider}>•</span>
            <span
              style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {messages[statusIndex]}
            </span>
          </div>
        </main>
      </div>
    </>
  );
}
