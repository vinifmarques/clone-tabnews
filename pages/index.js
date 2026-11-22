import StationReadout from "../components/StationReadout";
import TerminalScene from "../components/TerminalScene";
import Link from "next/link";
import PortfolioLayout from "../components/PortfolioLayout";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <PortfolioLayout path="/" title="Vini Marques — Portfólio">
      <TerminalScene>
        <div className={styles.introInner}>
          <p className={styles.label}>
            Transmissão ativa <span aria-hidden="true">/</span> Setor 04
          </p>
          <h1 id="nome">
            Vini{" "}
            <strong>Marques</strong>
          </h1>
          <p className={styles.manifesto}>
            Emergindo das ruínas do velho sistema.
          </p>

          <Link className={styles.jump} href="/projetos">
            Explorar projetos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <StationReadout />
      </TerminalScene>
    </PortfolioLayout>
  );
}
